import React, { Component } from 'react';
import ClickMe from './clickMe';
import TwoWayDataBinding from './two_way_data_binding';

class MyEvent extends Component {
    render() {
        return (
            <div>
                {/* <h2>MY Event</h2>
                <ClickMe/> */}
                <TwoWayDataBinding />
            </div>
        )
    }
}

export default MyEvent;
