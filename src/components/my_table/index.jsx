import React, { Component } from 'react';
import TableView from './table_view'

class MyTable extends React.Component {

    state = {
        users: [
            { id: 1, first_name: 'John', last_name: 'deo' },
            { id: 2, first_name: 'mbr', last_name: 'sagor' },
            { id: 3, first_name: 'meg', last_name: 'mia' },
            { id: 4, first_name: 'ohi', last_name: 'mia' }
        ]
    }

    render() {
        return (
            <div>
                <h3>I'm Table</h3>
                <TableView data={this.state.users} />
            </div>
        )
    }
}

export default MyTable;
