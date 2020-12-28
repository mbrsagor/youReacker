import React, {useContext} from 'react';
import {AuthContext} from './auth_context';


const NavBar = () => {

    const { isAuthenticated, toggleAuth } = useContext(AuthContext)
    
    if(isAuthenticated){
        return <button onClick={toggleAuth} className="btn btn-info btm-sm">Logout</button>
    }
    return <button onClick={toggleAuth} className="btn btn-info btm-sm">Login</button>
}

export default NavBar;
