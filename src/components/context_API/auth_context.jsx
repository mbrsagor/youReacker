import React, { Component, createContext } from 'react';

let AuthContext = null;
const { Provider, Consumer } = AuthContext = createContext();


class AuthProvider extends Component {
    state = {
        user: {
            name: 'mbr sagor',
            email: 'mbrsagor@gmail.com',
            profession: 'Full-stack software engineering'
        },
        isAuthenticated: true
    };

    toggleAuthention = () => {
        this.setState(prev =>({authentication: !prev.authentication}));
    }


    render() {
        return <Provider value={{... this.state, toggleAuth: this.toggleAuthention}}>{this.props.children}</Provider>
    }

}

export {AuthProvider, Consumer as AuthConsumer, AuthContext}