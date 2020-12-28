import React, { useContext } from 'react';

import {AuthContext} from './auth_context';
import Profile from './profile';
import NavBar from './navabar';


const User = () => {
    const { isAuthenticated } = useContext(AuthContext)

    return (
        <div>
            <NavBar />
            <hr />
            {isAuthenticated ? (<Profile />) : (<p>Please login</p>)}
        </div>
    );
}

export default User;
