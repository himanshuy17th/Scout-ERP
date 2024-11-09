import React, { useContext } from 'react';
import { DashboardContext } from '../../context/DashboardContext';
import '../../styles/Dashboard.css';  // Import CSS file

function HRDashboard({users}) {
    const { employees = [], markAttendance, updateSalary } = useContext(DashboardContext); // Fallback to empty array if employees is undefined

    const toggleAttendance = (id) => {
        const employee = employees.find(emp => emp.id === id);
        if (employee) {
            markAttendance(id, !employee.attendance); // Toggle attendance
        }
    };

    const calculateSalaries = () => {
        alert("Salaries calculated and processed for all employees.");
    };

    const viewDataset = () => {
        alert("Displaying all employee data.");
    };

    return (
        <div>
            <h2>HR Department Dashboard</h2>

            {/* Attendance Management Section */}
            <div className="my-4">
                <h4>Manage Attendance</h4>
                <ul>
                    {employees.map(employee => (
                        <li key={employee.id} className="mb-2">
                            {employee.name} - Attendance: 
                            <span className={employee.attendance ? "text-success" : "text-danger"}>
                                {employee.attendance ? " Present" : " Absent"}
                            </span>
                            <button 
                                onClick={() => toggleAttendance(employee.id)} 
                                className="btn btn-primary ml-3"
                            >
                                {employee.attendance ? "Mark Absent" : "Mark Present"}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Salary Management Section */}
            <div className="my-4">
                <h4>Calculate Salaries</h4>
                <button onClick={calculateSalaries} className="btn btn-success">
                    Calculate and Process Salaries
                </button>
                <ul className="mt-2">
                    {employees.map(employee => (
                        <li key={employee.id}>
                            {employee.name} - Salary: ${employee.salary}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Access Dataset Section */}
            <div className="my-4">
                <h4>Employee Dataset</h4>
                <button onClick={viewDataset} className="btn btn-info">View Dataset</button>
            </div>
        </div>
    );
}

export default HRDashboard;
