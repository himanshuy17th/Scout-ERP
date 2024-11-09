// Example model for HR
exports.getHRData = (callback) => {
    const query = 'SELECT * FROM hr_data';
    db.query(query, (err, results) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
};
