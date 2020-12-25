import React from 'react';
import Profile from './profile';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-3">
                        <h1>Welcome to my Homepage</h1>
                        <hr/>
                        
                        <Profile />
                        <Profile />
                        <Profile />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
