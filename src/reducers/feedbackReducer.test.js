import feedbackReducer from "./feedbackReducer"
import deepFreeze from "deep-freeze"

describe("The Unicafe feedback reducer", () => {
    const initialState = {
        positive: 0,
        neutral: 0,
        constructive: 0
    }

    test("successfully returns an initial state", () => {
        const action = {
            type: "NO_OP"
        }
        const wrongState = feedbackReducer(undefined, action)
        console.log(wrongState)
        expect(wrongState).toEqual(initialState)
    })

    test("correctly updates the feedback state upon increment", () => {
        const action = {
            type: "NEUTRAL"
        }
        const state = initialState
        console.log(state)
        deepFreeze(state)

        const newState = feedbackReducer(state, action)
        deepFreeze(newState)
        console.log(newState)
        expect(newState).toEqual({
            positive: 0,
            neutral: 1,
            constructive: 0
        })
    })

    test("can reset all counters to zero", () => {
        const action = {
            type: "RESET"
        }
        const state = {
            positive: 6,
            neutral: 8,
            constructive: 5
        }
        const resetState = feedbackReducer(state, action)
        deepFreeze(resetState)
        console.log(resetState)
        expect(resetState).toEqual({
            positive: 0,
            neutral: 0,
            constructive: 0
        })
    })

    test("returns the original state if the specified action is invalid", () => {
        const action = {
            type: "ANANASHILLO"
        }
        const state = {
            positive: 2,
            neutral: 0,
            constructive: 3
        }
        const sameState = feedbackReducer(state, action)
        deepFreeze(sameState)
        console.log(sameState)
        expect(sameState).toEqual(state)
    })
})
