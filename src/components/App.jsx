import React from 'react';
import Profile from './profile';
import Product from '../components/product'
import MyState from '../components/state';
import MyEvent from '../components/my_events';
import MyForms from '../components/my_forms';
import MyFormik from '../components/formik'
import MyList from '../components/list';
import MyTable from './my_table';
import LifecycleDemo from '../components/life_cycle';
import HOC from '../components/hoc';
import ContextAPI from './context_API';
import MyReducer from '../components/my_reducer';
import MyReducer2 from '../components/my_reducer2';
import HooksAndContext from '../components/hook_context_api'


class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row mb-3">
                    <div className="col-md-6 offset-3">
                        <HooksAndContext />
                    </div>
                </div>
                <br /><br />
                <div className="row mb-3">
                    <div className="col-md-6 offset-3">
                        <MyReducer2 />
                    </div>
                </div>
                <br /><br />
                <div className="row mb-3">
                    <div className="col-md-6 offset-3">
                        <MyReducer />
                    </div>
                </div>
                <br /><br />
                <div className="row mb-3">
                    <div className="col-md-6 offset-3">
                        <ContextAPI />
                    </div>
                </div>
                <br /><br />
                 <div className="row mb-3">
                    <div className="col-md-6 offset-3">
                        <HOC />
                    </div>
                </div>
                <br /><br />
                <div className="row mb-3">
                    <div className="col-md-6 offset-3">
                        <LifecycleDemo />
                    </div>
                </div>
                <br /><br />
                <div className="row mb-3">
                    <div className="col-md-6 offset-3">
                        <MyTable />
                    </div>
                </div>
                <br /><br />
                <div className="row mb-3">
                    <div className="col-md-6 offset-3">
                        <MyList />
                    </div>
                </div>
                <br /><br />
                <div className="row mb-3">
                    <div className="col-md-6 offset-3">
                        <MyFormik />
                    </div>
                </div>
                <br/><br/>
                <div className="row mb-3">
                    <div className="col-md-6 offset-3">
                        <MyForms />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6 offset-3">
                        <MyEvent />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6 offset-3">
                        <MyState />
                    </div>
                </div>
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
