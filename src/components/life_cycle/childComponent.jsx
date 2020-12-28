import React, { Component } from 'react'

class ChildComponent extends Component {

    componentWillUnmount() {
        console.log("Unmounting...");
    }

    render() {
        console.log("Child component from call Rendered")
        return (
            <div>
                <h3>{this.props.data}</h3>
                <button onClick={() => this.props.remove(this.props.index)} className="btn btn-danger">Remove</button>
            </div>
        )
    }
}

export default ChildComponent
