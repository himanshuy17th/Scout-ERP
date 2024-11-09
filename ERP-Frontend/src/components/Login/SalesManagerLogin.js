import React from 'react';

function SalesManagerLogin({ onLogin }) {
    return (
        <div className="card p-3">
            <h3>Sales Manager Login</h3>
            <input type="text" placeholder="Sales Manager ID" className="form-control mb-2" />
            <input type="password" placeholder="Password" className="form-control mb-2" />
            <button onClick={onLogin} className="btn btn-success">Login</button>
        </div>
    );
}

export default SalesManagerLogin;
