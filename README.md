# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


###### Context API

```javascript
import React, { Component, createContext } from 'react'


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


const Navbar = () => {

    return (
        <AuthContext.Consumer>
            {({isAuthenticated, toggleAuth}) => (
                <>
                    {isAuthenticated ? <button onClick={toggleAuth} className="btn btn-danger btn-sm">Logout</button> : <button onClick={toggleAuth} className="btn btn-success btn-sm">Login</button>}
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
                    <Navbar />
                    <hr />
                    {value.isAuthenticated ? <Profile /> : <p>Please login.</p>}
                </div>
            )}
        </AuthContext.Consumer>
    )
}


const AuthContext = createContext();

/**
 * Main conponent
 */

class ContextAPI extends Component {

    state = {
        user: {
            name: 'Mbr sagor',
            email: 'mbrsagor@gmail.com',
            profession: 'software engineer'
        },
        isAuthenticated: true
    }

    toggleAuthenticated = () => {
        this.setState(prev => ({isAuthenticated: !prev.isAuthenticated}));
    }

    render() {
        return (
            <div>
                <AuthContext.Provider value={{
                    ...this.state, 
                    toggleAuth: this.toggleAuthenticated
                }}>
                    <h2>Context API</h2>
                    <User />
                </AuthContext.Provider>
            </div>
        )
    }
}

export default ContextAPI

```