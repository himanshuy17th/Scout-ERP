import React, { useContext } from 'react';
import { DashboardContext } from '../../context/DashboardContext';
import '../../styles/Dashboard.css';  // Import CSS file

function LabourDashboard({users}) {
    // Access shared tasks and completeTask function from DashboardContext
    const { tasks, completeTask } = useContext(DashboardContext);

    return (
        <div>
            <h2>Labour Dashboard</h2>
            <h4>Daily Task List</h4>

            <ul>
                {tasks.map(task => (
                    <li key={task.id} className="mb-3">
                        {task.name} - 
                        <span className={task.completed ? "text-success" : "text-danger"}>
                            {task.completed ? " Completed" : " Pending"}
                        </span>
                        {!task.completed && (
                            <button 
                                onClick={() => completeTask(task.id)} 
                                className="btn btn-primary ml-3"
                            >
                                Mark as Completed
                            </button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default LabourDashboard;
