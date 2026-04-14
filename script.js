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
    const isHidden = aboutDropdownMenu.classList.contains('hidden');
    aboutDropdownMenu.classList.toggle('hidden');
    if (aboutDropdownIcon) {
      aboutDropdownIcon.classList.toggle('rotate-180', isHidden);
    }
  });

  document.addEventListener('click', (event) => {
    if (!aboutDropdownBtn.parentElement.contains(event.target)) {
      aboutDropdownMenu.classList.add('hidden');
      if (aboutDropdownIcon) {
        aboutDropdownIcon.classList.remove('rotate-180');
      }
    }
  });
}

if (mobileAboutToggle && mobileAboutSubmenu) {
  mobileAboutToggle.addEventListener('click', () => {
    const isHidden = mobileAboutSubmenu.classList.contains('hidden');
    mobileAboutSubmenu.classList.toggle('hidden');
    if (mobileAboutIcon) {
      mobileAboutIcon.classList.toggle('rotate-180', isHidden);
    }
  });
}

if (mobileStudentToggle && mobileStudentSubmenu) {
  mobileStudentToggle.addEventListener('click', () => {
    const isHidden = mobileStudentSubmenu.classList.contains('hidden');
    mobileStudentSubmenu.classList.toggle('hidden');
    if (mobileStudentIcon) {
      mobileStudentIcon.classList.toggle('rotate-180', isHidden);
    }
  });
}

if (mobileGalleryToggle && mobileGallerySubmenu) {
  mobileGalleryToggle.addEventListener('click', () => {
    const isHidden = mobileGallerySubmenu.classList.contains('hidden');
    mobileGallerySubmenu.classList.toggle('hidden');
    if (mobileGalleryIcon) {
      mobileGalleryIcon.classList.toggle('rotate-180', isHidden);
    }
  });
}

if (mobileNewsToggle && mobileNewsSubmenu) {
  mobileNewsToggle.addEventListener('click', () => {
    const isHidden = mobileNewsSubmenu.classList.contains('hidden');
    mobileNewsSubmenu.classList.toggle('hidden');
    if (mobileNewsIcon) {
      mobileNewsIcon.classList.toggle('rotate-180', isHidden);
    }
  });
}

if (mobileFacilityToggle && mobileFacilitySubmenu) {
  mobileFacilityToggle.addEventListener('click', () => {
    const isHidden = mobileFacilitySubmenu.classList.contains('hidden');
    mobileFacilitySubmenu.classList.toggle('hidden');
    if (mobileFacilityIcon) {
      mobileFacilityIcon.classList.toggle('rotate-180', isHidden);
    }
  });
}

if (mobileStreamsToggle && mobileStreamsSubmenu) {
  mobileStreamsToggle.addEventListener('click', () => {
    const isHidden = mobileStreamsSubmenu.classList.contains('hidden');
    mobileStreamsSubmenu.classList.toggle('hidden');
    if (mobileStreamsIcon) {
      mobileStreamsIcon.classList.toggle('rotate-180', isHidden);
    }
  });
}

if (studentDropdownBtn && studentDropdownMenu) {
  studentDropdownBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    const isHidden = studentDropdownMenu.classList.contains('hidden');
    studentDropdownMenu.classList.toggle('hidden');
    if (studentDropdownIcon) {
      studentDropdownIcon.classList.toggle('rotate-180', isHidden);
    }
  });

document.addEventListener('click', (event) => {
    if (!studentDropdownBtn.parentElement.contains(event.target)) {
      studentDropdownMenu.classList.add('hidden');
      if (studentDropdownIcon) {
        studentDropdownIcon.classList.remove('rotate-180');
      }
    }
  });
}

if (galleryDropdownBtn && galleryDropdownMenu) {
  galleryDropdownBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    const isHidden = galleryDropdownMenu.classList.contains('hidden');
    galleryDropdownMenu.classList.toggle('hidden');
    if (galleryDropdownIcon) {
      galleryDropdownIcon.classList.toggle('rotate-180', isHidden);
    }
  });

  document.addEventListener('click', (event) => {
    if (!galleryDropdownBtn.parentElement.contains(event.target)) {
      galleryDropdownMenu.classList.add('hidden');
      if (galleryDropdownIcon) {
        galleryDropdownIcon.classList.remove('rotate-180');
      }
    }
  });
}

if (newsDropdownBtn && newsDropdownMenu) {
  newsDropdownBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    const isHidden = newsDropdownMenu.classList.contains('hidden');
    newsDropdownMenu.classList.toggle('hidden');
    if (newsDropdownIcon) {
      newsDropdownIcon.classList.toggle('rotate-180', isHidden);
    }
  });

  document.addEventListener('click', (event) => {
    if (!newsDropdownBtn.parentElement.contains(event.target)) {
      newsDropdownMenu.classList.add('hidden');
      if (newsDropdownIcon) {
        newsDropdownIcon.classList.remove('rotate-180');
      }
    }
  });
}

if (facilityDropdownBtn && facilityDropdownMenu) {
  facilityDropdownBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    const isHidden = facilityDropdownMenu.classList.contains('hidden');
    facilityDropdownMenu.classList.toggle('hidden');
    if (facilityDropdownIcon) {
      facilityDropdownIcon.classList.toggle('rotate-180', isHidden);
    }
  });

  document.addEventListener('click', (event) => {
    if (!facilityDropdownBtn.parentElement.contains(event.target)) {
      facilityDropdownMenu.classList.add('hidden');
      if (facilityDropdownIcon) {
        facilityDropdownIcon.classList.remove('rotate-180');
      }
    }
  });
}

if (streamsDropdownBtn && streamsDropdownMenu) {
  streamsDropdownBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    const isHidden = streamsDropdownMenu.classList.contains('hidden');
    streamsDropdownMenu.classList.toggle('hidden');
    if (streamsDropdownIcon) {
      streamsDropdownIcon.classList.toggle('rotate-180', isHidden);
    }
  });

  document.addEventListener('click', (event) => {
    if (!streamsDropdownBtn.parentElement.contains(event.target)) {
      streamsDropdownMenu.classList.add('hidden');
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

// Google Sheets Form Handler
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
