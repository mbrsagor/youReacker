import React, { Component } from 'react';
import ViewTask from './task_view';
import CreateTask from './create_task';
import ControlTask from './control_task'

class MyList extends Component {

    state = {
        tasks: [
            {
                id: 1,
                task: 'Do some coding',
                IsComple: false
            }
        ],
        searchTram: ''
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

    search = () => {
        if (!this.state.searchTram) {
            return this.state.tasks
        }

        return this.state.tasks.filter(_task => 
            _task.task.toLocaleLowerCase().includes(this.state.searchTram.toLocaleLowerCase())
        )
    }

    handleSearchTram = event => {
        this.setState({searchTram: event.target.value})
    }

    render() {
        let tasks = this.search();
        return (
            <div>
                <CreateTask getTask={this.getTask} />
                <ControlTask handleSearchTram={this.handleSearchTram} />
                <ViewTask tasks={tasks} handleCompleter={this.handleCompleter}/>
            </div>
        );
    }
}

export default MyList;
