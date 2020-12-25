import React from 'react';
import Profile from './profile';

class App extends React.Component {
    render() {
        return (
            <div class="container">
                <div className="row">
                    <div className="col-md-6 offset-3">
                        <h1>Welcoe to our Homepage</h1>
                        <Profile />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
