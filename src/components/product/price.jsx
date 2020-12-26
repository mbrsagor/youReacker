import React from 'react';


class Price extends React.Component {
    render() {
        return (
            <>
                <h4>Price:</h4>
                <ul>
                    <li>Regular price: {this.props.price}</li>
                </ul>
            </>
        )
    }
}

export default Price;
