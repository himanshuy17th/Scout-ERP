import React, { useState, useEffect } from 'react';
import { DashboardProvider } from './context/DashboardContext';
import AdminLogin from './components/Login/AdminLogin';
import SalesManagerLogin from './components/Login/SalesManagerLogin';
import LabourLogin from './components/Login/LabourLogin';
import HRLogin from './components/Login/HRLogin';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import SalesManagerDashboard from './components/Dashboard/SalesManagerDashboard';
import LabourDashboard from './components/Dashboard/LabourDashboard';
import HRDashboard from './components/Dashboard/HRDashboard';
import './styles/Dashboard.css';

function App() {
    const [role, setRole] = useState(null);
    const [users, setUsers] = useState([]);

    // Fetch users from the backend when the component mounts
    useEffect(() => {
        if (role) {
            fetch('http://localhost:5000/api/users')
                .then(response => response.json())
                .then(data => setUsers(data))
                .catch(error => console.error('Error fetching users:', error));
        }
    }, [role]);

    const handleLogin = (userRole) => {
        setRole(userRole);
    };

    const renderDashboard = () => {
        switch (role) {
            case 'Admin':
                return <AdminDashboard users={users} />;
            case 'SalesManager':
                return <SalesManagerDashboard users={users} />;
            case 'Labour':
                return <LabourDashboard users={users} />;
            case 'HR':
                return <HRDashboard users={users} />;
            default:
                return (
                    <div className="container mt-5">
                        <h1 className="text-center">ERP Login</h1>
                        <div className="row mt-4">
                            <div className="col-md-3">
                                <AdminLogin onLogin={() => handleLogin('Admin')} />
                            </div>
                            <div className="col-md-3">
                                <SalesManagerLogin onLogin={() => handleLogin('SalesManager')} />
                            </div>
                            <div className="col-md-3">
                                <LabourLogin onLogin={() => handleLogin('Labour')} />
                            </div>
                            <div className="col-md-3">
                                <HRLogin onLogin={() => handleLogin('HR')} />
                            </div>
                        </div>
                    </div>
                );
        }
    };

    const addUser = (name, email, role) => {
        axios.post('http://localhost:5000/api/users', { name, email, role })
            .then(response => {
                console.log(response.data.message);
                // Refresh the users list or add the new user to state directly
            })
            .catch(error => console.error('Error adding user:', error));
    };

    const updateUser = (id, name, email, role) => {
        axios.put(`http://localhost:5000/api/users/${id}`, { name, email, role })
            .then(response => {
                console.log(response.data.message);
                // Refresh the users list or update the specific user in state
            })
            .catch(error => console.error('Error updating user:', error));
    };

    const deleteUser = (id) => {
        axios.delete(`http://localhost:5000/api/users/${id}`)
            .then(response => {
                console.log(response.data.message);
                // Refresh the users list or remove the user from state
            })
            .catch(error => console.error('Error deleting user:', error));
    };
    
    

    return (
        <DashboardProvider> {/* Wrap with DashboardProvider */}
            <div className={`dashboard-container ${role ? `${role.toLowerCase()}-dashboard` : ''}`}>
                {renderDashboard()}
            </div>
        </DashboardProvider>
    );
}

export default App;
