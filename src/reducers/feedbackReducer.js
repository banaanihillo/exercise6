const initialState = {
    positive: 0,
    neutral: 0,
    constructive: 0
}

const feedbackReducer = (state = initialState, action) => {
    switch (action.type) {
        case "POSITIVE":
            const incrementPositive = {...state, positive: state.positive + 1}
            return incrementPositive
        case "NEUTRAL":
            const incrementNeutral = {...state, neutral: state.neutral + 1}
            return incrementNeutral
        case "CONSTRUCTIVE":
            const incrementConstructive = {...state, constructive: state.constructive + 1}
            return incrementConstructive
        case "RESET":
            return {positive: 0, neutral: 0, constructive: 0}
        default:
            return state
    }
}

export default feedbackReducer
