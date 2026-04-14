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

// Run after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {

// Tab functionality
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

if (tabBtns.length > 0) {
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

// ========================================
// Announcement Carousel
// ========================================
let currentAnnouncement = 1;
const totalAnnouncements = 4;

function showAnnouncement(num) {
  if (num > totalAnnouncements) currentAnnouncement = 1;
  if (num < 1) currentAnnouncement = totalAnnouncements;
  
  document.querySelectorAll('.announcement-item').forEach(el => el.classList.add('hidden'));
  document.getElementById('announcement-' + currentAnnouncement).classList.remove('hidden');
  document.getElementById('announcement-counter').innerText = currentAnnouncement + ' / ' + totalAnnouncements;
}

function nextAnnouncement() {
  currentAnnouncement++;
  if (currentAnnouncement > totalAnnouncements) currentAnnouncement = 1;
  showAnnouncement(currentAnnouncement);
}

function prevAnnouncement() {
  currentAnnouncement--;
  if (currentAnnouncement < 1) currentAnnouncement = totalAnnouncements;
  showAnnouncement(currentAnnouncement);
}

// Auto-advance announcements
if (document.querySelector('.announcement-item')) {
  showAnnouncement(currentAnnouncement);
  setInterval(nextAnnouncement, 3000);
}

// ========================================
// Photo Slideshow with Motivational Quotes
// ========================================
let currentSlideIndex = 1;
const totalSlidesCount = 7;
let autoSlideInterval = null;
let isAutoSlidePaused = false;

const slideQuotes = [
  { quote: "Learning, values, and growth under one roof", subquote: "A vibrant campus where academics, discipline, culture, and confidence grow together." },
  { quote: "Education is the most powerful weapon", subquote: "Which you can use to change the world. Join us and make a difference." },
  { quote: "Success is not final, failure is not fatal", subquote: "It is the courage to continue that counts. Keep moving forward!" },
  { quote: "The future belongs to those who believe", subquote: "In the beauty of their dreams. Dream big and achieve bigger!" },
  { quote: "Dream, Believe, Achieve", subquote: "Every expert was once a beginner. Start your journey with us today." },
  { quote: "Excellence is not a destination", subquote: "But a continuous journey. Be part of our journey of excellence." },
  { quote: "Your education is your superpower", subquote: "Empower yourself with knowledge, character, and confidence." }
];

function showSlide(n) {
  if (n > totalSlidesCount) currentSlideIndex = 1;
  if (n < 1) currentSlideIndex = totalSlidesCount;
  
  const quoteData = slideQuotes[currentSlideIndex - 1];
  const quoteEl = document.querySelector('.slide-quote');
  const subquoteEl = document.querySelector('.slide-subquote');
  
  for (let i = 1; i <= totalSlidesCount; i++) {
    const slide = document.getElementById('slide-' + i);
    if (slide) {
      slide.style.opacity = i === currentSlideIndex ? '1' : '0';
      slide.style.transform = i === currentSlideIndex ? 'scale(1)' : 'scale(1.05)';
      slide.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    }
  }
  
  if (quoteEl && subquoteEl && quoteData) {
    quoteEl.style.opacity = '0';
    quoteEl.style.transform = 'translateY(20px)';
    subquoteEl.style.opacity = '0';
    subquoteEl.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      quoteEl.textContent = quoteData.quote;
      subquoteEl.textContent = quoteData.subquote;
      quoteEl.style.opacity = '1';
      quoteEl.style.transform = 'translateY(0)';
      subquoteEl.style.opacity = '1';
      subquoteEl.style.transform = 'translateY(0)';
      quoteEl.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      subquoteEl.style.transition = 'opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s';
    }, 150);
  }
  
  document.querySelectorAll('.slide-dot').forEach((dot, idx) => {
    dot.classList.toggle('bg-blue-500', idx + 1 === currentSlideIndex);
    dot.classList.toggle('bg-gray-400', idx + 1 !== currentSlideIndex);
  });
  
  const counterEl = document.getElementById('slide-counter');
  if (counterEl) counterEl.innerText = currentSlideIndex + ' / ' + totalSlidesCount;
}

function slideNext() {
  currentSlideIndex++;
  showSlide(currentSlideIndex);
  resetAutoSlide();
}

function slidePrev() {
  currentSlideIndex--;
  showSlide(currentSlideIndex);
  resetAutoSlide();
}

function goToSlide(n) {
  currentSlideIndex = n;
  showSlide(currentSlideIndex);
  resetAutoSlide();
}

function toggleAutoSlide() {
  isAutoSlidePaused = !isAutoSlidePaused;
  const playIcon = document.getElementById('playIcon');
  const pauseIcon = document.getElementById('pauseIcon');
  
  if (isAutoSlidePaused) {
    if (autoSlideInterval) clearInterval(autoSlideInterval);
    playIcon.classList.remove('hidden');
    pauseIcon.classList.add('hidden');
  } else {
    startAutoSlide();
    playIcon.classList.add('hidden');
    pauseIcon.classList.remove('hidden');
  }
}

function startAutoSlide() {
  if (autoSlideInterval) clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(() => {
    currentSlideIndex++;
    if (currentSlideIndex > totalSlidesCount) currentSlideIndex = 1;
    showSlide(currentSlideIndex);
  }, 5000);
}

function resetAutoSlide() {
  if (!isAutoSlidePaused) {
    startAutoSlide();
  }
}

// Initialize slideshow
if (document.getElementById('slide-1')) {
  showSlide(currentSlideIndex);
  startAutoSlide();
}

// ========================================
// Gallery Lightbox
// ========================================
let currentGallerySlide = 1;
const totalGallerySlides = 2;

function showGallerySlide(n) {
  if (n > totalGallerySlides) currentGallerySlide = 1;
  if (n < 1) currentGallerySlide = totalGallerySlides;
  
  document.querySelectorAll('.gallery-slide').forEach((el, idx) => { 
    el.classList.toggle('hidden', idx + 1 !== currentGallerySlide); 
  });
  document.querySelectorAll('.gallery-dot').forEach((dot, idx) => { 
    dot.classList.toggle('bg-purple-500', idx + 1 === currentGallerySlide); 
    dot.classList.toggle('bg-gray-400', idx + 1 !== currentGallerySlide); 
  });
}

function galleryNext() { 
  currentGallerySlide++; 
  showGallerySlide(currentGallerySlide); 
}

function galleryPrev() { 
  currentGallerySlide--; 
  showGallerySlide(currentGallerySlide); 
}

function openLightbox(el) { 
  const lightboxImg = document.getElementById('lightbox-img');
  const lightbox = document.getElementById('lightbox');
  if (lightboxImg && el) {
    lightboxImg.src = el.querySelector('img').src;
  }
  if (lightbox) {
    lightbox.classList.remove('hidden');
  }
}

function closeLightbox() { 
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.classList.add('hidden');
  }
}

function openAchievementLightbox(el) {
  const lightboxImg = document.getElementById('lightbox-img');
  const lightbox = document.getElementById('lightbox');
  if (lightboxImg && el) {
    lightboxImg.src = el.querySelector('img').src;
  }
  if (lightbox) {
    lightbox.classList.remove('hidden');
  }
}

// Auto-advance gallery
if (document.querySelector('.gallery-slide')) {
  setInterval(() => { 
    currentGallerySlide++; 
    if (currentGallerySlide > totalGallerySlides) currentGallerySlide = 1;
    showGallerySlide(currentGallerySlide); 
  }, 6000);
}

// ========================================
// Page Search Functionality
// ========================================
const pages = [
  {name: "Home", url: "#home"},
  {name: "About School", url: "about-school.html"},
  {name: "Management", url: "management.html"},
  {name: "Faculties / Staff", url: "staff.html"},
  {name: "SSC Stream", url: "stream-ssc.html"},
  {name: "Arts Stream", url: "stream-arts.html"},
  {name: "Commerce Stream", url: "stream-commerce.html"},
  {name: "Science Stream", url: "stream-science.html"},
  {name: "Student Corner", url: "student-corner.html"},
  {name: "News & Events", url: "news-events.html"},
  {name: "Circulars", url: "circulars.html"},
  {name: "Achievements", url: "achievements.html"},
  {name: "Sports Gallery", url: "sports-gallery.html"},
  {name: "Cultural Events", url: "cultural-events-gallery.html"},
  {name: "Art Exhibition", url: "art-exhibition-gallery.html"},
  {name: "Annual Day", url: "annual-day-gallery.html"},
  {name: "Graduation", url: "graduation-gallery.html"},
  {name: "Campus Tour", url: "360-campus-gallery.html"},
  {name: "Alumni", url: "alumani/alumni-website.html"},
  {name: "Contact", url: "#contact"},
  {name: "School Building", url: "school-building-gallery.html"},
  {name: "Playground", url: "playground.html"},
  {name: "Auditorium", url: "auditorium.html"},
  {name: "Science Lab", url: "science-lab.html"},
  {name: "Computer Lab", url: "computer-lab.html"},
  {name: "Library", url: "library.html"},
  {name: "Class Rooms", url: "class-room.html"},
  {name: "Staff Room", url: "staff-room.html"},
  {name: "Main Building", url: "main-building.html"}
];

function searchPages(e) {
  const input = e.target.value.toLowerCase();
  const results = document.getElementById("search-results");
  if (!results) return;
  
  if (input.length < 2) {
    results.classList.add("hidden");
    return;
  }
  
  const matches = pages.filter(p => p.name.toLowerCase().includes(input));
  if (matches.length === 0) {
    results.innerHTML = '<div class="p-3 text-gray-500 text-sm">No results found</div>';
  } else {
    results.innerHTML = matches.map(p => '<a href="' + p.url + '" class="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-700 text-sm border-b border-gray-100">' + p.name + '</a>').join('');
  }
  results.classList.remove("hidden");
}

// Close search results when clicking outside
document.addEventListener("click", function(e) {
  const searchInput = document.getElementById("nav-search-input");
  const searchResults = document.getElementById("search-results");
  if (searchInput && searchResults) {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
      searchResults.classList.add("hidden");
    }
  }
});

// ========================================
  // Scroll Up Button
  // ========================================
  window.onscroll = function() {
    var btn = document.getElementById("scrollUpBtn");
    if (btn) {
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.style.display = "flex";
      } else {
        btn.style.display = "none";
      }
    }
  };
});
