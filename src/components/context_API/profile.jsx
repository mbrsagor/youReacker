import React, {useContext} from 'react';
import {AuthContext} from './auth_context';


const Profile = () => {

    const { user } = useContext(AuthContext)

    return (
        <div>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    )
}

export default Profile;
