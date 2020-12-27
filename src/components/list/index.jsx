import React, { Component } from 'react';
import ViewTask from './task_view';

class MyList extends Component {

    state = {
        tasks: [
            {
                id: 1,
                task: 'Do some coding',
                IsComple: false
            }
        ]
    }

    handleCompleter = (id, checked) => {
        const tasks = [...this.state.tasks]
        let index = tasks.findIndex(task => task.id === id);
        tasks[index].IsComple = checked;

        this.setState({ tasks });
    }

    render() {
        return (
            <div>
                <ViewTask tasks={this.state.tasks} handleCompleter={this.handleCompleter}/>
            </div>
        );
    }
}

export default MyList;
