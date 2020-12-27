import React from 'react';

function Forms({values={}, errors={}, changeHandler,submitHandler}) {
    return (
        <div>
            <form onSubmit={submitHandler} className="mb-3">
                <p>Please fill up the from</p>
                <div className="from-group">
                    <label htmlFor="name">What is your name?</label>
                    <input type="text"
                        className={errors.name ? 'form-control': 'form-control'}
                        placeholder="Mbr Sagor"
                        id="name"
                        name="name"
                        onChange={changeHandler}
                        value={values.name}
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>
                <div className="from-group">
                    <label htmlFor="name">What is your email?</label>
                    <input type="text"
                        className={errors.email ? 'form-control': 'form-control'}
                        placeholder="mbrsagor@gmail.com"
                        id="email"
                        name="email"
                        onChange={changeHandler}
                        value={values.email}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="from-group">
                    <label htmlFor="password">What is your Password?</label>
                    <input type="password"
                        className={errors.password ? 'form-control': 'form-control'}
                        placeholder="mbrsagor@gmail.com"
                        id="password"
                        name="password"
                        onChange={changeHandler}
                        value={values.password}
                    />
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </div>
                <button className="btn btn-success btm-sm mt-2">Submit</button>
            </form>
        </div>
    );
}

export default Forms;
