import React, { Component } from 'react';
import ClickMe from './clickMe';
import TwoWayDataBinding from './two_way_data_binding';
import ChangeName from './change_name';

class MyEvent extends Component {
    render() {
        return (
            <div>
                <h2>MY Event</h2>
                <ClickMe/>
                <TwoWayDataBinding />
                <ChangeName />
            </div>
        )
    }
}

export default MyEvent;
