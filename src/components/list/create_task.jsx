import React, { Component } from 'react';

class CreateTask extends Component {

    state = {
        task: ''
    }

    changeHandler = event => {
        this.setState({task: event.target.value})
    }

    submitHandler = event => {
        event.preventDefault();
        if(this.state.task){
            this.props.getTask(this.state.task);
            this.setState({task: ''}, () => {event.target.reset()})
        } else {
            alert('Please enter a task');
        }
    }

    render() {
        return (
            <div className="mt-3 mb-2">
                <form onSubmit={this.submitHandler}>
                    <input type="text"
                        className="form-control"
                        onChange={this.changeHandler}
                    />
                    <button type="submit" className="btn btn-success btn-sm mt-2">Add Task</button>
                </form>  
            </div>
        );
    }
}

export default CreateTask;
