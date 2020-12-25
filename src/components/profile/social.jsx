import React from 'react';

class Socail extends React.Component {
    render() {
        return (
            <div>
                <p>Find me on socail</p>
                <ul>
                    {this.props.links.map(link => (
                       <li><a href={link.link}>{link.name}</a></li> 
                    ))}
                </ul>
            </div>
        )
    }
}

export default Socail;
