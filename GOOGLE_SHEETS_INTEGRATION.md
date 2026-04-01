# Google Sheets Integration Setup Guide

## Overview
The alumni registration form can automatically save data to a Google Sheet. Follow these steps to set it up.

## Step 1: Create a Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it: **Alumni Registrations**
4. Create column headers in row 1:
   - A1: `Name`
   - B1: `Phone`
   - C1: `Email`
   - D1: `Batch`
   - E1: `Message`
   - F1: `Timestamp`

## Step 2: Create Google Apps Script
1. Open your Google Sheet
2. Go to **Extensions** → **Apps Script**
3. Delete the default code
4. Paste this code:

```javascript
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
  
  return ContentService.createTextOutput(JSON.stringify({status: 'success'}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

5. Click **Save** (Ctrl+S)

## Step 3: Deploy as Web App
1. Click **Deploy** → **New deployment**
2. Select type: **Web app**
3. Execute as: **Your email/account**
4. Who has access: **Anyone**
5. Click **Deploy**
6. Copy the deployment URL (looks like: `https://script.google.com/macros/d/...`)

## Step 4: Update Alumni Website
1. Open `alumani/alumni-website.html`
2. Find this line (near top of script section):
   ```javascript
   const GOOGLE_SHEETS_URL = '';
   ```
3. Replace with:
   ```javascript
   const GOOGLE_SHEETS_URL = 'YOUR_DEPLOYMENT_URL_HERE';
   ```
4. Paste your deployment URL from Step 3
5. Save the file

## Step 5: Test the Form
1. Open `alumani/alumni-website.html` in browser
2. Fill out the form with test data
3. Click **Submit & Join Now**
4. Check your Google Sheet - new row should appear automatically!

## Features Enabled
✅ Clickable email (opens Gmail/email client): `mmbhaktaschoolnet1961@gmail.com`
✅ Clickable phone (calls/dials on mobile): `+91 63517 38499`
✅ 7 batch cards: 2020-2026, 2010-2020, 2000-2010, 1990-2000, 1980-1990, 1970-1980, **1961-1970 (Founding)**
✅ Google Sheets auto-save for registrations
✅ Automatic timestamp recording

## Troubleshooting
- **Form not submitting?** Check that GOOGLE_SHEETS_URL is correctly set
- **Google Sheet not updating?** Verify the Apps Script has been deployed with "Anyone" access
- **Deployment URL expired?** Re-deploy the script and update the URL
- **Still not working?** Form will still work locally and show success message

## Security Notes
- This deployment URL is public (it's web-accessible)
- Only basic form data is sent (no sensitive info stored)
- Google Sheets handles all data security
- Consider restricting sheet view permissions if needed

## Data Fields Captured
- **Name**: Full name of alumnus
- **Phone**: Contact number (clickable tel: link)
- **Email**: Email address (clickable mailto: link)
- **Batch**: School batch year selected
- **Message**: About themselves/achievements
- **Timestamp**: Automatic date-time of submission
