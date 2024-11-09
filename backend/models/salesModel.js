// Example model for Sales
exports.getSalesData = (callback) => {
    const query = 'SELECT * FROM sales_data';
    db.query(query, (err, results) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
};
