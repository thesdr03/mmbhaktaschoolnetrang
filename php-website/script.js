// Default configuration
const defaultConfig = {
  school_name: 'Smt. M.M. Bhakta High School Netrang',
  tagline: 'Education leads to culture and success',
  phone_number: '63517 38499',
  email: 'mmbhaktaschoolnet1961@gmail.com',
  address: 'Smt. M.M. Bhakta High School,Jin Bazar, Netrang - 393130, District Bharuch, Gujarat, India',
  background_color: '#f0f9ff',
  primary_color: '#0369a1',
  text_color: '#1f2937',
  accent_color: '#059669',
  secondary_color: '#d97706'
};

// Tab functionality
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const tabId = btn.dataset.tab;
    
    // Update buttons
    tabBtns.forEach(b => {
      b.classList.remove('active', 'bg-sky-600', 'text-white');
      b.classList.add('bg-gray-100', 'text-gray-700');
    });
    btn.classList.add('active', 'bg-sky-600', 'text-white');
    btn.classList.remove('bg-gray-100', 'text-gray-700');
    
    // Update panels
    tabPanels.forEach(panel => panel.classList.add('hidden'));
    document.getElementById(`${tabId}-content`).classList.remove('hidden');
  });
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const aboutDropdownBtn = document.getElementById('about-dropdown-btn');
const aboutDropdownMenu = document.getElementById('about-dropdown-menu');
const aboutDropdownIcon = document.getElementById('about-dropdown-icon');
const mobileAboutToggle = document.getElementById('mobile-about-toggle');
const mobileAboutSubmenu = document.getElementById('mobile-about-submenu');
const mobileAboutIcon = document.getElementById('mobile-about-icon');
const studentDropdownBtn = document.getElementById('student-dropdown-btn');
const studentDropdownMenu = document.getElementById('student-dropdown-menu');
const studentDropdownIcon = document.getElementById('student-dropdown-icon');
const galleryDropdownBtn = document.getElementById('gallery-dropdown-btn');
const galleryDropdownMenu = document.getElementById('gallery-dropdown-menu');
const galleryDropdownIcon = document.getElementById('gallery-dropdown-icon');
const newsDropdownBtn = document.getElementById('news-dropdown-btn');
const newsDropdownMenu = document.getElementById('news-dropdown-menu');
const newsDropdownIcon = document.getElementById('news-dropdown-icon');
const facilityDropdownBtn = document.getElementById('facility-dropdown-btn');
const facilityDropdownMenu = document.getElementById('facility-dropdown-menu');
const facilityDropdownIcon = document.getElementById('facility-dropdown-icon');
const streamsDropdownBtn = document.getElementById('streams-dropdown-btn');
const streamsDropdownMenu = document.getElementById('streams-dropdown-menu');
const streamsDropdownIcon = document.getElementById('streams-dropdown-icon');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

const mobileStudentToggle = document.getElementById('mobile-student-toggle');
const mobileStudentSubmenu = document.getElementById('mobile-student-submenu');
const mobileStudentIcon = document.getElementById('mobile-student-icon');
const mobileGalleryToggle = document.getElementById('mobile-gallery-toggle');
const mobileGallerySubmenu = document.getElementById('mobile-gallery-submenu');
const mobileGalleryIcon = document.getElementById('mobile-gallery-icon');
const mobileNewsToggle = document.getElementById('mobile-news-toggle');
const mobileNewsSubmenu = document.getElementById('mobile-news-submenu');
const mobileNewsIcon = document.getElementById('mobile-news-icon');
const mobileFacilityToggle = document.getElementById('mobile-facility-toggle');
const mobileFacilitySubmenu = document.getElementById('mobile-facility-submenu');
const mobileFacilityIcon = document.getElementById('mobile-facility-icon');
const mobileStreamsToggle = document.getElementById('mobile-streams-toggle');
const mobileStreamsSubmenu = document.getElementById('mobile-streams-submenu');
const mobileStreamsIcon = document.getElementById('mobile-streams-icon');

if (aboutDropdownBtn && aboutDropdownMenu) {
  aboutDropdownBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    const willOpen = !aboutDropdownMenu.classList.contains('active');
    aboutDropdownMenu.classList.toggle('active');
    if (aboutDropdownIcon) {
      aboutDropdownIcon.classList.toggle('rotate-180', willOpen);
    }
  });

  document.addEventListener('click', (event) => {
    if (!aboutDropdownBtn.parentElement.contains(event.target)) {
      aboutDropdownMenu.classList.remove('active');
      if (aboutDropdownIcon) {
        aboutDropdownIcon.classList.remove('rotate-180');
      }
    }
  });
}

if (mobileAboutToggle && mobileAboutSubmenu) {
  mobileAboutToggle.addEventListener('click', () => {
    const willOpen = !mobileAboutSubmenu.classList.contains('active');
    mobileAboutSubmenu.classList.toggle('active');
    if (mobileAboutIcon) {
      mobileAboutIcon.classList.toggle('rotate-180', willOpen);
    }
  });
}

if (mobileStudentToggle && mobileStudentSubmenu) {
  mobileStudentToggle.addEventListener('click', () => {
    const willOpen = !mobileStudentSubmenu.classList.contains('active');
    mobileStudentSubmenu.classList.toggle('active');
    if (mobileStudentIcon) {
      mobileStudentIcon.classList.toggle('rotate-180', willOpen);
    }
  });
}

if (mobileGalleryToggle && mobileGallerySubmenu) {
  mobileGalleryToggle.addEventListener('click', () => {
    const willOpen = !mobileGallerySubmenu.classList.contains('active');
    mobileGallerySubmenu.classList.toggle('active');
    if (mobileGalleryIcon) {
      mobileGalleryIcon.classList.toggle('rotate-180', willOpen);
    }
  });
}

if (mobileNewsToggle && mobileNewsSubmenu) {
  mobileNewsToggle.addEventListener('click', () => {
    const willOpen = !mobileNewsSubmenu.classList.contains('active');
    mobileNewsSubmenu.classList.toggle('active');
    if (mobileNewsIcon) {
      mobileNewsIcon.classList.toggle('rotate-180', willOpen);
    }
  });
}

if (mobileFacilityToggle && mobileFacilitySubmenu) {
  mobileFacilityToggle.addEventListener('click', () => {
    const willOpen = !mobileFacilitySubmenu.classList.contains('active');
    mobileFacilitySubmenu.classList.toggle('active');
    if (mobileFacilityIcon) {
      mobileFacilityIcon.classList.toggle('rotate-180', willOpen);
    }
  });
}

if (mobileStreamsToggle && mobileStreamsSubmenu) {
  mobileStreamsToggle.addEventListener('click', () => {
    const willOpen = !mobileStreamsSubmenu.classList.contains('active');
    mobileStreamsSubmenu.classList.toggle('active');
    if (mobileStreamsIcon) {
      mobileStreamsIcon.classList.toggle('rotate-180', willOpen);
    }
  });
}

if (studentDropdownBtn && studentDropdownMenu) {
  studentDropdownBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    const willOpen = !studentDropdownMenu.classList.contains('active');
    studentDropdownMenu.classList.toggle('active');
    if (studentDropdownIcon) {
      studentDropdownIcon.classList.toggle('rotate-180', willOpen);
    }
  });

document.addEventListener('click', (event) => {
    if (!studentDropdownBtn.parentElement.contains(event.target)) {
      studentDropdownMenu.classList.remove('active');
      if (studentDropdownIcon) {
        studentDropdownIcon.classList.remove('rotate-180');
      }
    }
  });
}

if (galleryDropdownBtn && galleryDropdownMenu) {
  galleryDropdownBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    const willOpen = !galleryDropdownMenu.classList.contains('active');
    galleryDropdownMenu.classList.toggle('active');
    if (galleryDropdownIcon) {
      galleryDropdownIcon.classList.toggle('rotate-180', willOpen);
    }
  });

  document.addEventListener('click', (event) => {
    if (!galleryDropdownBtn.parentElement.contains(event.target)) {
      galleryDropdownMenu.classList.remove('active');
      if (galleryDropdownIcon) {
        galleryDropdownIcon.classList.remove('rotate-180');
      }
    }
  });
}

if (newsDropdownBtn && newsDropdownMenu) {
  newsDropdownBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    const willOpen = !newsDropdownMenu.classList.contains('active');
    newsDropdownMenu.classList.toggle('active');
    if (newsDropdownIcon) {
      newsDropdownIcon.classList.toggle('rotate-180', willOpen);
    }
  });

  document.addEventListener('click', (event) => {
    if (!newsDropdownBtn.parentElement.contains(event.target)) {
      newsDropdownMenu.classList.remove('active');
      if (newsDropdownIcon) {
        newsDropdownIcon.classList.remove('rotate-180');
      }
    }
  });
}

if (facilityDropdownBtn && facilityDropdownMenu) {
  facilityDropdownBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    const willOpen = !facilityDropdownMenu.classList.contains('active');
    facilityDropdownMenu.classList.toggle('active');
    if (facilityDropdownIcon) {
      facilityDropdownIcon.classList.toggle('rotate-180', willOpen);
    }
  });

  document.addEventListener('click', (event) => {
    if (!facilityDropdownBtn.parentElement.contains(event.target)) {
      facilityDropdownMenu.classList.remove('active');
      if (facilityDropdownIcon) {
        facilityDropdownIcon.classList.remove('rotate-180');
      }
    }
  });
}

if (streamsDropdownBtn && streamsDropdownMenu) {
  streamsDropdownBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    const willOpen = !streamsDropdownMenu.classList.contains('active');
    streamsDropdownMenu.classList.toggle('active');
    if (streamsDropdownIcon) {
      streamsDropdownIcon.classList.toggle('rotate-180', willOpen);
    }
  });

  document.addEventListener('click', (event) => {
    if (!streamsDropdownBtn.parentElement.contains(event.target)) {
      streamsDropdownMenu.classList.remove('active');
      if (streamsDropdownIcon) {
        streamsDropdownIcon.classList.remove('rotate-180');
      }
    }
  });
}

// Close mobile menu when clicking a link
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    if (mobileAboutSubmenu) mobileAboutSubmenu.classList.add('hidden');
    if (mobileAboutIcon) mobileAboutIcon.classList.remove('rotate-180');
    if (aboutDropdownMenu) aboutDropdownMenu.classList.add('hidden');
    if (aboutDropdownIcon) aboutDropdownIcon.classList.remove('rotate-180');
    if (mobileStudentSubmenu) mobileStudentSubmenu.classList.add('hidden');
    if (mobileStudentIcon) mobileStudentIcon.classList.remove('rotate-180');
    if (studentDropdownMenu) studentDropdownMenu.classList.add('hidden');
    if (studentDropdownIcon) studentDropdownIcon.classList.remove('rotate-180');
    if (mobileGallerySubmenu) mobileGallerySubmenu.classList.add('hidden');
    if (mobileGalleryIcon) mobileGalleryIcon.classList.remove('rotate-180');
    if (galleryDropdownMenu) galleryDropdownMenu.classList.add('hidden');
    if (galleryDropdownIcon) galleryDropdownIcon.classList.remove('rotate-180');
    if (mobileNewsSubmenu) mobileNewsSubmenu.classList.add('hidden');
    if (mobileNewsIcon) mobileNewsIcon.classList.remove('rotate-180');
    if (newsDropdownMenu) newsDropdownMenu.classList.add('hidden');
    if (newsDropdownIcon) newsDropdownIcon.classList.remove('rotate-180');
    if (mobileFacilitySubmenu) mobileFacilitySubmenu.classList.add('hidden');
    if (mobileFacilityIcon) mobileFacilityIcon.classList.remove('rotate-180');
    if (facilityDropdownMenu) facilityDropdownMenu.classList.add('hidden');
    if (facilityDropdownIcon) facilityDropdownIcon.classList.remove('rotate-180');
    if (mobileStreamsSubmenu) mobileStreamsSubmenu.classList.add('hidden');
    if (mobileStreamsIcon) mobileStreamsIcon.classList.remove('rotate-180');
    if (streamsDropdownMenu) streamsDropdownMenu.classList.add('hidden');
    if (streamsDropdownIcon) streamsDropdownIcon.classList.remove('rotate-180');
  });
});

// Gallery scroll functionality
const galleryContainer = document.getElementById('gallery-container');
const galleryPrevBtn = document.getElementById('gallery-prev');
const galleryNextBtn = document.getElementById('gallery-next');
const galleryCounter = document.getElementById('gallery-counter');
const galleryItems = galleryContainer.querySelectorAll('a');

function updateGalleryCounter() {
  const scrollLeft = galleryContainer.scrollLeft;
  const itemWidth = galleryItems[0].offsetWidth + 16; // width + gap
  const currentIndex = Math.round(scrollLeft / itemWidth) + 1;
  galleryCounter.textContent = `${currentIndex} / ${galleryItems.length}`;
}

galleryPrevBtn.addEventListener('click', () => {
  galleryContainer.scrollBy({ left: -336, behavior: 'smooth' });
  setTimeout(updateGalleryCounter, 300);
});

galleryNextBtn.addEventListener('click', () => {
  galleryContainer.scrollBy({ left: 336, behavior: 'smooth' });
  setTimeout(updateGalleryCounter, 300);
});

galleryContainer.addEventListener('scroll', updateGalleryCounter);
updateGalleryCounter();

// Auto-scroll gallery functionality
let autoScrollInterval = null;
let autoScrollDelay = 4000; // 4 seconds between auto-scrolls

function startAutoScroll() {
  if (autoScrollInterval) return; // Already running
  autoScrollInterval = setInterval(() => {
    galleryContainer.scrollBy({
      left: 336,
      behavior: 'smooth'
    });
    
    // Reset to beginning when reaching the end
    const maxScroll = galleryContainer.scrollWidth - galleryContainer.clientWidth;
    if (galleryContainer.scrollLeft >= maxScroll - 10) {
      setTimeout(() => {
        galleryContainer.scrollTo({
          left: 0,
          behavior: 'smooth'
        });
      }, 500);
    }
  }, autoScrollDelay);
}

function stopAutoScroll() {
  if (autoScrollInterval) {
    clearInterval(autoScrollInterval);
    autoScrollInterval = null;
  }
}

// Pause auto-scroll on user interaction
galleryContainer.addEventListener('mouseenter', stopAutoScroll);
galleryContainer.addEventListener('mouseleave', startAutoScroll);
galleryPrevBtn.addEventListener('click', () => {
  stopAutoScroll();
  setTimeout(startAutoScroll, 2000); // Resume after 2 seconds of inactivity
});
galleryNextBtn.addEventListener('click', () => {
  stopAutoScroll();
  setTimeout(startAutoScroll, 2000); // Resume after 2 seconds of inactivity
});

// Start auto-scroll when page loads
startAutoScroll();

// Element SDK initialization
async function onConfigChange(config) {
  // Update school names
  const schoolNameElements = [
    document.getElementById('header-school-name'),
    document.getElementById('hero-school-name'),
    document.getElementById('footer-school-name')
  ];
  schoolNameElements.forEach(el => {
    if (el) el.textContent = config.school_name || defaultConfig.school_name;
  });

  // Update tagline
  const taglineEl = document.getElementById('hero-tagline');
  if (taglineEl) taglineEl.textContent = config.tagline || defaultConfig.tagline;

  // Update phone numbers
  const phoneElements = [
    document.getElementById('top-phone'),
    document.getElementById('contact-phone'),
    document.getElementById('footer-phone')
  ];
  phoneElements.forEach(el => {
    if (el) el.textContent = config.phone_number || defaultConfig.phone_number;
  });

  // Update emails
  const emailElements = [
    document.getElementById('top-email'),
    document.getElementById('contact-email'),
    document.getElementById('footer-email')
  ];
  emailElements.forEach(el => {
    if (el) el.textContent = config.email || defaultConfig.email;
  });

  // Update address
  const addressEl = document.getElementById('contact-address');
  if (addressEl) {
    const addr = config.address || defaultConfig.address;
    addressEl.innerHTML = addr.replace(/,/g, ',<br>');
  }
}

function mapToCapabilities(config) {
  return {
    recolorables: [
      {
        get: () => config.background_color || defaultConfig.background_color,
        set: (value) => {
          config.background_color = value;
          if (window.elementSdk) window.elementSdk.setConfig({ background_color: value });
        }
      },
      {
        get: () => config.primary_color || defaultConfig.primary_color,
        set: (value) => {
          config.primary_color = value;
          if (window.elementSdk) window.elementSdk.setConfig({ primary_color: value });
        }
      },
      {
        get: () => config.text_color || defaultConfig.text_color,
        set: (value) => {
          config.text_color = value;
          if (window.elementSdk) window.elementSdk.setConfig({ text_color: value });
        }
      },
      {
        get: () => config.accent_color || defaultConfig.accent_color,
        set: (value) => {
          config.accent_color = value;
          if (window.elementSdk) window.elementSdk.setConfig({ accent_color: value });
        }
      },
      {
        get: () => config.secondary_color || defaultConfig.secondary_color,
        set: (value) => {
          config.secondary_color = value;
          if (window.elementSdk) window.elementSdk.setConfig({ secondary_color: value });
        }
      }
    ],
    borderables: [],
    fontEditable: undefined,
    fontSizeable: undefined
  };
}

function mapToEditPanelValues(config) {
  return new Map([
    ['school_name', config.school_name || defaultConfig.school_name],
    ['tagline', config.tagline || defaultConfig.tagline],
    ['phone_number', config.phone_number || defaultConfig.phone_number],
    ['email', config.email || defaultConfig.email],
    ['address', config.address || defaultConfig.address]
  ]);
}

// Initialize SDK
if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange,
    mapToCapabilities,
    mapToEditPanelValues
  });
}

// ======================================================
// LIVE OFFICE STATUS CALENDAR WIDGET
// ======================================================
const officeConfig = {
  timezone: 'Asia/Kolkata',
  workingHours: {
    1: { open: [10,30], close: [16,45] }, // Monday
    2: { open: [10,30], close: [16,45] }, // Tuesday
    3: { open: [10,30], close: [16,45] }, // Wednesday
    4: { open: [10,30], close: [16,45] }, // Thursday
    5: { open: [10,30], close: [16,45] }, // Friday
    6: { open: [7,30],  close: [11,15] }, // Saturday
    0: null // Sunday - Closed
  },
  holidays: {
    fixed: { // MM-DD format
      '01-26': 'Republic Day',
      '08-15': 'Independence Day',
      '10-02': 'Gandhi Jayanti',
      '12-25': 'Christmas Day',
      '01-14': 'Makar Sankranti',
      '03-08': 'Holi',
      '08-29': 'Janmashtami',
      '11-01': 'Diwali',
      '11-15': 'Gujarat New Year'
    },
    recurring: [],
    manual: {} // Add date overrides: 'YYYY-MM-DD': 'Holiday Name'
  }
};

function getCurrentSchoolTime() {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: officeConfig.timezone,
    hour: 'numeric', minute: 'numeric', second: 'numeric',
    hour12: false
  });
  const parts = formatter.formatToParts(now);
  return {
    day: now.toLocaleDateString('en-US', {timeZone: officeConfig.timezone, weekday: 'numeric'}) % 7,
    hour: parseInt(parts.find(p => p.type === 'hour').value),
    minute: parseInt(parts.find(p => p.type === 'minute').value),
    date: now.toLocaleDateString('en-CA', {timeZone: officeConfig.timezone}),
    dateMD: now.toLocaleDateString('en-US', {timeZone: officeConfig.timezone, month: '2-digit', day: '2-digit'})
  };
}

function checkHoliday(time) {
  if (officeConfig.holidays.manual[time.date]) 
    return officeConfig.holidays.manual[time.date];
  if (officeConfig.holidays.fixed[time.dateMD]) 
    return officeConfig.holidays.fixed[time.dateMD];
  return null;
}

function isOfficeOpen(time) {
  const holiday = checkHoliday(time);
  if (holiday) return { open: false, reason: holiday };
  
  const hours = officeConfig.workingHours[time.day];
  if (!hours) return { open: false, reason: 'Weekly closed day' };
  
  const currentMinutes = time.hour * 60 + time.minute;
  const openMinutes = hours.open[0] * 60 + hours.open[1];
  const closeMinutes = hours.close[0] * 60 + hours.close[1];
  
  return { open: currentMinutes >= openMinutes && currentMinutes < closeMinutes, hours };
}

function getNextStatusChange(time, status) {
  const hours = officeConfig.workingHours[time.day];
  const currentMinutes = time.hour * 60 + time.minute;
  
  if (status.open) {
    const closeMinutes = hours.close[0] * 60 + hours.close[1];
    const mins = closeMinutes - currentMinutes;
    return `Closing in ${Math.floor(mins/60)}h ${mins%60}m`;
  } else {
    for (let i = 0; i < 7; i++) {
      const checkDay = (time.day + i) % 7;
      const checkHours = officeConfig.workingHours[checkDay];
      if (!checkHours) continue;
      
      if (i === 0) {
        const openMinutes = checkHours.open[0] * 60 + checkHours.open[1];
        if (currentMinutes < openMinutes) {
          const mins = openMinutes - currentMinutes;
          return `Opens in ${Math.floor(mins/60)}h ${mins%60}m`;
        }
      }
      
      const days = i === 0 ? 1 : i;
      return `Opens ${days === 1 ? 'Tomorrow' : 'on ' + ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][checkDay]} at ${checkHours.open[0]}:${checkHours.open[1].toString().padStart(2,'0')} AM`;
    }
  }
}

function updateOfficeStatusWidget() {
  const time = getCurrentSchoolTime();
  const status = isOfficeOpen(time);
  const nextChange = getNextStatusChange(time, status);
  
  const dot = document.getElementById('status-dot');
  const text = document.getElementById('status-text');
  const hours = document.getElementById('status-hours');
  const next = document.getElementById('status-next');
  
  if (checkHoliday(time)) {
    dot.className = 'w-3 h-3 rounded-full bg-red-500 animate-pulse';
    text.textContent = 'Holiday';
    text.className = 'font-bold text-red-400';
    hours.textContent = checkHoliday(time);
    next.textContent = nextChange || '';
  } else if (status.open) {
    dot.className = 'w-3 h-3 rounded-full bg-green-500 animate-pulse';
    text.textContent = 'Open Now';
    text.className = 'font-bold text-green-400';
    hours.textContent = `Until ${status.hours.close[0] > 12 ? status.hours.close[0]-12 : status.hours.close[0]}:${status.hours.close[1].toString().padStart(2,'0')} PM`;
    next.textContent = nextChange;
  } else {
    dot.className = 'w-3 h-3 rounded-full bg-gray-500';
    text.textContent = 'Closed';
    text.className = 'font-bold text-gray-400';
    hours.textContent = status.hours ? 
      `${status.hours.open[0]}:${status.hours.open[1].toString().padStart(2,'0')} AM - ${status.hours.close[0] > 12 ? status.hours.close[0]-12 : status.hours.close[0]}:${status.hours.close[1].toString().padStart(2,'0')} PM` :
      'Sunday - Office remains closed';
    next.textContent = nextChange;
  }
}

// Initialize and auto refresh
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('office-status-widget')) {
    updateOfficeStatusWidget();
    setInterval(updateOfficeStatusWidget, 60000); // Update every minute
  }
});

// ======================================================
// Google Sheets Form Handler
// ======================================================
const googleSheetsForm = document.getElementById('info-gateway-form');
const formStatus = document.getElementById('form-status');

// Replace this with your Google Apps Script deployment URL
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbyrT0IUOUyrNtqWLjNtYy8GT5JO1oYecTyDC95clfuI_uF7eQrJpRKZjpZhXCkS06O7/exec';

googleSheetsForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = {
    name: document.getElementById('form-name').value,
    email: document.getElementById('form-email').value,
    phone: document.getElementById('form-phone').value,
    message: document.getElementById('form-message').value,
    timestamp: new Date().toISOString()
  };

  try {
    // Show loading state
    formStatus.classList.remove('hidden');
    formStatus.className = 'mb-4 p-3 rounded-lg bg-blue-100 text-blue-800';
    formStatus.textContent = 'Sending your message...';

    // Send data to Google Apps Script
    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    // Show success message
    formStatus.className = 'mb-4 p-3 rounded-lg bg-green-100 text-green-800';
    formStatus.textContent = '✅ Thank you! Your message has been sent successfully.';
    
    // Clear form
    googleSheetsForm.reset();
    
    // Hide message after 5 seconds
    setTimeout(() => {
      formStatus.classList.add('hidden');
    }, 5000);

  } catch (error) {
    // Show error message
    formStatus.className = 'mb-4 p-3 rounded-lg bg-red-100 text-red-800';
    formStatus.textContent = '❌ Error sending message. Please try again.';
    console.error('Form submission error:', error);
  }
});
// 🔍 Search Bar Implementation - Fixed
function searchPages(event) {
  const searchInput = document.getElementById('nav-search-input');
  const searchResults = document.getElementById('search-results');
  const query = searchInput.value.toLowerCase().trim();
  
  // Aapke saare pages yaha add karo
  const allPages = [
    { name: 'Home', url: 'index main.html', icon: '🏠' },
    { name: 'About School', url: 'about-school.html', icon: '🏫' },
    { name: 'Management', url: 'management.html', icon: '🏛️' },
    { name: 'Alumni', url: 'alumani/alumni-website.html', icon: '👨‍🎓' },
    { name: 'Faculties', url: 'staff.html', icon: '👨‍🏫' },
    { name: 'SSC Stream', url: 'stream-ssc.html', icon: '📖' },
    { name: 'Arts Stream', url: 'stream-arts.html', icon: '🎨' },
    { name: 'Commerce Stream', url: 'stream-commerce.html', icon: '💼' },
    { name: 'Science Stream', url: 'stream-science.html', icon: '🔬' },
    { name: 'Sports Gallery', url: 'sports-gallery.html', icon: '🏆' },
    { name: 'Cultural Events', url: 'cultural-events-gallery.html', icon: '🎭' },
    { name: 'Latest News', url: 'news-events.html', icon: '📰' },
    { name: 'Circulars', url: 'circulars.html', icon: '📋' },
    { name: 'Achievements', url: 'achievements.html', icon: '🏆' },
    { name: 'School Building', url: 'main-building.html', icon: '🏢' },
    { name: 'Playground', url: 'playground.html', icon: '🎯' },
    { name: 'Library', url: 'library.html', icon: '📚' },
    { name: 'Computer Lab', url: 'computer-lab.html', icon: '💻' },
    { name: 'Student Corner', url: 'student-corner.html', icon: '👨‍🎓' },
    { name: 'Contact Us', url: '#contact', icon: '📞' }
  ];

  // Agar input empty hai to results hide karo
  if (!query) {
    searchResults.classList.add('hidden');
    return;
  }

  // Search logic
  const matchedPages = allPages.filter(page => 
    page.name.toLowerCase().includes(query) || 
    page.url.toLowerCase().includes(query)
  );

  // Results render karo
  if (matchedPages.length > 0) {
    searchResults.innerHTML = matchedPages.map(page => `
      <a href="${page.url}" class="block px-4 py-2 hover:bg-purple-50 hover:text-purple-700 text-gray-700 text-sm transition">
        ${page.icon} ${page.name}
      </a>
    `).join('');
    searchResults.classList.remove('hidden');
  } else {
    searchResults.innerHTML = `<div class="px-4 py-3 text-gray-500 text-sm">❌ No results found</div>`;
    searchResults.classList.remove('hidden');
  }
}

// Search box ke bahar click karne par close karo
document.addEventListener('click', (event) => {
  const searchContainer = document.getElementById('nav-search-input').parentElement;
  const searchResults = document.getElementById('search-results');
  if (!searchContainer.contains(event.target)) {
    searchResults.classList.add('hidden');
  }
});

// Escape key press karne par close karo
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.getElementById('search-results').classList.add('hidden');
  }
});