import React from 'react';

function AdminLogin({ onLogin }) {
    return (
        <div className="card p-3">
            <h3>Admin Login</h3>
            <input type="text" placeholder="Admin ID" className="form-control mb-2" />
            <input type="password" placeholder="Password" className="form-control mb-2" />
            <button onClick={onLogin} className="btn btn-primary">Login</button>
        </div>
    );
}

export default AdminLogin;
