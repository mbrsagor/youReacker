import React, {useReducer} from 'react';


const initalData = 0;

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return 0;
        default: return state;
    }
}

const MyReducer = props => {

    const [count, dispatch] = useReducer(reducer, initalData);

    return (
        <div>
            <h2>I am use Reducer</h2>
            <h3>Count: {count}</h3>
            <button onClick={() => dispatch({type: 'increment'})} className="btn btn-success btn-sm mr-2">+</button>
            <button onClick={() => dispatch({type: 'decrement'})} className="btn btn-success btn-sm mr-2">-</button>
            <button onClick={() => dispatch({type: 'reset'})} className="btn btn-danger btn-sm mr-2">(0)</button>
        </div>
    );
}

export default MyReducer;
