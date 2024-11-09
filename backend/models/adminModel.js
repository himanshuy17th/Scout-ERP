// backend/models/adminModel.js
const db = require('../config/db');

exports.getDashboardData = (callback) => {
    const query = 'SELECT * FROM admin_dashboard_data'; // Example query
    db.query(query, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};
