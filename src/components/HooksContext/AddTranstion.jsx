import React, { useState } from 'react';

const AddTranstion = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    return(
        <>
            <h4>Add transtion</h4>
            <hr/>
            <form>
                <div className="form-group">
                    <label htmlFor="text">Transtion Name</label>
                    <input 
                        type="text"
                        name="text"
                        id="text"
                        value={text}
                        className="form-control"
                        placeholder="Enter your transtion name"
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div className="from-group mb-3">
                    <label htmlFor="deails">Transtion Details</label>
                    <textarea
                        name="deails"
                        id="detail" 
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="form-control"
                        placeholder="Tranation details"
                    />
                </div>
                <button className="btn btn-success btn-sm">Save</button>
            </form>
        </>
    )
}

export default AddTranstion;
