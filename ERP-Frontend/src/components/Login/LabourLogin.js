import React from 'react';

function LabourLogin({ onLogin }) {
    return (
        <div className="card p-3">
            <h3>Labour Login</h3>
            <input type="text" placeholder="Labour ID" className="form-control mb-2" />
            <input type="password" placeholder="Password" className="form-control mb-2" />
            <button onClick={onLogin} className="btn btn-warning">Login</button>
        </div>
    );
}

export default LabourLogin;
