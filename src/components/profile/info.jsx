import React from 'react';

class Info extends React.Component {
    render() {
        // console.log(this.props);
        return (
            <div>
                <h3>I'm {this.props.name}</h3>
                <p>I'm {this.props.bio}</p>
            </div>
        )
    }
}

export default Info;
