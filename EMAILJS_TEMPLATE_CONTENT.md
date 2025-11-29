# EmailJS Template Content - Copy and Paste This

## Template Settings

### Template Name
```
Contact Form Template
```

### To Email
```
tegewon@gmail.com
```

### From Name
```
Portfolio Contact Form
```

### Reply To
```
{{from_email}}
```

### Subject
```
New Contact Form Message from {{from_name}}
```

## Template Content (HTML)

Copy this entire block into the EmailJS template editor:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background-color: #576cbc;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 5px 5px 0 0;
        }
        .content {
            background-color: #f9f9f9;
            padding: 20px;
            border: 1px solid #ddd;
            border-top: none;
            border-radius: 0 0 5px 5px;
        }
        .field {
            margin-bottom: 15px;
        }
        .label {
            font-weight: bold;
            color: #576cbc;
            display: inline-block;
            min-width: 100px;
        }
        .value {
            color: #333;
        }
        .message-box {
            background-color: white;
            padding: 15px;
            border-left: 4px solid #576cbc;
            margin-top: 10px;
            white-space: pre-wrap;
        }
        .footer {
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #ddd;
            font-size: 12px;
            color: #666;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="header">
        <h2>New Contact Form Message</h2>
    </div>
    <div class="content">
        <div class="field">
            <span class="label">From:</span>
            <span class="value">{{from_name}}</span>
        </div>
        <div class="field">
            <span class="label">Email:</span>
            <span class="value">{{from_email}}</span>
        </div>
        <div class="field">
            <span class="label">Subject:</span>
            <span class="value">{{subject}}</span>
        </div>
        <div class="field">
            <span class="label">Message:</span>
        </div>
        <div class="message-box">
            {{message}}
        </div>
    </div>
    <div class="footer">
        <p>This message was sent from your portfolio website contact form.</p>
        <p>You can reply directly to this email to respond to {{from_name}}.</p>
    </div>
</body>
</html>
```

## Template Content (Plain Text - Alternative)

If you prefer plain text instead of HTML, use this:

```
New Contact Form Message
========================

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
--------
{{message}}

---
This message was sent from your portfolio website contact form.
You can reply directly to this email to respond to {{from_name}}.
```

## Step-by-Step Instructions

1. **Go to EmailJS Dashboard**
   - Visit: https://dashboard.emailjs.com/
   - Click **Email Templates**

2. **Open Your Template**
   - Find and click on template `template_az3pbib`
   - Or create a new template if needed

3. **Set Template Settings**
   - **Template Name**: `Contact Form Template`
   - **To Email**: `tegewon@gmail.com` ⚠️ **IMPORTANT!**
   - **From Name**: `Portfolio Contact Form`
   - **Reply To**: `{{from_email}}`
   - **Subject**: `New Contact Form Message from {{from_name}}`

4. **Paste Template Content**
   - Choose either HTML or Plain Text version above
   - Copy the entire content
   - Paste it into the **Content** field in EmailJS
   - Make sure to use the template variables: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`

5. **Save the Template**
   - Click **Save** button
   - The template is now ready to use

6. **Test the Template**
   - Click **Test** button in EmailJS
   - Fill in test values:
     - from_name: Test User
     - from_email: test@example.com
     - subject: Test Subject
     - message: This is a test message
   - Click **Send Test Email**
   - Check your inbox at `tegewon@gmail.com`

## Important Notes

✅ **To Email** MUST be set to: `tegewon@gmail.com`  
✅ Template variables must match exactly: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`  
✅ Use double curly braces `{{}}` for variables  
✅ Save the template after making changes  
✅ Test the template before using it in production

