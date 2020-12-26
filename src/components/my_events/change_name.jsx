import React, { Component } from 'react'

export default class ChangeName extends Component {

    state = {
        name: 'Mbr Sagor',
        is_editable: false
    }

    changeHandler = event => {
        this.setState({name: event.target.value})
    }

    editAbleHandler = () => {
        this.setState({is_editable: true})
    }

    handlerEnterPrcess = event => {
        if(event.key === 'Enter'){
            if (event.target.value) {
                this.setState({is_editable:false})
            }
        }
    }

    render() {
        return (
            <div className="mt-5 mb-3">
                <p>Change name <button onClick={()=>{this.setState({is_editable:true})}}>Edit</button></p>
                {this.state.is_editable ? (
                    <input type="text" className="form-control" placeholder="Enter your name" value={this.state.name} onChange={this.changeHandler} onKeyPress={this.handlerEnterPrcess}/>
                ): <p onDoubleClick={this.editAbleHandler}><strong>{this.state.name}</strong></p>
                }
            </div>
        )
    }
}
