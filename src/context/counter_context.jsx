import React, { createContext, useReducer } from 'react';
import reducer, {createActions} from '../reducers/counter_reducer';

const CounterContext = createContext()

const CounterProvider = props => {
    const [count, dispatch] = useReducer(reducer, 0);
    const actions = createActions(dispatch)

    return (
        <CounterContext.Provider value={{count, actions}}>
            {props.children}
        </CounterContext.Provider>
    )
};

export {CounterContext, CounterProvider}
