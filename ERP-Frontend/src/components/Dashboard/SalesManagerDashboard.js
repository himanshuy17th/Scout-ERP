import React, { useContext, useState } from 'react';
import { DashboardContext } from '../../context/DashboardContext';
import '../../styles/Dashboard.css';  // Import CSS file

function SalesManagerDashboard({users}) {
    const { labours, addLabour, deleteLabour, trackInTime, trackOutTime } = useContext(DashboardContext);
    const [area, setArea] = useState('Noida');  // Default area
    const [newLabourName, setNewLabourName] = useState('');

    // Function to select an area
    const handleAreaChange = (event) => {
        setArea(event.target.value);
    };

    // Function to add a new labour to the selected area using context
    const handleAddLabour = () => {
        if (newLabourName) {
            addLabour(newLabourName, area); // Add labour to global state with selected area
            setNewLabourName('');
            alert(`Labour added to ${area} successfully.`);
        }
    };

    // Function to delete a labour from the selected area using context
    const handleDeleteLabour = (labourName) => {
        deleteLabour(labourName);
        alert(`${labourName} removed from ${area}.`);
    };

    return (
        <div>
            <h2>Sales Manager Dashboard</h2>

            {/* Area Selection */}
            <div className="my-4">
                <label>Select Area:</label>
                <select value={area} onChange={handleAreaChange} className="form-control">
                    <option value="Noida">Noida</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Greater Noida">Greater Noida</option>
                </select>
            </div>

            {/* Add New Labour */}
            <div className="my-4">
                <h4>Add New Labour in {area}</h4>
                <input
                    type="text"
                    placeholder="Labour Name"
                    value={newLabourName}
                    onChange={(e) => setNewLabourName(e.target.value)}
                    className="form-control mb-2"
                />
                <button onClick={handleAddLabour} className="btn btn-success">Add Labour</button>
            </div>

            {/* Manage and Track Labours in the selected area */}
            <div className="my-4">
                <h4>Manage Labours in {area}</h4>
                <ul>
                    {labours
                        .filter(labour => labour.area === area)
                        .map((labour, index) => (
                            <li key={index} className="mb-2">
                                {labour.name} - In-Time: {labour.inTime || 'Not Recorded'}, Out-Time: {labour.outTime || 'Not Recorded'}
                                <button onClick={() => trackInTime(labour.name)} className="btn btn-primary ml-2">Track In-Time</button>
                                <button onClick={() => trackOutTime(labour.name)} className="btn btn-secondary ml-2">Track Out-Time</button>
                                <button onClick={() => handleDeleteLabour(labour.name)} className="btn btn-danger ml-2">Delete</button>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
}

export default SalesManagerDashboard;
