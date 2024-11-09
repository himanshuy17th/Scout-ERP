// backend/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const db = require('../config/db'); // Import database connection

// Retrieve all users
router.get('/', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// Add a new user
router.post('/', (req, res) => {
    const { name, email, role } = req.body;
    db.query('INSERT INTO users (name, email, role) VALUES (?, ?, ?)', [name, email, role], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'User added successfully', userId: results.insertId });
    });
});

// Update a user by ID
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, email, role } = req.body;
    db.query(
        'UPDATE users SET name = ?, email = ?, role = ? WHERE id = ?',
        [name, email, role, id],
        (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json({ message: 'User updated successfully' });
        }
    );
});

// Delete a user by ID
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM users WHERE id = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'User deleted successfully' });
    });
});

module.exports = router;
