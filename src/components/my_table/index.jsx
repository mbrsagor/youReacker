import React, { Component } from 'react';
import TableView from './table_view'

const itemPerPage = 1;

class MyTable extends Component {

    state = {
        users: [
            { id: 1, first_name: 'John', last_name: 'deo' },
            { id: 2, first_name: 'mbr', last_name: 'sagor' },
            { id: 3, first_name: 'meg', last_name: 'mia' },
            { id: 4, first_name: 'ohi', last_name: 'mia' }
        ],

        currentpage: 0
    }

    nextpage = () => {
        let totalPage = Math.ceil(this.state.users.length / itemPerPage);
        if(this.state.currentpage < totalPage){
            this.setState({currentpage: this.state.currentpage + 1});
        }
    }

    prevpage = () => {
        if(this.state.currentpage > 1){
            this.setState({currentpage: this.state.currentpage - 1});
        }
    }

    getItemPerPage = () => {
        const startIndex = (itemPerPage + this.state.currentpage) - itemPerPage;
        let endIndex =startIndex + itemPerPage;
        return this.state.users.slice(startIndex, endIndex);
    }

    render() {
        let data = this.getItemPerPage();
        const totalPage = Math.ceil(this.state.users.length / itemPerPage);
        const nextDisabled = (this.state.currentpage) === totalPage;
        const prevDisabled = this.state.currentpage < 1;

        return (
            <div>
                <h3>I'm Table</h3>
                <TableView
                    nextpage={this.nextpage}
                    prevpage={this.prevpage}
                    nextDisabled={nextDisabled}
                    prevDisabled={prevDisabled}
                    data={data}
                />
            </div>
        )
    }
}

export default MyTable;
