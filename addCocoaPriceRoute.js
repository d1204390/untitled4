// addCocoaPriceRoute.js

const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const router = express.Router();
const db = new sqlite3.Database('db/sqlite.db');

// Endpoint to add new cocoa price
router.post('/add-cocoa-price', (req, res) => {
    const { date, closingPrice } = req.body; // 从请求体中获取日期和收盘价
    const query = "INSERT INTO CocoaFutures (Date, ClosingPrice) VALUES (?, ?)";
    db.run(query, [date, closingPrice], function(err) {
        if (err) {
            console.error('Error inserting new cocoa price:', err.message);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.status(201).json({ message: 'Cocoa price added successfully' });
        }
    });
});

module.exports = router;