import React, { Component } from 'react';

import User from './user';
import {AuthProvider} from './auth_context';


class ContextAPI extends Component {

    render() {
        return (
            <div>
                <AuthProvider>
                    <h3>Welcome to Context API</h3>
                    <User />
                </AuthProvider>
            </div>
        );
    }
}

export default ContextAPI;
