import React from "react"
import ReactDOM from "react-dom"
import {createStore} from "redux"
import feedbackReducer from "./reducers/feedbackReducer"

const store = createStore(feedbackReducer)

const App = () => {
  return (
    <div>
        <p>
            {store.getState()}
        </p>
        <p>
            <button onClick = {() => store.dispatch({type: "POSITIVE"})}>
                Click here to give positive feedback
            </button>
        </p>
        <p>
            <button onClick = {() => store.dispatch({type: "NEUTRAL"})}>
                Click here to give neutral feedback
            </button>
        </p>
        <p>
            <button onClick = {() => store.dispatch({type: "CONSTRUCTIVE"})}>
                Click here to give constructive criticism
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
