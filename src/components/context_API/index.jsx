import React, { Component } from 'react';

const Profile = () => {
    return (
        <AuthContext.Consumer>
            {value => (
                <div>
                    <p>Name: {value.user.name}</p>
                    <p>Email: {value.user.email}</p>
                </div>
            )}
        </AuthContext.Consumer>
    )
}

const NavBar = () => {

    return (
        <AuthContext.Consumer>
            {({isAuthenticated, toggleAuth}) =>(
                <>
                    {isAuthenticated ? <button onClick={toggleAuth} className="btn btn-info btm-sm">Logout</button> : <button onClick={toggleAuth} className="btn btn-info btm-sm">Login</button>}
                </>
            )}
        </AuthContext.Consumer>
    )
}

const User = () => {
    return (
        <AuthContext.Consumer>
            {value => (
                <div>
                    <NavBar />
                    <hr />
                    {value.isAuthenticated ? (<Profile />) : (<p>Please login</p>)}
                </div>
            )}
        </AuthContext.Consumer>
    )
}

const AuthContext = React.createContext();

class ContextAPI extends Component {

    state = {
        user: {
            name: 'mbr sagor',
            email: 'mbrsagor@gmail.com',
            profession: 'Full-stack software engineering'
        },
        isAuthenticated: true
    }

    toggleAuthention = () => {
        this.setState(prev =>({authentication: !prev.authentication}));
    }

    render() {
        // console.log(AuthContext)
        // const {isAuthenticated, user} = this.state;
        return (
            <div>
                <AuthContext.Provider value={{... this.state, toggleAuth: this.toggleAuthention}}>
                <h3>Welcome to Context API</h3>
                <User />
                 </AuthContext.Provider>
            </div>
        );
    }
}

export default ContextAPI;