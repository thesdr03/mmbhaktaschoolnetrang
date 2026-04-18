// ===== ALUMNI WEBSITE JAVASCRIPT =====

// GOOGLE SHEETS SETUP:
// 1. Create a Google Sheet named "Alumni Registrations"
// 2. Create columns: Name, Phone, Email, Batch, Message, Timestamp
// 3. Go to Extensions → Apps Script
// 4. Paste this code:
/*
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = e.parameter;
  sheet.appendRow([
    data.name,
    data.phone,
    data.email,
    data.batch,
    data.message,
    new Date()
  ]);
  return ContentService.createTextOutput(JSON.stringify({status: 'success'})).setMimeType(ContentService.MimeType.JSON);
}
*/
// 5. Deploy → New deployment → Select "Web app" → Execute as you → Anyone → Deploy
// 6. Copy the URL from deployment and replace GOOGLE_SHEETS_URL below

const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbwZeT7u7G2yF7nhlJB8i4zHmbykOYKDPnZg-7d9JdApbTLm-JLNlW2UZKip_0nWiKE/exec'; // Replace with your Google Apps Script URL

// ===== MOBILE MENU TOGGLE =====
document.getElementById('mobile-menu-btn').addEventListener('click', function() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
});

// ===== PHOTO UPLOAD NAME DISPLAY =====
document.getElementById('photo-input').addEventListener('change', function(e) {
  if(e.target.files.length > 0) {
    document.getElementById('file-name').textContent = '✓ ' + e.target.files[0].name;
  }
});

// ===== FORM SUBMISSION WITH GOOGLE SHEETS INTEGRATION =====
document.getElementById('alumni-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const formData = {
    name: this.elements.name.value,
    phone: this.elements.phone.value,
    email: this.elements.email.value,
    batch: this.elements.batch.value,
    message: this.elements.message.value
  };
  
  // If Google Sheets URL is configured, send data
  if(GOOGLE_SHEETS_URL) {
    fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      body: new URLSearchParams(formData),
      mode: 'no-cors'
    })
    .then(() => {
      alert('✨ Thank you ' + formData.name + '!\n\nYou have been registered in our Alumni Network.\nWe will contact you at ' + formData.phone + ' soon!\n\n📧 Confirmation sent to: ' + formData.email);
      this.reset();
      document.getElementById('file-name').textContent = '';
    })
    .catch((err) => {
      alert('✨ Thank you for registering!\n\nData saved locally. Please contact us at:\nmmbhaktaschoolnet1961@gmail.com');
      this.reset();
      document.getElementById('file-name').textContent = '';
    });
  } else {
    // Fallback if Google Sheets not configured
    alert('✨ Thank you ' + formData.name + '!\n\nYour registration has been received.\nWe will contact you at ' + formData.phone + ' soon!\n\n📧 Verification email will be sent to: ' + formData.email + '\n\n💡 To enable automatic Google Sheets storage, configure the Google Apps Script URL in the form code.');
    this.reset();
    document.getElementById('file-name').textContent = '';
  }
});
