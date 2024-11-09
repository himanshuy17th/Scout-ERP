import React, { useEffect, useContext, useState } from 'react';
import { DashboardContext } from '../../context/DashboardContext';
import axios from 'axios'; // Import axios for making HTTP requests
import '../../styles/Dashboard.css'; // Import CSS file

function AdminDashboard({user}) {
    const {
        addSalesManager,
        deleteSalesManager,
        addLabour,
        deleteLabour
    } = useContext(DashboardContext);

    const [salesManagers, setSalesManagers] = useState([]); // State to store fetched sales managers
    const [labours, setLabours] = useState([]); // State to store fetched labours

    const predefinedAdminID = "ADMIN123"; // Example predefined Admin ID

    // Function to fetch Sales Managers data from the backend
    const fetchSalesManagers = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/admin/salesManagers');
            setSalesManagers(response.data); // Set fetched data to state
        } catch (error) {
            console.error('Error fetching Sales Managers:', error);
        }
    };

    // Function to fetch Labours data from the backend
    const fetchLabours = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/admin/labours');
            setLabours(response.data); // Set fetched data to state
        } catch (error) {
            console.error('Error fetching Labours:', error);
        }
    };

    // Fetch data when the component mounts
    useEffect(() => {
        fetchSalesManagers();
        fetchLabours();
    }, []); // Empty dependency array ensures it runs only once

    // Function to add a Sales Manager using context
    const handleAddSalesManager = async () => {
        const newManager = prompt("Enter Sales Manager name:");
        if (newManager) {
            await addSalesManager(newManager);
            alert(`${newManager} added successfully.`);
            fetchSalesManagers(); // Fetch the updated list of sales managers
        }
    };

    // Function to delete a Sales Manager using context
    const handleDeleteSalesManager = async () => {
        const nameToDelete = prompt("Enter Sales Manager name to delete:");
        await deleteSalesManager(nameToDelete);
        alert(`${nameToDelete} removed.`);
        fetchSalesManagers(); // Fetch the updated list after deletion
    };

    // Function to add a Labour using context
    const handleAddLabour = async () => {
        const newLabour = prompt("Enter Labour name:");
        if (newLabour) {
            await addLabour(newLabour, 'Noida'); // Example area, this could be dynamic
            alert(`${newLabour} added successfully.`);
            fetchLabours(); // Fetch the updated list of labours
        }
    };

    // Function to delete a Labour using context
    const handleDeleteLabour = async () => {
        const nameToDelete = prompt("Enter Labour name to delete:");
        await deleteLabour(nameToDelete);
        alert(`${nameToDelete} removed.`);
        fetchLabours(); // Fetch the updated list after deletion
    };

    // Function to view locations (simulated)
    const viewLocations = () => {
        alert("Displaying locations of Sales Managers and Labours (for demonstration purposes).");
    };

    return (
        <div>
            <h2>Admin Dashboard</h2>

            {/* Display Predefined Admin ID */}
            <p><strong>Admin ID:</strong> {predefinedAdminID}</p>

            {/* CRUD Operations for Sales Managers */}
            <div className="my-4">
                <h4>Manage Sales Managers</h4>
                <button onClick={handleAddSalesManager} className="btn btn-success mr-2">Add Sales Manager</button>
                <button onClick={handleDeleteSalesManager} className="btn btn-danger">Delete Sales Manager</button>
                <ul className="mt-2">
                    {salesManagers.length > 0 ? (
                        salesManagers.map((manager, index) => (
                            <li key={index}>{manager.name}</li>
                        ))
                    ) : (
                        <p>No Sales Managers available</p>
                    )}
                </ul>
            </div>

            {/* CRUD Operations for Labours */}
            <div className="my-4">
                <h4>Manage Labours</h4>
                <button onClick={handleAddLabour} className="btn btn-success mr-2">Add Labour</button>
                <button onClick={handleDeleteLabour} className="btn btn-danger">Delete Labour</button>
                <ul className="mt-2">
                    {labours.length > 0 ? (
                        labours.map((labour, index) => (
                            <li key={index}>{labour.name}</li>
                        ))
                    ) : (
                        <p>No Labours available</p>
                    )}
                </ul>
            </div>

            {/* View Locations Section */}
            <div className="my-4">
                <h4>View Locations</h4>
                <button onClick={viewLocations} className="btn btn-info">View Sales Managers' and Labours' Locations</button>
            </div>
        </div>
    );
}

export default AdminDashboard;
