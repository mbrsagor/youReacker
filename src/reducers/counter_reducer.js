export const INCREMENT = 'INCREMENT';
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";

export const createActions = dispatch => ({
    increment: () => dispatch({type: INCREMENT}),
    decrement: () => dispatch({type: DECREMENT}),
    reset: () => dispatch({type: RESET})
})

const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT:
            console.log(INCREMENT);
            return state + 1
        case DECREMENT:
            console.log(DECREMENT);
            return state - 1
        case RESET:
            console.log(RESET);
            return 0
        default: return state
    }
};

export default reducer;
