# YouReacker
> The repo is pure React.JS project where has basic to advance topic in react.js step by step.

#### Install and run the repo in your local dev server.

```base
git clone https://github.com/mbrsagor/youReacker.git
cd youReacker
npm install
npm start
```
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
