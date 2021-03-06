import React from 'react';
import ContextAPIDemo from '../components/context_API/inline_context_demo';
import MyFormik from '../components/formik';
import HOC from '../components/hoc';
import Hooks from '../components/hooks';
import HooksContext from '../components/HooksContext';
import HooksAndContextAPI from '../components/hooks_context_api';
import LifecycleDemo from '../components/life_cycle';
import MyList from '../components/list';
import MyEvent from '../components/my_events';
import MyForms from '../components/my_forms';
import MyReducer from '../components/my_reducer';
import MyReducer2 from '../components/my_reducer2';
import Product from '../components/product';
import MyState from '../components/state';
import { CounterProvider } from '../context/counter_context';
import ContextAPI from './context_API';
import MyTable from './my_table';
import Profile from './profile';
// import PostApp from '../components/post_app';
// import {PostProvider} from '../context/post_context';


class App extends React.Component {
    render() {
        return (
            <div className="container">
                {/* <div className="row mb-3">
                    <div className="col-md-6 offset-3">
                        <PostProvider>
                             <PostApp />
                        </PostProvider>
                    </div>
                </div>
                <br /><br /> */}
                <div className="row">
                    <div className="col-md-6 offset-3">
                        <HooksContext />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6 offset-3">
                        <CounterProvider>
                            <HooksAndContextAPI />
                        </CounterProvider>
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
                        <Hooks />
                    </div>
                </div>
                <br /><br />
                <div className="row mb-3">
                    <div className="col-md-6 offset-3">
                        <ContextAPIDemo />
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
