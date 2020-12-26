import React from 'react';
import Profile from './profile';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-3">
                        <h2>Welcome to my Homepage</h2>
                        <hr/>
                        
                        <Profile id={1} />
                        <Profile id={2} />
                        <Profile id={3} />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
