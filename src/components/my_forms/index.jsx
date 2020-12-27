import React, { Component } from 'react';
import Forms from './forms'

class MyForms extends Component {

    state = {
        values:{
            name: '',
            email: '',
            password: '',
        }
    }

    changeHandler = event => {
        this.setState({
            values: {
                ... this.state.values,
                [event.target.name] : event.target.value
            }
        });
    };

    submitHandler = event => {
        event.preventDefault();
        console.log(this.state.values);
    }

    render() {
        return (
            <div>
                <h3>My forms</h3>
                <Forms
                    values={this.state.values}
                    changeHandler={this.changeHandler}
                    submitHandler={this.submitHandler}
                />
            </div>
        );
    }
}

export default MyForms;
