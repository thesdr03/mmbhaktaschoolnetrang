require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api', require('./routes/api'));

// Serve frontend pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index main.html'));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📊 Admin login: http://localhost:${PORT}/admin-login.html`);
  console.log(`👨‍🎓 Student Corner: http://localhost:${PORT}/student-corner.html`);
});