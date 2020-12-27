import React from 'react';

function Forms({values={}, changeHandler,submitHandler}) {
    return (
        <div>
            <form onSubmit={submitHandler} className="mb-3">
                <p>Please fill up the from</p>
                <div className="from-group">
                    <label htmlFor="name">What is your name?</label>
                    <input type="text"
                        className="form-control"
                        placeholder="Mbr Sagor"
                        id="name"
                        name="name"
                        onChange={changeHandler}
                        value={values.name}
                    />
                </div>
                <div className="from-group">
                    <label htmlFor="name">What is your email?</label>
                    <input type="text"
                        className="form-control"
                        placeholder="mbrsagor@gmail.com"
                        id="email"
                        name="email"
                        onChange={changeHandler}
                        value={values.email}
                    />
                </div>
                <div className="from-group">
                    <label htmlFor="password">What is your Password?</label>
                    <input type="password"
                        className="form-control"
                        placeholder="mbrsagor@gmail.com"
                        id="password"
                        name="password"
                        onChange={changeHandler}
                        value={values.password}
                    />
                </div>
                <button className="btn btn-success btm-sm mt-2">Submit</button>
            </form>
        </div>
    );
}

export default Forms;
