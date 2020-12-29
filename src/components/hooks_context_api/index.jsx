import React, {useContext} from 'react';
import {CounterContext} from '../../context/counter_context';

const ShowCount = ({ count }) => <h3>Count - {count}</h3>

const Controller = ({actions}) => {
    return (
        <div>
            <button onClick={actions.increment} className="btn btn-success btn-sm mr-2">
                <i className="fa fa-plus"></i>
            </button>
            <button onClick={actions.decrement}
                className="btn btn-success btn-sm mr-2">
                <i className="fa fa-minus"></i>
           </button>
            <button onClick={actions.reset}
                className="btn btn-danger btn-sm mr-2">
                <i className="fa fa-close"></i>
           </button>
        </div>
    )
}

const HooksAndContextAPI = () => {
    const { count, actions } = useContext(CounterContext)
    return (
        <div>
            <h2>Hook with Context API</h2>
            <ShowCount count={count} />
            <Controller actions={actions} />
        </div>
    )
}

export default HooksAndContextAPI;
