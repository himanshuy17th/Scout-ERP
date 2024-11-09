// Example controller for Admin dashboard
const adminModel = require('../models/adminModel');

exports.getAdminDashboard = (req, res) => {
    adminModel.getDashboardData((err, result) => {
        if (err) {
            console.error("Error fetching dashboard data:", err); // Log the specific error
            res.status(500).send({ message: "Error fetching dashboard data" });
        } else {
            res.json(result);
        }
    });
};
