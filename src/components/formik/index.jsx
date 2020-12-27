import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
// import MyForm from './form'

import * as Yup from 'yup';

const myValidtionsScheme = Yup.object().shape({
    name: Yup.string().required('Name is required').min(3, 'Minumum 3 chr').max(15, 'Maximum 15 char'),
    email: Yup.string().email('Enter valid email address').required('Email must be required'),
    password: Yup.string('Enter password').required('Password must be 15 char')
});

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
                    }}
                    validationSchema={myValidtionsScheme}
                    // validateOnBlur={true}
                    // validateOnChange={false}
                    // component={MyForm}
                    >
                    
                    {(props) => {
                        // console.log(props);
                        return <Form>
                            <div className="form-group">
                                <Field
                                className="form-control mb-2"
                                name="name"
                                placeholder="Enter your name" />
                                {/* {props.errors.name && props.touched.name && <div className="text-warning">{props.errors.name}</div>} */}
                                <ErrorMessage name="name" />
                            </div>
                            <div className="form-group">
                                <Field
                                className="form-control mb-2"
                                name="email"
                                type="email"
                                placeholder="Enter your email" />
                                {/* {props.errors.email && props.touched.email && <div>{props.errors.email}</div>} */}
                                <ErrorMessage name="email" />
                            </div>
                            <div className="form-group">
                                <Field
                                type="password"
                                className="form-control mb-2"
                                name="password"
                                placeholder="**********" />
                                {/* {props.errors.password && props.touched.password && <div>{props.errors.password}</div>} */}
                                <ErrorMessage name="password" />
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
