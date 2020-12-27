import React, { Component } from 'react';
import ViewTask from './task_view';
import CreateTask from './create_task';

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

    getTask = task => {
        console.log(task);
        let taskObject = {
            IsComple: false
        }
        taskObject.task = task;
        taskObject.id = new Date().getTime()

        let tasks = [...this.state.tasks]
        tasks.push(taskObject);

        this.setState({tasks})
    }

    render() {
        return (
            <div>
                <CreateTask getTask={this.getTask} />
                <ViewTask tasks={this.state.tasks} handleCompleter={this.handleCompleter}/>
            </div>
        );
    }
}

export default MyList;
