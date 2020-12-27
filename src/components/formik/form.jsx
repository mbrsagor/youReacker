import React from 'react';
import {Formik, Form, Field} from 'formik';

const MyForm = (props) => {
    return (
       <Form>
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
    );
}

export default MyForm;
