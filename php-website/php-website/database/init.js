const bcrypt = require('bcryptjs');
const db = require('./db');

// Create default admin user
db.get('SELECT id FROM users WHERE role = ?', ['admin'], (err, row) => {
  if (!row) {
    const hashedPassword = bcrypt.hashSync('admin123', 10);
    db.run(`INSERT INTO users (name, email, password, role) 
            VALUES (?, ?, ?, ?)`, 
            ['Administrator', 'admin@school.com', hashedPassword, 'admin'], 
            (err) => {
              if (err) console.log(err);
              else console.log('✅ Default admin user created');
            });
  }
});

// Insert default timetable
db.get('SELECT COUNT(*) as count FROM timetable', (err, row) => {
  if (row.count === 0) {
    const defaultTimetable = [
      {day: 'monday', period: 1, time: '11:00 - 11:45', subject: 'Gujarati', class: 'all'},
      {day: 'monday', period: 2, time: '11:45 - 12:30', subject: 'English', class: 'all'},
      {day: 'monday', period: 0, time: '12:30 - 13:00', subject: 'Lunch Break', class: 'all', type: 'break'},
      {day: 'monday', period: 3, time: '13:00 - 13:45', subject: 'Maths', class: 'all'}
    ];
    
    defaultTimetable.forEach(t => {
      db.run(`INSERT INTO timetable (day, period, time, subject, class, type) 
              VALUES (?, ?, ?, ?, ?, ?)`, 
              [t.day, t.period, t.time, t.subject, t.class, t.type]);
    });
    console.log('✅ Default timetable inserted');
  }
});

console.log('✅ Database initialized');