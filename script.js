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

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking a link
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
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
  galleryContainer.scrollBy({ left: -308, behavior: 'smooth' });
  setTimeout(updateGalleryCounter, 300);
});

galleryNextBtn.addEventListener('click', () => {
  galleryContainer.scrollBy({ left: 308, behavior: 'smooth' });
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
      left: 308,
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
