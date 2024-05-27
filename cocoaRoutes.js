// cocoaRoutes.js

const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const router = express.Router();
const db = new sqlite3.Database('db/sqlite.db');

// Endpoint to get all cocoa prices
router.get('/cocoa-prices', (req, res) => {
    const query = "SELECT Date, ClosingPrice FROM CocoaFutures"; // 移除篩選條件
    db.all(query, (err, rows) => {
        if (err) {
            console.error('Error querying database:', err.message);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.json(rows);
        }
    });
});

module.exports = router;









