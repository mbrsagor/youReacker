import React from 'react';
import ShowData from '../state/showData';
import Controller from './controller';

class MyState extends React.Component {

    state = {
        number: 0
    }

    increment = () => {
        this.setState(prev =>({number: prev.number +1}))
    }

    decrement = () => {
        this.setState(prev =>({number:prev.number - 1}))
    }

    render() {

        // setTimeout(() => {
        //     this.setState({number: this.state.number + 1});
        // }, 1000)

        return (
            <div className="text-center">
                <ShowData number={this.state.number} />
                <Controller increment={this.increment}  decrement={this.decrement}/>
            </div>
        )
    }
}

export default MyState;
