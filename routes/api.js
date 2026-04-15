const express = require('express');
const { auth, adminOnly } = require('../middleware/auth');
const db = require('../database/db');
const router = express.Router();

// Public routes
router.get('/timetable', (req, res) => {
  db.all('SELECT * FROM timetable ORDER BY day, period', (err, rows) => {
    res.json(rows);
  });
});

router.get('/exams', (req, res) => {
  db.all('SELECT * FROM exams ORDER BY date', (err, rows) => {
    res.json(rows);
  });
});

router.get('/holidays', (req, res) => {
  db.all('SELECT * FROM holidays ORDER BY date', (err, rows) => {
    res.json(rows);
  });
});

router.get('/announcements', (req, res) => {
  db.all('SELECT * FROM announcements WHERE is_active = 1 ORDER BY created_at DESC LIMIT 10', (err, rows) => {
    res.json(rows);
  });
});

router.get('/notices', (req, res) => {
  db.all('SELECT * FROM notices WHERE is_active = 1 ORDER BY created_at DESC LIMIT 10', (err, rows) => {
    res.json(rows);
  });
});

// Admin protected routes
router.use(auth, adminOnly);

// Timetable management
router.post('/timetable', (req, res) => {
  const { day, period, time, subject, class: cls, teacher, type } = req.body;
  db.run(`INSERT INTO timetable (day, period, time, subject, class, teacher, type)
          VALUES (?, ?, ?, ?, ?, ?, ?)`,
          [day, period, time, subject, cls, teacher, type || 'class'],
          function(err) {
            res.json({ id: this.lastID, success: true });
          });
});

// Exams management
router.post('/exams', (req, res) => {
  const { date, class: cls, subject, time, status } = req.body;
  db.run(`INSERT INTO exams (date, class, subject, time, status)
          VALUES (?, ?, ?, ?, ?)`,
          [date, cls, subject, time, status || 'upcoming'],
          function(err) {
            res.json({ id: this.lastID, success: true });
          });
});

// Holidays management
router.post('/holidays', (req, res) => {
  const { date, name, day, type } = req.body;
  db.run(`INSERT INTO holidays (date, name, day, type)
          VALUES (?, ?, ?, ?)`,
          [date, name, day, type || 'public'],
          function(err) {
            res.json({ id: this.lastID, success: true });
          });
});

module.exports = router;