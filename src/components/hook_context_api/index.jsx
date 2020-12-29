import React, { useState, useEffect } from 'react';
import User from '../../api/user.api';

const HooksAndContext = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        User.getUsers(4000)
            .then(data => {
                setUsers(data)
            });
    });

    return (
        <div>
            <h3>Hooks with context API Demo </h3>
            <ul className="list-group">
                {users && users.length > 0 ? users.map(user => (<li className="list-group-item" key={user.id}>Name:{user.name} ||Name:{user.email}</li>)) : <h3>Loading...</h3>}
            </ul>
        </div>
    )
}

export default HooksAndContext;
