// Admin Panel JavaScript

// Default admin credentials (change these in production)
const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'mmbhakta2026'
};

// Check if admin is logged in
function checkAdminAuth() {
  const isLoggedIn = localStorage.getItem('adminLoggedIn');
  if (!isLoggedIn && !window.location.href.includes('admin-login.html')) {
    window.location.href = 'admin-login.html';
  }
}

// Login functionality
const loginForm = document.getElementById('admin-login-form');
if (loginForm) {
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('admin-username').value;
    const password = document.getElementById('admin-password').value;
    const errorDiv = document.getElementById('login-error');
    
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      localStorage.setItem('adminLoggedIn', 'true');
      window.location.href = 'admin-dashboard.html';
    } else {
      errorDiv.textContent = 'Invalid username or password';
      errorDiv.classList.remove('hidden');
    }
  });
}

// Toggle password visibility
function togglePassword() {
  const passwordInput = document.getElementById('admin-password');
  const eyeIcon = document.getElementById('eye-icon');
  
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    eyeIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>';
  } else {
    passwordInput.type = 'password';
    eyeIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>';
  }
}

// Logout functionality
function logoutAdmin() {
  localStorage.removeItem('adminLoggedIn');
  window.location.href = 'admin-login.html';
}

// Navigation
function showSection(sectionId) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => section.classList.remove('active'));
  
  document.getElementById(sectionId).classList.add('active');
  
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => item.classList.remove('active'));
  event.target.closest('.nav-item').classList.add('active');
  
  // Load data for section
  if (sectionId === 'announcements-section') {
    loadAnnouncements();
  } else if (sectionId === 'news-section') {
    loadNews();
  } else if (sectionId === 'achievements-section') {
    loadAchievements();
  } else if (sectionId === 'events-section') {
    loadEvents();
  } else if (sectionId === 'gallery-section') {
    loadGallery();
  }
}

// Data Storage Keys
const DATA_KEYS = {
  announcements: 'mmb_announcements',
  news: 'mmb_news',
  achievements: 'mmb_achievements',
  events: 'mmb_events',
  gallery: 'mmb_gallery'
};

// Sample initial data
const initialData = {
  [DATA_KEYS.announcements]: [
    { id: 1, title: 'Science Stream Launching in June 2026!', date: '2026-04-15', active: true },
    { id: 2, title: 'Mid-term Examinations scheduled for 15-20 April 2026', date: '2026-04-10', active: true },
    { id: 3, title: 'Annual Day Celebration on 25 March 2026', date: '2026-03-20', active: true },
    { id: 4, title: 'Admission Open for Classes 9 & 11', date: '2026-04-01', active: true }
  ],
  [DATA_KEYS.news]: [
    { id: 1, title: 'School Wins District Level Sports Championship', date: '2026-04-12', category: 'Sports', active: true },
    { id: 2, title: 'Annual Day 2026 - A Grand Success', date: '2026-03-26', category: 'Events', active: true },
    { id: 3, title: 'New Science Lab Inaugurated', date: '2026-02-15', category: 'Infrastructure', active: true }
  ],
  [DATA_KEYS.achievements]: [
    { id: 1, title: 'State Level Science Exhibition - 1st Prize', student: 'Ravi Patel', event: 'Gujarat Science Fair', date: '2026-02-20', active: true },
    { id: 2, title: 'District Level Cricket Championship', student: 'School Team', event: 'Bharuch District', date: '2026-01-15', active: true },
    { id: 3, title: 'SSC Board Toppers 2026', student: 'Multiple Students', event: 'GSEB Results', date: '2026-03-30', active: true }
  ],
  [DATA_KEYS.events]: [
    { id: 1, title: 'Annual Day Celebration', date: '2026-03-25', time: '10:00 AM', venue: 'School Auditorium', active: true },
    { id: 2, title: 'Science Exhibition', date: '2026-02-20', time: '09:00 AM', venue: 'School Ground', active: false },
    { id: 3, title: 'Parent-Teacher Meeting', date: '2026-04-20', time: '02:00 PM', venue: 'School Auditorium', active: true }
  ],
  [DATA_KEYS.gallery]: [
    { id: 1, title: 'Annual Day 2026', category: 'annual', image: 'photos/school gallary/Annual Day.jpg', date: '2026-03-25', active: true },
    { id: 2, title: 'Sports Day', category: 'sports', image: 'photos/school gallary/Sports Day.jpg', date: '2026-01-15', active: true },
    { id: 3, title: 'Cultural Events', category: 'cultural', image: 'photos/school gallary/Cultural Events.jpg', date: '2026-02-10', active: true },
    { id: 4, title: 'Art Exhibition', category: 'art', image: 'photos/school gallary/Art Exhibition.jpg', date: '2026-01-20', active: true },
    { id: 5, title: 'Building & Facilities', category: 'building', image: 'photos/school gallary/Building & Facilities.jpg', date: '2026-04-01', active: true },
    { id: 6, title: 'Graduation Ceremony', category: 'graduation', image: 'photos/IMG-20230820-WA0000.jpg', date: '2026-03-30', active: true }
  ]
};

// Initialize data if not exists
function initializeData() {
  Object.keys(DATA_KEYS).forEach(key => {
    if (!localStorage.getItem(DATA_KEYS[key])) {
      localStorage.setItem(DATA_KEYS[key], JSON.stringify(initialData[DATA_KEYS[key]]));
    }
  });
}

// CRUD Operations
function getData(key) {
  return JSON.parse(localStorage.getItem(key) || '[]');
}

function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function addItem(key, item) {
  const data = getData(key);
  item.id = Date.now();
  item.date = item.date || new Date().toISOString().split('T')[0];
  data.push(item);
  saveData(key, data);
}

function updateItem(key, id, updates) {
  const data = getData(key);
  const index = data.findIndex(item => item.id === id);
  if (index !== -1) {
    data[index] = { ...data[index], ...updates };
    saveData(key, data);
  }
}

function deleteItem(key, id) {
  const data = getData(key);
  const filtered = data.filter(item => item.id !== id);
  saveData(key, filtered);
}

// Render Tables
function loadAnnouncements() {
  const data = getData(DATA_KEYS.announcements);
  const tbody = document.getElementById('announcements-table-body');
  if (!tbody) return;
  
  tbody.innerHTML = data.map(item => `
    <tr>
      <td>${item.title}</td>
      <td>${item.date}</td>
      <td><span class="status-badge ${item.active ? 'status-active' : 'status-inactive'}">${item.active ? 'Active' : 'Inactive'}</span></td>
      <td class="actions">
        <button class="btn-edit" onclick="editItem('announcements', ${item.id})">Edit</button>
        <button class="btn-delete" onclick="deleteItemConfirm('announcements', ${item.id})">Delete</button>
      </td>
    </tr>
  `).join('');
}

function loadNews() {
  const data = getData(DATA_KEYS.news);
  const tbody = document.getElementById('news-table-body');
  if (!tbody) return;
  
  tbody.innerHTML = data.map(item => `
    <tr>
      <td>${item.title}</td>
      <td>${item.category}</td>
      <td>${item.date}</td>
      <td><span class="status-badge ${item.active ? 'status-active' : 'status-inactive'}">${item.active ? 'Active' : 'Inactive'}</span></td>
      <td class="actions">
        <button class="btn-edit" onclick="editItem('news', ${item.id})">Edit</button>
        <button class="btn-delete" onclick="deleteItemConfirm('news', ${item.id})">Delete</button>
      </td>
    </tr>
  `).join('');
}

function loadAchievements() {
  const data = getData(DATA_KEYS.achievements);
  const tbody = document.getElementById('achievements-table-body');
  if (!tbody) return;
  
  tbody.innerHTML = data.map(item => `
    <tr>
      <td>${item.title}</td>
      <td>${item.student}</td>
      <td>${item.event}</td>
      <td>${item.date}</td>
      <td class="actions">
        <button class="btn-edit" onclick="editItem('achievements', ${item.id})">Edit</button>
        <button class="btn-delete" onclick="deleteItemConfirm('achievements', ${item.id})">Delete</button>
      </td>
    </tr>
  `).join('');
}

function loadEvents() {
  const data = getData(DATA_KEYS.events);
  const tbody = document.getElementById('events-table-body');
  if (!tbody) return;
  
  tbody.innerHTML = data.map(item => `
    <tr>
      <td>${item.title}</td>
      <td>${item.date}</td>
      <td>${item.time}</td>
      <td>${item.venue}</td>
      <td><span class="status-badge ${item.active ? 'status-active' : 'status-inactive'}">${item.active ? 'Active' : 'Inactive'}</span></td>
      <td class="actions">
        <button class="btn-edit" onclick="editItem('events', ${item.id})">Edit</button>
        <button class="btn-delete" onclick="deleteItemConfirm('events', ${item.id})">Delete</button>
      </td>
    </tr>
  `).join('');
}

function loadGallery() {
  const data = getData(DATA_KEYS.gallery);
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;
  
  grid.innerHTML = data.map(item => `
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
      <img src="${item.image}" alt="${item.title}" class="w-full h-32 object-cover" onerror="this.src='https://via.placeholder.com/300x200?text=No+Image'">
      <div class="p-3">
        <h4 class="font-semibold text-sm truncate">${item.title}</h4>
        <p class="text-xs text-gray-500">${item.category}</p>
        <div class="flex gap-2 mt-2">
          <button class="btn-edit text-xs py-1 px-2" onclick="editItem('gallery', ${item.id})">Edit</button>
          <button class="btn-delete text-xs py-1 px-2" onclick="deleteItemConfirm('gallery', ${item.id})">Delete</button>
        </div>
      </div>
    </div>
  `).join('');
}

function filterGallery() {
  const category = document.getElementById('gallery-filter').value;
  const data = getData(DATA_KEYS.gallery);
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;
  
  const filtered = category === 'all' ? data : data.filter(item => item.category === category);
  
  grid.innerHTML = filtered.map(item => `
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
      <img src="${item.image}" alt="${item.title}" class="w-full h-32 object-cover" onerror="this.src='https://via.placeholder.com/300x200?text=No+Image'">
      <div class="p-3">
        <h4 class="font-semibold text-sm truncate">${item.title}</h4>
        <p class="text-xs text-gray-500">${item.category}</p>
        <div class="flex gap-2 mt-2">
          <button class="btn-edit text-xs py-1 px-2" onclick="editItem('gallery', ${item.id})">Edit</button>
          <button class="btn-delete text-xs py-1 px-2" onclick="deleteItemConfirm('gallery', ${item.id})">Delete</button>
        </div>
      </div>
    </div>
  `).join('');
}

// Show Add/Edit Modal
let currentEditType = '';
let currentEditId = null;

function showAddModal(type) {
  currentEditType = type;
  currentEditId = null;
  
  const modal = document.getElementById('item-modal');
  const form = document.getElementById('item-form');
  const title = document.getElementById('modal-title');
  
  title.textContent = 'Add New Item';
  form.reset();
  
  // Show/hide fields based on type
  const fields = {
    'announcements': ['title', 'date', 'active'],
    'news': ['title', 'category', 'date', 'active'],
    'achievements': ['title', 'student', 'event', 'date'],
    'events': ['title', 'date', 'time', 'venue', 'active'],
    'gallery': ['title', 'category', 'image', 'description', 'date', 'active']
  };
  
  document.querySelectorAll('.form-field').forEach(field => {
    const fieldName = field.dataset.field;
    field.style.display = fields[type].includes(fieldName) ? 'block' : 'none';
  });
  
  modal.classList.add('active');
}

function editItem(type, id) {
  currentEditType = type;
  currentEditId = id;
  
  const data = getData(DATA_KEYS[type]);
  const item = data.find(i => i.id === id);
  
  if (!item) return;
  
  const modal = document.getElementById('item-modal');
  const form = document.getElementById('item-form');
  const title = document.getElementById('modal-title');
  
  title.textContent = 'Edit Item';
  
  // Fill form
  document.getElementById('item-title').value = item.title || '';
  document.getElementById('item-date').value = item.date || '';
  document.getElementById('item-category').value = item.category || '';
  document.getElementById('item-student').value = item.student || '';
  document.getElementById('item-event').value = item.event || '';
  document.getElementById('item-time').value = item.time || '';
  document.getElementById('item-venue').value = item.venue || '';
  document.getElementById('item-active').checked = item.active !== false;
  
  // Show/hide fields
  const fields = {
    'announcements': ['title', 'date', 'active'],
    'news': ['title', 'category', 'date', 'active'],
    'achievements': ['title', 'student', 'event', 'date'],
    'events': ['title', 'date', 'time', 'venue', 'active'],
    'gallery': ['title', 'category', 'image', 'description', 'date', 'active']
  };
  
  // Fill gallery fields
  if (type === 'gallery') {
    if (document.getElementById('item-image')) {
      document.getElementById('item-image').value = item.image || '';
    }
    if (document.getElementById('item-description')) {
      document.getElementById('item-description').value = item.description || '';
    }
  }
  
  document.querySelectorAll('.form-field').forEach(field => {
    const fieldName = field.dataset.field;
    field.style.display = fields[type].includes(fieldName) ? 'block' : 'none';
  });
  
  modal.classList.add('active');
}

// Save Item
function saveItem(e) {
  e.preventDefault();
  
  const item = {
    title: document.getElementById('item-title').value,
    date: document.getElementById('item-date').value,
    category: document.getElementById('item-category').value,
    student: document.getElementById('item-student').value,
    event: document.getElementById('item-event').value,
    time: document.getElementById('item-time').value,
    venue: document.getElementById('item-venue').value,
    active: document.getElementById('item-active').checked
  };
  
  if (currentEditId) {
    updateItem(DATA_KEYS[currentEditType], currentEditId, item);
    showAlert('Item updated successfully!', 'success');
  } else {
    addItem(DATA_KEYS[currentEditType], item);
    showAlert('Item added successfully!', 'success');
  }
  
  closeModal();
  
  // Reload the current section
  if (currentEditType === 'announcements') loadAnnouncements();
  else if (currentEditType === 'news') loadNews();
  else if (currentEditType === 'achievements') loadAchievements();
  else if (currentEditType === 'events') loadEvents();
}

function closeModal() {
  document.getElementById('item-modal').classList.remove('active');
}

function deleteItemConfirm(type, id) {
  if (confirm('Are you sure you want to delete this item?')) {
    deleteItem(DATA_KEYS[type], id);
    showAlert('Item deleted successfully!', 'success');
    
    if (type === 'announcements') loadAnnouncements();
    else if (type === 'news') loadNews();
    else if (type === 'achievements') loadAchievements();
    else if (type === 'events') loadEvents();
  }
}

// Show Alert
function showAlert(message, type) {
  const alert = document.getElementById('alert-message');
  alert.textContent = message;
  alert.className = `alert alert-${type} show`;
  
  setTimeout(() => {
    alert.classList.remove('show');
  }, 3000);
}

// Add new data keys
Object.assign(DATA_KEYS, {
  timetable: 'mmb_timetable',
  exams: 'mmb_exams',
  holidays: 'mmb_holidays'
});

// Timetable Management
function editTimetable() {
  alert('Timetable editor will open here. Changes will auto reflect on student corner page.');
}

function syncTimetable() {
  // Force data sync across tabs
  localStorage.setItem('mmb_data_updated', Date.now());
  showAlert('✅ Timetable synced successfully! Students will see changes on page refresh.', 'success');
}

// Load admin dashboard data
function loadExams() {
  const data = getData(DATA_KEYS.exams);
  const tbody = document.getElementById('exams-table-body');
  if (!tbody) return;
  
  tbody.innerHTML = data.map(item => `
    <tr>
      <td>${item.date}</td>
      <td>${item.class}</td>
      <td>${item.subject}</td>
      <td><span class="status-badge ${item.active ? 'status-active' : 'status-inactive'}">${item.active ? 'Active' : 'Inactive'}</span></td>
      <td class="actions">
        <button class="btn-edit" onclick="editItem('exams', ${item.id})">Edit</button>
        <button class="btn-delete" onclick="deleteItemConfirm('exams', ${item.id})">Delete</button>
      </td>
    </tr>
  `).join('');
}

function loadHolidays() {
  const data = getData(DATA_KEYS.holidays);
  const tbody = document.getElementById('holidays-table-body');
  if (!tbody) return;
  
  tbody.innerHTML = data.map(item => `
    <tr>
      <td>${item.date}</td>
      <td>${item.day}</td>
      <td>${item.name}</td>
      <td class="actions">
        <button class="btn-edit" onclick="editItem('holidays', ${item.id})">Edit</button>
        <button class="btn-delete" onclick="deleteItemConfirm('holidays', ${item.id})">Delete</button>
      </td>
    </tr>
  `).join('');
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  initializeData();
  checkAdminAuth();
  
  // Load dashboard stats
  const announcementsCount = getData(DATA_KEYS.announcements).length;
  const newsCount = getData(DATA_KEYS.news).length;
  const achievementsCount = getData(DATA_KEYS.achievements).length;
  const eventsCount = getData(DATA_KEYS.events).length;
  
  const totalElements = document.querySelectorAll('.stat-number');
  if (totalElements.length >= 4) {
    totalElements[0].textContent = announcementsCount;
    totalElements[1].textContent = newsCount;
    totalElements[2].textContent = achievementsCount;
    totalElements[3].textContent = eventsCount;
  }
  
  // Listen for data changes from other tabs
  window.addEventListener('storage', (e) => {
    if (e.key === 'mmb_data_updated') {
      location.reload();
    }
  });
});