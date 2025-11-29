# EmailJS Troubleshooting Guide

## Current Configuration
- **Service ID**: `service_czr4q3g`
- **Template ID**: `template_az3pbib`
- **Public Key**: `b3WNH8lsWgqrCbYWOqZ9P`
- **Recipient Email**: `tegewon@gmail.com`

## Common Issues & Solutions

### 1. Check EmailJS Dashboard → Logs
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Click on **Logs** in the sidebar
3. Look for recent failed attempts
4. Check the error message - it will tell you exactly what's wrong

### 2. Verify Email Template Settings

**In EmailJS Dashboard → Email Templates → template_az3pbib:**

✅ **To Email** field MUST be set to: `tegewon@gmail.com`
- This is the most common issue!
- Make sure it's exactly: `tegewon@gmail.com` (no spaces, correct spelling)

✅ **Template Variables** must match exactly:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email  
- `{{subject}}` - Message subject
- `{{message}}` - Message content

**Example Template Content:**
```
You have received a new message from your portfolio contact form.

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

### 3. Verify Email Service is Active

**In EmailJS Dashboard → Email Services → service_czr4q3g:**

✅ Service status should be **Active** (green)
✅ If using Gmail, make sure it's properly connected
✅ If using EmailJS service, it should work automatically

### 4. Check Public Key

**In EmailJS Dashboard → Account → General:**

✅ Verify your Public Key matches: `b3WNH8lsWgqrCbYWOqZ9P`
✅ Make sure there are no extra spaces or characters

### 5. Test the Template

**In EmailJS Dashboard → Email Templates → template_az3pbib:**

1. Click **Test** button
2. Fill in test values:
   - from_name: Test User
   - from_email: test@example.com
   - subject: Test Subject
   - message: This is a test message
3. Click **Send Test Email**
4. Check if you receive the test email at `tegewon@gmail.com`

### 6. Check Browser Console

1. Open your website
2. Press F12 (or right-click → Inspect)
3. Go to **Console** tab
4. Try submitting the form
5. Look for any error messages
6. The error will show more details about what failed

### 7. Verify Service ID and Template ID

**Double-check in EmailJS Dashboard:**

✅ Service ID: `service_czr4q3g` (from Email Services page)
✅ Template ID: `template_az3pbib` (from Email Templates page)
✅ Public Key: `b3WNH8lsWgqrCbYWOqZ9P` (from Account → General)

## Most Common Fix

**90% of issues are caused by missing "To Email" in the template:**

1. Go to EmailJS Dashboard
2. Click **Email Templates**
3. Open template `template_az3pbib`
4. Find the **To Email** field
5. Make sure it says: `tegewon@gmail.com`
6. Click **Save**

## Still Not Working?

1. **Check EmailJS Logs** - This will show the exact error
2. **Test the template** - Use the Test button in EmailJS dashboard
3. **Verify all IDs** - Make sure Service ID, Template ID, and Public Key are correct
4. **Check spam folder** - Sometimes emails go to spam
5. **Try a different email service** - If Gmail isn't working, try EmailJS's own service

## Quick Checklist

- [ ] Template "To Email" is set to `tegewon@gmail.com`
- [ ] Template variables match: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
- [ ] Service is Active in EmailJS dashboard
- [ ] Service ID, Template ID, and Public Key are correct
- [ ] Test email works from EmailJS dashboard
- [ ] Checked EmailJS Logs for error messages
- [ ] Checked browser console for errors
- [ ] Checked spam/junk folder

## Need More Help?

If you're still having issues:
1. Check the error message in the browser console (F12)
2. Check EmailJS dashboard → Logs for detailed error
3. The improved error handling will now show more details in the error notification

