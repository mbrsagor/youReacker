import React, {useReducer} from 'react';


const initalData = 0;

const reducer = (state, action) => {
    switch(action.type){
        case 'increment': {
            return state + 1
        }
        case 'decrement': {
            return state - 1
        }
        case 'reset': {
           return initalData
        }
        default: return initalData;
    }
}

const MyReducer = props => {

    const [count, dispatch] = useReducer(reducer, initalData)

    return (
        <div>
            <h3>Reducer Implementation</h3>
            <h3>Count: {count}</h3>
            <button onClick={() =>dispatch({type: 'increment'})} className="btn btn-success btn-sm ml-2"><i className="fa fa-plus"></i></button>
            <button onClick={() =>dispatch({type: 'decrement'})} className="btn btn-success btn-sm ml-2"><i className="fa fa-minus"></i></button>
            <button onClick={() =>dispatch({type: 'reset'})} className="btn btn-danger btn-sm ml-2"><i className="fa fa-close"></i></button>
        </div>
    )
}

export default MyReducer;
