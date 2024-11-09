const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/db'); // Import database connection
const adminRoutes = require('./routes/adminRoutes'); // Import admin routes
const salesRoutes = require('./routes/salesRoutes'); // Import sales routes
const hrRoutes = require('./routes/hrRoutes'); // Import HR routes
const labourRoutes = require('./routes/labourRoutes'); // Import labour routes
const userRoutes = require('./routes/userRoutes'); // Import user routes

const app = express();
const PORT = process.env.PORT || 5000;

// Use middlewares
app.use(cors());
app.use(bodyParser.json());

// Use routes
app.use('/api/admin', adminRoutes);
app.use('/api/sales', salesRoutes);
app.use('/api/hr', hrRoutes);
app.use('/api/labour', labourRoutes);
app.use('/api/users', userRoutes); // Place this route setup outside db.connect

// Check database connection and then start the server
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to the database');

    // Start the server only if the database connection is successful
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
