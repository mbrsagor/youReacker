import React from 'react';
import Info from './info';
import Skills from './skill';
import Socail from './social';

class Profile extends React.Component {

    render() {
        return (
            <div>
                <Info />
                <Skills />
                <Socail />
            </div>
        )
    }
}

export default Profile;
