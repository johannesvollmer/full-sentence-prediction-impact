import Browser
import Html exposing (Html, button, div, text)
import Html.Events exposing (onClick)
import Html.Attributes
import Phrase exposing (Phrase, phraseSet)
import Random.List
import Random
import Json.Decode exposing (Decoder, field, string, int, float)

main =
  Browser.element
    { init = \() -> (initial, Cmd.none)
    , subscriptions = always Sub.none
    , update = update
    , view = view
    }


type Message
  = NextPhrase
  | Prepare (Maybe Phrase, List Phrase) -- phrase returned by command, selected at random
  | Start Time
  | Type Time String
  | Finish Time

type alias Model =
  { events: List Message
  , phrases: List Phrase
  , task: Task
  , iteration: Int
  }

initial: Model
initial = 
  { events = [] -- reverse for simple addition
  , phrases = phraseSet
  , task = Initial
  , iteration = 0
  }
  
type alias Time = Float

type Task 
  = Initial
  | Preparing Phrase
  | Typing String
  | Finished String -- string contains downloadable blob url


update : Message -> Model -> (Model, Cmd Message)
update event model = 
  let
    recordEvent = { model | events = event :: model.events }

    result = case event of
      NextPhrase -> recordEvent
      Prepare (Just phrase, phrases) -> { recordEvent | phrases = phrases, task = Preparing phrase }
      Prepare _ -> recordEvent -- do nothing if no more phrases exist

      Start time -> { recordEvent | task = Recording "" }
      Type time string -> { recordEvent | task = Recording string }

      Finish time -> { recordEvent | task = Finished "*gemessene daten*" }

    command = case event of
      NextPhrase -> Random.generate Prepare (Random.List.choose model.phrases)
      _ -> Cmd.none

  in (result, command)
  


view : Model -> Html Message
view model =
  let 
    contents = case model.task of 
      Initial -> div [] 
        [ text "Willkommen"
        , Html.button [ onClick NextPhrase] [ text "Los geht's!" ] 
        ]

      Preparing phrase -> div [] 
        [ text ("Prägen Sie sich folgende Phrase ein: `" ++ phrase.target ++ "`")
        , Html.button [ recordClick Start ] [ text "Starten" ]
        ]

      Recording transcription -> div []
        [ Html.input [ Html.Attributes.value transcription, recordTyping ] [] -- TODO focus?
        , Html.button [ recordClick Finish ] [ text "Fertig!" ] 
        ]

      Finished download -> div []
        [ text ("Schick mir bitte folgende Nachricht: " ++ download) 
        , Html.button [ onClick NextPhrase ] [ text "Weiter" ] 
        ] 

  in
    div []
      [ contents ]


recordTyping : Html.Attribute Message
recordTyping = 
  Html.Events.on "input" (Json.Decode.map2 Type timeStamp Html.Events.targetValue) 

recordClick : (Float -> Message) -> Html.Attribute Message
recordClick message = Html.Events.on "click" (timeStamp |> Json.Decode.map message)


timeStamp = field "timeStamp" float
