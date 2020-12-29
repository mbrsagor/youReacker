import React, {useContext} from 'react';
import {CounterContext} from '../../context/counter_context';

const ShowCount = ({ count }) => <h3>Count - {count}</h3>
const Button = props => (
    <button className={props.className} {...props} onClick={() => props.dispatch({ type: props.type })}>
        {props.children}
    </button>)

const Controller = ({dispatch}) => {
    
    return (
        <div>
            <Button
                className="btn btn-success btn-sm mr-2"
                type="INCREMENT"
                dispatch={dispatch}>
                <i className="fa fa-plus"></i>
            </Button>
            <Button
                className="btn btn-success btn-sm mr-2"
                type="DECREMENT"
                dispatch={dispatch}>
                <i className="fa fa-minus"></i>
           </Button>
            <Button
                className="btn btn-danger btn-sm mr-2"
                type="RESET"
                dispatch={dispatch}>
                <i className="fa fa-close"></i>
           </Button>
        </div>
    )
}

const HooksAndContextAPI = () => {
    const { count, dispatch } = useContext(CounterContext)
    return (
        <div>
            <h2>Hook with Context API</h2>
            <ShowCount count={count} />
            <Controller dispatch={dispatch} />
        </div>
    )
}

export default HooksAndContextAPI;
