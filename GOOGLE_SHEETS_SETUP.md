# Google Sheets Integration Guide

## How to Set Up Google Sheets Form Submission

Your Information Gateway form is now configured to send data directly to **Google Sheets** via Google Apps Script.

---

## Setup Steps (5 minutes)

### Step 1: Create a Google Sheet
1. Go to [Google Drive](https://drive.google.com)
2. Click **"+ New"** → **"Google Sheet"**
3. Name it: `School Information Gateway` (or any name you prefer)
4. Add column headers:
   - Cell A1: `Timestamp`
   - Cell B1: `Name`
   - Cell C1: `Email`
   - Cell D1: `Phone`
   - Cell E1: `Message`

### Step 2: Create Google Apps Script
1. In the same Sheet, click **"Extensions"** → **"Apps Script"**
2. Delete the default code and paste this:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Add data to next available row
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.email,
      data.phone,
      data.message
    ]);
    
    return ContentService.createTextOutput('Success').setMimeType(ContentService.MimeType.TEXT);
  } catch (error) {
    return ContentService.createTextOutput('Error: ' + error.toString()).setMimeType(ContentService.MimeType.TEXT);
  }
}
```

3. Click **"Save"** (name it anything, e.g., `FormHandler`)
4. Click the **"Deploy"** button (top-right)
5. Choose **"New deployment"**
6. Select **Type: Web app**
7. Set **Execute as**: Your email address
8. Set **Who has access**: Anyone
9. Click **"Deploy"**
10. **Copy the deployment URL** (it will show in a popup)

### Step 3: Update Your Website
1. Open `script.js` in your code editor
2. Find this line:
   ```javascript
   const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/d/YOUR_DEPLOYMENT_ID/usercallback';
   ```
3. Replace `YOUR_DEPLOYMENT_ID` with your actual deployment ID from Step 2
   - Example: `const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/d/AKfycbxZqAbcDefGhIjKlMnOpQrStUvWxYz123/usercallback';`

### Step 4: Test the Form
1. Open your website
2. Scroll to "Information Gateway" section
3. Fill out the form and click "Send Message"
4. Check your Google Sheet - the data should appear in a new row!

---

## What You'll Get in Google Sheets

Each submission will automatically add a row with:
- ✅ **Timestamp** - When the form was submitted
- ✅ **Name** - Visitor's name
- ✅ **Email** - Visitor's email
- ✅ **Phone** - Phone number (if provided)
- ✅ **Message** - Their message/query

---

## Features

### ✅ Free - No Cost!
- Google Sheets is free
- Google Apps Script is free
- Unlimited submissions

### ✅ Organizes Data Automatically
- All form submissions go directly to one Google Sheet
- Easy to analyze and sort
- Can create formulas, charts, and reports

### ✅ Easy to Manage
- Access from any device
- No third-party service needed
- Full control over your data

### ✅ Email Notifications (Optional)
To get email notifications when someone submits:
1. In Google Sheet, click **"Tools"** → **"Notification rules"**
2. Choose preferences

---

## Troubleshooting

### "Error sending message"
- ✓ Check the deployment URL is correctly copied
- ✓ Make sure the Google Apps Script is deployed as a web app
- ✓ Verify "Who has access" is set to "Anyone"

### Data not appearing in Sheet
- ✓ Check the column headers match the code (Timestamp, Name, Email, Phone, Message)
- ✓ Refresh the Google Sheet
- ✓ Check browser console for errors (F12)

### Need to update the deployment
- Edit your Google Apps Script
- Click **"Deploy"** → **"Edit deployments"**
- Select the latest version
- Update the URL if needed

---

## File References

- **HTML**: [index main.html](index%20main.html) - Form structure
- **JavaScript**: [script.js](script.js) - Form submission handler

---

## Support

Still having issues? 
- Check Google Apps Script error logs (Executions panel)
- Make sure all column headers are exactly: `Timestamp`, `Name`, `Email`, `Phone`, `Message`
- Verify the deployment URL has no typos
