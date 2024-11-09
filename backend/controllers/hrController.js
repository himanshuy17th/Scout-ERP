// backend/controllers/hrController.js
const db = require('../config/db');

exports.getHRData = (req, res) => {
    db.query('SELECT * FROM hr_data', (err, results) => {
        if (err) {
            console.error("Error fetching HR data:", err);
            return res.status(500).json({ message: "Error fetching HR data" });
        }
        res.json(results);
    });
};
