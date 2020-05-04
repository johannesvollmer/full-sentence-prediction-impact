import Browser
import Html exposing (Html, button, div, text)
import Html.Events exposing (onClick)
import Html.Attributes
import Phrase exposing (Phrase, phraseSet)
import Random.List
import Random exposing (Generator)
import Json.Decode exposing (Decoder, field, string, int, float)
import Random.Extra exposing (combine)

main =
  Browser.element
    { init = \() -> (initial, Random.generate Randomize randomize)
    , subscriptions = always Sub.none
    , update = update
    , view = view
    }

blockCount = 4
timepoints = [0.0, 0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9, 1.0] |> List.repeat blockCount |> List.concat
blockSize = List.length timepoints // blockCount

type Message
  = Randomize (List RandomPhrase)
  | Next Time
  | Type Time String

type alias Time = Float

type alias Model =
  { events: List Message
  , phrases: List RandomPhrase -- drained from front, randomized order
  , phraseIndex: Int
  , blockIndex: Int
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
  , blockIndex = 0
  , mode = Ready
  }
  
randomize: Generator (List RandomPhrase)
randomize = 
  let 
    shuffleSuggestions: Phrase -> Generator Phrase
    shuffleSuggestions phrase = 
      Random.List.shuffle (phrase.target :: phrase.variants)
        |> Random.map (List.take 3 >> Phrase phrase.target)

    phrases: Generator (List Phrase)
    phrases = phraseSet |> List.map shuffleSuggestions |> combine

  in Random.map2
    (List.map2 (\phrase point -> RandomPhrase phrase.target phrase.variants point))
    (Random.andThen Random.List.shuffle phrases)
    (Random.List.shuffle timepoints)



type Mode
  = Ready

  | Presenting
  | Typing String
  
  | Download Results
  
-- contains downloadable blob url
type alias Results = String

update : Message -> Model -> (Model, Cmd Message)
update event model = 
  let
    recordEvent = { model | events = event :: model.events }
    phrasesCompleted = remainderBy blockSize (model.phraseIndex + 1) == 0
    blocksCompleted = model.phraseIndex // blockSize == 3

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
        Typing _ -> if phrasesCompleted then { nextPhrase | mode = Ready } else nextPhrase
        Download _ -> model

      Type time newValue -> case model.mode of
        Typing oldValue -> { recordEvent | mode = Typing newValue }
        _ -> model

  in (result, Cmd.none)


view : Model -> Html Message
view model =
  let 
    contents = case (model.mode, model.phrases) of 
      (Ready, _) -> div [] 
        [ text "Bereit für den nächsten Schritt."
        , Html.button [ recordClick Next ] [ text "Los geht's!" ] 
        ]

      (Presenting, phrase :: _) -> div [] 
        [ text ("Prägen Sie sich folgende Phrase ein: `" ++ phrase.target ++ "`")
        , Html.button [ recordClick Next ] [ text "Starten" ]
        ]

      (Typing transcription, phrase :: _) -> div []
        [ Html.input [ Html.Attributes.value transcription, recordTyping ] [] -- TODO focus?
        , Html.button [ recordClick Next ] [ text "Fertig!" ] 
        ]

      (Download download, _) -> div []
        [ text ("Schick mir bitte folgende Nachricht: " ++ download) 
        ]

      _ -> text "Fertig, yay!"

  in
    div []
      [ contents ]


recordTyping : Html.Attribute Message
recordTyping = 
  Html.Events.on "input" (Json.Decode.map2 Type timeStamp Html.Events.targetValue) 

recordClick : (Float -> Message) -> Html.Attribute Message
recordClick message = Html.Events.on "click" (timeStamp |> Json.Decode.map message)


timeStamp = field "timeStamp" float
