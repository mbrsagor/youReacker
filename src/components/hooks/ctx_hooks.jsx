import React, { Component, createContext, useContext } from 'react'


const Profile = () => {

    const { user } = useContext(AuthContext);
    
    return (
        <div>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    )
}


const Navbar = () => {

    const {isAuthenticated, toggleAuth} = useContext(AuthContext);

    if(isAuthenticated){
        return <button onClick={toggleAuth} className="btn btn-danger btn-sm">Logout</button>
    } 
    return <button onClick={toggleAuth} className="btn btn-success btn-sm">Login</button>
}


const User = () => {
    const {isAuthenticated} = useContext(AuthContext);
    
    return (
        <div>
            <Navbar />
            <hr />
            {isAuthenticated ? <Profile /> : <p>Please login.</p>}
        </div>
    )
}


const AuthContext = createContext();

/**
 * Main conponent
 */

class HookContextAPI extends Component {

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

export default HookContextAPI
