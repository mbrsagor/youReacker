import React, { Component } from 'react';
import Forms from './forms'

class MyForms extends Component {

    state = {
        values:{
            name: '',
            email: '',
            password: ''
        },
        errors: {
            name: '',
            email: '',
            password: ''
        },
        touched: {
            name: false,
            email: false,
            password: false
        }
    }

    validate = () => {
       const errors = {}
       
       const {values:{name, email, password}} = this.state.errors
       
        if(!errors.name){
            errors.name = "Please provide a name"
        }
        if(!errors.email){
            errors.email = "Please provide a email"
        }
        if(!errors.password){
            errors.password = "Please provide a password"
        }
        return {
            errors,
            isValid: Object.keys(errors).length === 0
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
                    errors={this.state.errors}
                    changeHandler={this.changeHandler}
                    submitHandler={this.submitHandler}
                />
            </div>
        );
    }
}

export default MyForms;
