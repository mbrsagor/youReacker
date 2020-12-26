import React, { Component } from 'react'

class Controller extends Component {

    render() {
        return (
            <div>
                <button onClick={this.props.increment} className="btn btn-info btn-sm">Increment</button>
                <button onClick={this.props.decrement} className="btn btn-info btn-sm ml-2">Decrement</button>
            </div>
        )
    }
}

export default Controller;
