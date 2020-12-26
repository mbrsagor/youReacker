import React, { Component } from 'react';

class ClickMe extends Component {

    state = {
        count: 0
    }


    render() {
        const { count } = this.state;
        return (
            <div>
                <h3>{count > 0 ? <p>{count}</p> : <p>Please state counting</p>}</h3>
                <button
                    onClick={() => {
                        this.setState(prevState => {
                            if(count >= 0){
                                return {
                                    count : 0
                                }
                            }else{
                                return {
                                    count: prevState.count+1
                                }
                            }
                        })
                    }}
                    className="btn btn-success btn-sm"
                >Click Me</button>
            </div>
        );
    }
}

export default ClickMe;
