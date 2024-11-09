// Example model for Labour
exports.getLabourData = (callback) => {
    const query = 'SELECT * FROM labour_data';
    db.query(query, (err, results) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
};
