import React, { createContext, useReducer } from 'react';

const CounterContext = createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        case 'RESET':
            return 0
        default: return state
    }
};

const CounterProvider = props => {
    const [count, dispatch] = useReducer(reducer, 0)

    return (
        <CounterContext.Provider value={{count, dispatch}}>
            {props.children}
        </CounterContext.Provider>
    )
};

export {CounterContext, CounterProvider}
