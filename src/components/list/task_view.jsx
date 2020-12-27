import React from 'react';

const task_view = ({ tasks = [], handleCompleter }) => {

    return (
        <div>
            <p>Tasks</p>
            <ul className="list-group">
                {tasks.map(task => (
                    <li className="list-group-item" key={task.id}>
                         <p style={{textDecoration: task.IsComple? 'line-through' : 'none'}}>{task.task}</p>
                        <p>
                            <input
                                type="checkbox"
                                checked={task.IsComple}
                                onChange={e => handleCompleter(task.id, e.target.checked)}
                            />
                            {task.IsComple ? 'Complete' : 'Not Complete'}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default task_view;
