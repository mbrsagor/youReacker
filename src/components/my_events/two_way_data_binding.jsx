import React, { Component } from 'react'

class TwoWayDataBinding extends Component {

    state = {
        name: 'Sagor',
        count: 0
    }

    changeHandler = event => {
        // console.log(event.target.value);
        this.setState({name: event.target.value})
    }

    render() {
        console.log(this.state.name);
        const { count } = this.state; 
        return (
            <div>
                <h2>Two way data binding</h2>
                <input type="text"
                    className="form-control"
                    placeholder="Change your name"
                    value={this.state.name}
                    onChange={this.changeHandler}
                />
                <button className="btn btn-success mt-2" onClick={() =>{this.setState({count:count+1})}}>Click to count : {this.state.count}</button>
            </div>
        )
    }
}

export default TwoWayDataBinding;
