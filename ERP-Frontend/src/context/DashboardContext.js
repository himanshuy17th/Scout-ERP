import React, { createContext, useState } from 'react';

// Create Context
export const DashboardContext = createContext();

// Provider Component
export const DashboardProvider = ({ children }) => {
    // Centralized data states
    const [salesManagers, setSalesManagers] = useState([]);
    const [labours, setLabours] = useState([]);
    const [attendanceRecords, setAttendanceRecords] = useState({});
    const [salaries, setSalaries] = useState({});
    const [tasks, setTasks] = useState([
        { id: 1, name: "Organize tools and materials", completed: false },
        { id: 2, name: "Complete assigned section of work", completed: false },
        { id: 3, name: "Report daily progress", completed: false }
    ]);

    // New centralized state for HR
    const [employees, setEmployees] = useState([
        { id: 1, name: "John Doe", attendance: false, salary: 50000 },
        { id: 2, name: "Jane Smith", attendance: false, salary: 45000 },
        { id: 3, name: "David Brown", attendance: false, salary: 60000 }
    ]);

    // Admin functions to manage Sales Managers
    const addSalesManager = (name) => {
        setSalesManagers([...salesManagers, { name, area: 'Noida' }]); // Default area can be updated
    };

    const deleteSalesManager = (name) => {
        setSalesManagers(salesManagers.filter(manager => manager.name !== name));
    };

    // Sales Manager functions to manage Labours
    const addLabour = (name, area) => {
        setLabours([...labours, { name, area, inTime: null, outTime: null }]);
    };

    const deleteLabour = (name) => {
        setLabours(labours.filter(labour => labour.name !== name));
    };

    // Track in-time and out-time for Labours
    const trackInTime = (name) => {
        setLabours(labours.map(labour => 
            labour.name === name ? { ...labour, inTime: new Date().toLocaleTimeString() } : labour
        ));
    };

    const trackOutTime = (name) => {
        setLabours(labours.map(labour => 
            labour.name === name ? { ...labour, outTime: new Date().toLocaleTimeString() } : labour
        ));
    };

    // HR functions to manage attendance and salaries
    const markAttendance = (id, status) => {
        setEmployees(prevEmployees =>
            prevEmployees.map(emp => emp.id === id ? { ...emp, attendance: status } : emp)
        );
    };

    const updateSalary = (id, newSalary) => {
        setEmployees(prevEmployees =>
            prevEmployees.map(emp => emp.id === id ? { ...emp, salary: newSalary } : emp)
        );
    };

    // Labour functions to manage tasks
    const completeTask = (taskId) => {
        setTasks(tasks.map(task => 
            task.id === taskId ? { ...task, completed: true } : task
        ));
    };

    return (
        <DashboardContext.Provider
            value={{
                // Shared data
                salesManagers,
                labours,
                attendanceRecords,
                salaries,
                tasks,
                employees, // Added employees to the context

                // Admin functions
                addSalesManager,
                deleteSalesManager,

                // Sales Manager functions
                addLabour,
                deleteLabour,
                trackInTime,
                trackOutTime,

                // HR functions
                markAttendance,
                updateSalary,

                // Labour functions
                completeTask
            }}
        >
            {children}
        </DashboardContext.Provider>
    );
};
