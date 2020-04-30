import React from "react"
import ReactDOM from "react-dom"
import {createStore} from "redux"
import feedbackReducer from "./reducers/feedbackReducer"
require("./styles.css")

const store = createStore(feedbackReducer)

const App = () => {
  return (
    <div>
        <p>
            Positive feedback given: {store.getState().positive}
            <button onClick = {() => store.dispatch({type: "POSITIVE"})}>
                Click here to give positive feedback
            </button>
        </p>
        <p>
            Neutral feedback given: {store.getState().neutral}
            <button onClick = {() => store.dispatch({type: "NEUTRAL"})}>
                Click here to give neutral feedback
            </button>
        </p>
        <p>
            Constructive criticism given: {store.getState().constructive}
            <button onClick = {() => store.dispatch({type: "CONSTRUCTIVE"})}>
                Click here to give constructive criticism
            </button>
        </p>
        <p>
            <button onClick = {() => store.dispatch({type: "RESET"})}>
                Click here to reset the feedback counter
            </button>
        </p>
    </div>
  )
}

const renderApp = () => {
    ReactDOM.render(<App />, document.getElementById("root"))
}
renderApp()
store.subscribe(renderApp)
