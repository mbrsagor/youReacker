import React from 'react';

class Skills extends React.Component {
    
    render() {
        return (
            <div>
                <p>Skills:</p>
                <ul>
                    {this.props.skills.map(skill => (
                       <li>{skill}</li> 
                    ))}
                </ul>
            </div>
        )
    }
}

export default Skills;
