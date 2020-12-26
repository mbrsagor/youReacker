import React from 'react';
import Profile from './profile';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-3">
                        <div className="card">
                            <div className="card-header">
                                <h2 className="card-title">Welcome to my Homepage</h2>
                            </div>
                            <div className="card-body">
                                <Profile id={1} />
                                <hr/>
                                <Profile id={2} />
                                <hr/>
                                <Profile id={3} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
