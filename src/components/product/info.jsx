import React from 'react';


class Info extends React.Component {
    render() {
        return (
            <>
                <h4>Name: {this.props.name}</h4>
                <p>Config: {this.props.config}</p>
                <p>Colors: {this.props.colors}</p>
            </>
        )
    }
}

export default Info;
