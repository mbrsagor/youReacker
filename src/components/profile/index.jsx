import React from 'react';
import Info from './info';
import Skills from './skill';
import Socail from './social';

class Profile extends React.Component {
    name = 'Bozlur Rosid Sagor';
    bio = 'full-stack software Engineer';
    skills = ['Python', 'JavaScript', 'Dart', 'Swift'];
    links = [
        {link: 'http://www.facebook.com/mbrsagor', name: 'Facebook'},
        {link: 'http://www.linkedin.com/mbrsagor', name: 'Linkedin'},
        {link: 'http://www.github.com/mbrsagor', name: 'GitHub'},
        {link: 'http://www.twitter.com/mbrsagor', name: 'Twitter'},
    ];
    render() {
        // console.log(this.props);
        return (
            <div>
                <Info name={this.name} bio={this.bio}/>
                <Skills skills={this.skills} />
                <Socail links={this.links}/>
            </div>
        )
    }
}

export default Profile;
