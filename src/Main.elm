module Main exposing (..)

import Browser
import Html exposing (Html, button, div, text)
import Html.Events exposing (onClick)
import Html.Attributes
import Phrase exposing (Phrase, phraseSet)
import Random.List
import Random exposing (Generator)
import Json.Decode exposing (Decoder, field, string, int, float)
import Json.Encode as Encode
import Random.Extra exposing (combine)
import File.Download
import Levenshtein
import Task
import Browser.Dom

main =
  Browser.element
    { init = \() -> (initial, Random.generate Randomize randomize)
    , subscriptions = always Sub.none
    , update = update
    , view = view
    }

blockCount = 3
timepointsamples = [0.0, 0.5, 1.0] -- [0.0, 0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9, 1.0]

blockSize = List.length timepointsamples

type Message
  = None
  | Randomize (List RandomPhrase)
  | Next Time
  | Type Time String
  | Suggestion String Time
  | Download

type alias Time = Float

type alias Model =
  { events: List Encode.Value
  , phrases: List RandomPhrase -- drained from front, randomized order
  , phraseIndex: Int
  , mode: Mode
  }

type alias RandomPhrase =
  { target: String
  , suggestions: List String
  , percentage: Float -- percentage of text that must be entered until suggestions are shown
  }

initial: Model
initial = 
  { events = [] -- reverse actually
  , phrases = [] -- to be filled with randomized data
  , phraseIndex = 0
  , mode = Ready
  }
  
randomize: Generator (List RandomPhrase)
randomize = 
  let 
    shuffleSuggestions phrase = 
      Random.List.shuffle (phrase.target :: phrase.variants)
        |> Random.map (List.take 3 >> Phrase phrase.target)
        
    shuffledTimepoints = timepointsamples |> List.repeat blockCount |> List.map Random.List.shuffle |> combine
    phrases = phraseSet |> List.map shuffleSuggestions |> combine

  in Random.map2
    (List.map2 (\phrase point -> RandomPhrase phrase.target phrase.variants point))
    (Random.andThen Random.List.shuffle phrases)
    (Random.map List.concat shuffledTimepoints)



type Mode
  = Ready

  | Presenting
  | Typing String
  
-- contains downloadable blob url
type alias Results = String

update : Message -> Model -> (Model, Cmd Message)
update event model = 
  let
    records = case event of
      Randomize data -> Encode.object [ ("phrases", Encode.list phraseToJson data) ] :: model.events
      Next time -> Encode.object [ ("time", Encode.float time), ("next", Encode.null) ] :: model.events
      Type time text -> Encode.object [ ("time", Encode.float time), ("text", Encode.string text) ] :: model.events
      Suggestion phrase time -> Encode.object [ ("time", Encode.float time), ("suggestion", Encode.string phrase) ] :: model.events
      _ -> model.events

    phraseToJson phrase = Encode.object 
      [ ("target", Encode.string phrase.target)
      , ("threshold", Encode.float phrase.percentage)
      , ("suggestions", Encode.list Encode.string phrase.suggestions)
      ]

    recordEvent = { model | events = records }
    phrasesCompleted = remainderBy blockSize (model.phraseIndex + 1) == 0

    nextPhrase = 
      { recordEvent
      | phrases = List.tail recordEvent.phrases |> Maybe.withDefault []
      , phraseIndex = recordEvent.phraseIndex + 1
      , mode = Presenting
      }

    result = case event of
      Randomize phrases -> { recordEvent | phrases = phrases }
      Next _ -> case model.mode of
        Ready -> { recordEvent | mode = Presenting }
        Presenting -> { recordEvent | mode = Typing "" }
        Typing _ -> 
          if phrasesCompleted then { nextPhrase | mode = Ready } 
          else nextPhrase

      Type _ newValue -> case model.mode of
        Typing _ -> { recordEvent | mode = Typing newValue }
        _ -> model

      Suggestion _ _ -> 
          if phrasesCompleted then { nextPhrase | mode = Ready } 
          else nextPhrase

      _ -> model

    command = case event of
      Download -> File.Download.string "messungen.json" "text/json" 
        (List.reverse model.events |> Encode.list identity |> Encode.encode 4)
        
      Next _ -> case model.mode of
        Presenting -> Task.attempt (always None) (Browser.Dom.focus "phrase-textbox")
        _ -> Cmd.none

      _ -> Cmd.none

  in (result, command)


view : Model -> Html Message
view model =
  let 
    phraseIndex = remainderBy blockSize model.phraseIndex + 1
    progress = "(" ++ String.fromInt phraseIndex ++ "/" ++ String.fromInt blockSize ++ ")"

    contents = case model.phrases of
      [] -> 
          [ Html.p [] [text "Schick mir bitte folgende Datei: "]
          , Html.button [ onClick Download ] [ text "Herunterladen" ] 
          ]

      phrase :: _ -> case model.mode of 
        Ready -> 
          [ Html.p [] [text "Entspanne dich und warte auf das Ok von Johannes."]
          , Html.button [ recordClick Next, Html.Attributes.class "next" ] [ text "Experiment starten" ] 
          ]

        Presenting ->
          [ Html.h2 [] [text ("Phrase " ++ progress ++ "")]
          , Html.p [ Html.Attributes.class "phrase" ] [text phrase.target]
          , Html.button [ recordClick Next, Html.Attributes.class "next" ] [ text "Zeitmessung Starten!" ]
          ]

        Typing transcription -> 
          let

            requiredLetters = phrase.percentage * (String.length phrase.target |> toFloat) |> floor
            requiredPart = String.left requiredLetters phrase.target
            transcribedPart = String.left requiredLetters transcription
            showSuggestions = 
              if phrase.percentage == 0.0 then True
              else if phrase.percentage == 1.0 then False
              else String.length transcription >= requiredLetters && 
                (Levenshtein.distance requiredPart transcribedPart |> toFloat) <= (String.length phrase.target |> toFloat) * 0.4 -- The standard error rate for the QWERTY is 12.7%

            suggestion prediction = Html.button 
              [ recordClick (Suggestion prediction), Html.Attributes.disabled (not showSuggestions), Html.Attributes.class "suggestion" ] 
              [ text (if showSuggestions then prediction else "...") ]

            suggestions = phrase.suggestions |> List.map suggestion

            pre = 
              [ Html.h2 [] [text ("Phrase " ++ progress)]
              , Html.input 
                [ Html.Attributes.value transcription
                , Html.Attributes.class "phrase"
                , Html.Attributes.id "phrase-textbox"
                , recordTyping
                , Html.Events.preventDefaultOn "paste" (Json.Decode.succeed (None, True))
                ] [] 
              ]

            post = [ Html.button [ recordClick Next, Html.Attributes.class "next" ] [ text "Zeitmessung beenden!" ] ]
            
          in List.concat [ pre, suggestions, post ]

  in div [ Html.Attributes.id "content" ] contents


recordTyping : Html.Attribute Message
recordTyping = Html.Events.on "input" (Json.Decode.map2 Type timeStamp Html.Events.targetValue) 

recordClick : (Float -> Message) -> Html.Attribute Message
recordClick message = Html.Events.on "click" (timeStamp |> Json.Decode.map message)

timeStamp = field "timeStamp" float

