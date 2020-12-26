import React from 'react';
import Profile from './profile';
import Product from '../components/product'

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
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
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title"><h3>I'm calling from Product component</h3></h3>
                            </div>
                            <div className="card-body">
                                <Product id={1}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
