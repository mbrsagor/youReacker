import React from 'react';

const ControlTask = props => {
    return (
        <div>
            <input type="text"
                className="form-control"
                placeholder="Seach sonething"
                value={props.searchTram}
                onChange={props.handleSearchTram}
            />
        </div>
    );
}

export default ControlTask;
