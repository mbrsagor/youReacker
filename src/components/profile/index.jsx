import React from 'react';

import {featchData} from '../../profile_data';
import Info from './info';
import Skills from './skill';
import Socail from './social';

class Profile extends React.Component {
    
    constructor(props) {
        super(props);
        // console.log(this.props);
        const profile = featchData(props.id);
        this.state = {
            id: profile.id  ||'',
            name: profile.name ||'',
            bio: profile.bio ||'',
            skills: profile.skills ||[],
            links: profile.links ||[]
        }
    }

    render() {
        // console.log(this.props);
        const {name, bio, skills, links} = this.state;
        return (
            <div>
                <Info name={name} bio={bio}/>
                <Skills skills={skills} />
                <Socail links={links}/>
            </div>
        )
    }
}

export default Profile;
