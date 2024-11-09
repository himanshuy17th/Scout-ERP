import React from 'react';

function HRLogin({ onLogin }) {
    return (
        <div className="card p-3">
            <h3>HR Department Login</h3>
            <input type="text" placeholder="HR ID" className="form-control mb-2" />
            <input type="password" placeholder="Password" className="form-control mb-2" />
            <button onClick={onLogin} className="btn btn-info">Login</button>
        </div>
    );
}

export default HRLogin;
