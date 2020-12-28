import React from 'react'

const TableView = ({data=[], nextpage, prevpage, nextDisabled, prevDisabled}) =>{
    return (
        <div>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>
                                <button className="btn btn-success btn-sm mr-2"><i class="fa fa-edit"></i></button>
                                <button className="btn btn-danger btn-sm"><i class="fa fa-trash"></i></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <button disabled={prevDisabled} onClick={prevpage} className="btn btn-primary btm-sm mr-2"><i className="fa fa-arrow-right"></i></button>
                <button disabled={nextDisabled} onClick={nextpage} className="btn btn-primary btm-sm"><i className="fa fa-arrow-left"></i></button>
            </div>
        </div>
    )
}

export default TableView;
