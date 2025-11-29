# EmailJS Setup Guide - Send Messages to tegewon@gmail.com

## Step 1: Create/Login to EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account or log in if you already have one
3. The free plan allows 200 emails per month

## Step 2: Add Email Service

### Option A: Use EmailJS Email Service (RECOMMENDED - Easier & More Reliable)

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Select **EmailJS** (the default email service - NOT Gmail)
4. Give your service a name (e.g., "Portfolio Contact")
5. **Copy the Service ID** (you'll need this - it looks like `service_xxxxxxx`)

**Note**: EmailJS service sends emails directly without needing Gmail API authentication. This is the easiest option!

### Option B: Use Gmail Service (If you prefer Gmail)

**⚠️ If you get "412 Gmail_API: Request had insufficient authentication scopes" error:**

1. **Disconnect existing Gmail service** (if any):
   - Go to Email Services
   - Find your Gmail service
   - Click the three dots → Delete/Disconnect

2. **Reconnect Gmail with proper permissions**:
   - Click **Add New Service**
   - Select **Gmail**
   - Click **Connect Account**
   - Sign in with **tegewon@gmail.com**
   - **IMPORTANT**: When Google asks for permissions, make sure to:
     - Check "See, edit, compose, and send emails from your Gmail account"
     - Check "Send email on your behalf"
     - Click "Allow" for all permissions
   - If you see a warning about "unverified app", click "Advanced" → "Go to [your app] (unsafe)" → "Allow"
   - Give your service a name (e.g., "Gmail Service")
   - **Copy the Service ID**

3. **If still getting errors**, try:
   - Go to [Google Account Settings](https://myaccount.google.com/permissions)
   - Remove EmailJS access
   - Reconnect in EmailJS dashboard
   - Make sure to grant ALL requested permissions

## Step 3: Create Email Template

1. Go to **Email Templates** in your EmailJS dashboard
2. Click **Create New Template**
3. Use these settings:

### Template Settings:
- **Template Name**: Contact Form Template
- **Subject**: New Contact Form Message from {{from_name}}
- **Content** (HTML or Plain Text):

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

4. **To Email**: Enter `tegewon@gmail.com` (your email address)
5. **From Name**: Portfolio Contact Form
6. **Reply To**: `{{from_email}}` (so you can reply directly to the sender)
7. Click **Save**
8. **Copy the Template ID** (you'll need this - it looks like `template_xxxxxxx`)

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in your EmailJS dashboard
2. Find your **Public Key** (it looks like a random string)
3. **Copy the Public Key**

## Step 5: Update Your Code

Update the following values in `src/components/Contact.jsx`:

```javascript
const serviceId = 'YOUR_SERVICE_ID';      // From Step 2
const templateId = 'YOUR_TEMPLATE_ID';    // From Step 3
const publicKey = 'YOUR_PUBLIC_KEY';      // From Step 4
```

## Step 6: Test the Form

1. Start your development server: `npm run dev`
2. Fill out the contact form on your website
3. Submit the form
4. Check your email inbox at **tegewon@gmail.com**

## Troubleshooting

### "412 Gmail_API: Request had insufficient authentication scopes" Error

**Solution 1: Use EmailJS Email Service Instead (Easiest)**
- Delete your Gmail service
- Add EmailJS service instead (Option A in Step 2)
- This doesn't require Gmail API authentication

**Solution 2: Fix Gmail Permissions**
1. Go to [Google Account Permissions](https://myaccount.google.com/permissions)
2. Find "EmailJS" or "EmailJS.com" in the list
3. Click "Remove Access"
4. Go back to EmailJS dashboard
5. Delete the existing Gmail service
6. Add a new Gmail service
7. When connecting, make sure to:
   - Grant ALL permissions Google asks for
   - If you see "This app isn't verified", click "Advanced" → "Go to [app name] (unsafe)" → "Allow"
   - Don't skip any permission screens

**Solution 3: Use Outlook/Other Email Service**
- In EmailJS, try adding Outlook or another email service
- These sometimes have fewer authentication issues

### Emails not arriving?
1. Check your **Spam/Junk** folder
2. Verify the **To Email** in your template is set to `tegewon@gmail.com`
3. Check the EmailJS dashboard for error logs
4. Make sure your email service is active in EmailJS
5. Test with EmailJS's built-in test feature in the template editor

### Getting errors?
1. Verify all three IDs (Service ID, Template ID, Public Key) are correct
2. Make sure your email service is active in EmailJS
3. Check the browser console for error messages
4. Check EmailJS dashboard → Logs for detailed error information

## Current Configuration

Your current code has these values (you need to update them):
- Service ID: `service_za63y0a`
- Template ID: `template_99kfdql`
- Public Key: `olAur_3TIkFif4K7x`

**Important**: Make sure your EmailJS template has `tegewon@gmail.com` set as the "To Email" field!

