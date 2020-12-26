import React, { Component } from 'react';

class ShowData extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.number}</h2>
            </div>
        );
    }
}

export default ShowData;
