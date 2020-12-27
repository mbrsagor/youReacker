import React, { Component } from 'react';
import {Formik, Form, Field} from 'formik';

class MyFormik extends Component {
    render() {
        return (
            <div>
                <h2>Formik Demo</h2>
                <Formik
                    initialValues={{name:'', email:'', password:''}}
                    onSubmit={(values, formikBag) => {
                        console.log(values);
                        console.log(formikBag);
                    }}>
                    
                    {(props) => {
                        // console.log(props);
                        return <Form>
                            <div className="form-group">
                                <Field
                                className="form-control mb-2"
                                name="name"
                                placeholder="Enter your name" />
                            </div>
                            <div className="form-group">
                                <Field
                                className="form-control mb-2"
                                name="email"
                                type="email"
                                placeholder="Enter your email" />
                            </div>
                            <div className="form-group">
                                <Field
                                type="password"
                                className="form-control mb-2"
                                name="password"
                                placeholder="**********" />
                            </div>
                            <button type="submit" className="btn btn-success btn-sm">save</button>
                        </Form>
                    }}
                </Formik>
            </div>
        );
    }
}

export default MyFormik;
