# Information Gateway — Formspree Setup Guide

## How to Receive Form Submissions

Your Information Gateway form is now ready to send data to **Formspree**, which will email you all submissions.

---

## Setup Steps

### 1. **Sign Up for Formspree** (Free)
- Go to [formspree.io](https://formspree.io)
- Click "Sign up" and create a free account
- Verify your email

### 2. **Create a New Form**
- After login, click "New Project" or go to your dashboard
- Create a project called "School Information Gateway"
- Click "Create Form" 
- Name it: `Information Gateway` or `School Website Contact`
- Select your email address to receive submissions
- Formspree will generate a **Form ID** (looks like: `xyzabc123`)

### 3. **Update Your Website**
- Open `index main.html` in your editor
- Find the line with: `action="https://formspree.io/f/YOUR_FORM_ID"`
- Replace `YOUR_FORM_ID` with your actual Formspree Form ID
- Example: `action="https://formspree.io/f/xyzabc123"`

### 4. **Test the Form**
- Open your website in a browser
- Scroll to the "Information Gateway" section
- Fill out and submit the form
- Check your email for the submission

---

## Example (Before & After)

**BEFORE:**
```html
<form id="info-gateway-form" method="POST" action="https://formspree.io/f/YOUR_FORM_ID">
```

**AFTER (with your Form ID):**
```html
<form id="info-gateway-form" method="POST" action="https://formspree.io/f/mzegkgxo">
```

---

## What You'll Receive

Each submission will be emailed to you with:
- ✅ Visitor's name
- ✅ Visitor's email
- ✅ Phone (if provided)
- ✅ Message/query
- ✅ Timestamp

---

## Other Options (Optional)

### Formspree Premium (Optional)
- View submissions in the Formspree dashboard
- Redirect users to a thank-you page after submission
- More customization options

### Free Plan Limits
- ✅ Unlimited forms
- ✅ Unlimited submissions
- ✅ Email notifications
- Perfect for a school website!

---

## Support
- Formspree Help: [formspree.io/help](https://formspree.io/help)
- Still need help? Reply with your Form ID and we can verify the setup.
