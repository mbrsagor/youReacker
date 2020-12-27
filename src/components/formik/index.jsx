import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
// import MyForm from './form'

import * as Yup from 'yup';

const CustomField = ({name, type='text', placeholder}) => (
    <div className="form-group">
        <Field
        className="form-control mb-2"
        name={name}
        type={type}
        placeholder={placeholder} />
        {/* {props.errors.name && props.touched.name && <div className="text-warning">{props.errors.name}</div>} */}
        <ErrorMessage name={name} />
    </div>
)

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
                    initialValues={{name:'', email:'', password:'', phone: ''}}
                    onSubmit={(values, formikBag) => {
                        console.log(values);
                        console.log(formikBag);
                        formikBag.resetForm();
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
                                <CustomField name="name" placeholder="Enter your name" />
                                <ErrorMessage name="name" />
                            </div>
                            <div className="form-group">
                                <CustomField name="email" type="email" placeholder="Enter email address" />
                                <ErrorMessage name="email" />
                            </div>
                            <div className="form-group">
                                <CustomField name="password" type="password" placeholder="************" />
                                <ErrorMessage name="password" />
                            </div>
                            <div className="form-group">
                                <Field name="phone" as="select" className="form-control">
                                    <option value="macbook">MacBook</option>
                                    <option value="window">Windows</option>
                                    <option value="linux">Linux</option>
                                    <option value="other">Other</option>
                               </Field>
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
