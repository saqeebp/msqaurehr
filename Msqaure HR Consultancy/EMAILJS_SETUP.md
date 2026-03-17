# EmailJS Setup Guide for Contact Form

This guide will help you set up EmailJS to receive contact form submissions directly to your email.

## Step 1: Sign Up at EmailJS

1. Go to **https://www.emailjs.com/** 
2. Click **"Sign Up Free"** (top right)
3. Create an account using your email (you can use msquarehr@gmail.com)
4. Verify your email

## Step 2: Create an Email Service

1. Log in to EmailJS Dashboard
2. Go to **"Email Services"** (left sidebar)
3. Click **"Add Service"**
4. Select **Gmail** (or your email provider)
5. Click **"Connect"** and authorize your Gmail account
6. Copy your **SERVICE ID** (you'll need this)

## Step 3: Create an Email Template

1. Go to **"Email Templates"** (left sidebar)
2. Click **"Create New Template"**
3. Name it: `contact_form_template`
4. In the Template Editor, use this template:

```
From: {{from_name}} <{{from_email}}>
Phone: {{phone}}
Company: {{company}}
Service: {{service}}

Message:
{{message}}

---
This is an auto-reply. Please reply to this email directly to respond to the customer.
```

5. Click **"Save"**
6. Copy your **TEMPLATE ID** (shown at the top)

## Step 4: Get Your Public Key

1. Go to **Account** (left sidebar)
2. Under **"Public Key"**, copy your key
3. This is your **PUBLIC KEY**

## Step 5: Update Your Website Code

Now you have 3 keys:
- **Service ID**
- **Template ID** 
- **Public Key**

### Update the JavaScript File:

Open `js/script.js` and find these two lines (around line 2-3):

```javascript
emailjs.init('YOUR_PUBLIC_KEY');
```

Replace `YOUR_PUBLIC_KEY` with your actual public key.

Then find these lines (around line 69-70):

```javascript
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
```

Replace:
- `YOUR_SERVICE_ID` with your Service ID
- `YOUR_TEMPLATE_ID` with your Template ID

### Example:

```javascript
// Line 2
emailjs.init('pk_abc123defg456hijk789');

// Line 69
emailjs.send('service_abc123def456', 'template_contact_xyz789', templateParams)
```

## Step 6: Test the Form

1. Open your website in a browser
2. Go to the **Contact** page
3. Fill out the contact form with test data
4. Click **"Send Message"**
5. You should see: **"Thank you for contacting us! We will get back to you soon."**
6. Check your email (msquarehr@gmail.com) - you should receive the form submission!

## Troubleshooting

### "Email not sending" or "Error":
- Double-check that all 3 IDs are correctly copied
- Make sure there are no extra spaces
- Check your internet connection
- Verify Gmail account is properly authorized

### "Service not found" error:
- Verify your Service ID is correct
- Make sure you created the Email Service in EmailJS

### "Template not found" error:
- Verify your Template ID is correct
- Template name must be exactly `contact_form_template`

### Email going to spam:
- EmailJS emails are usually reliable, but check your spam folder
- Later, you can upgrade to verified SMTP to improve deliverability

## Email Limitations (Free Plan)

- **200 emails per month** (free)
- Sufficient for most small businesses
- Upgrade anytime if you need more

## What Information Gets Sent

When someone submits the form, you'll receive:
- ✓ Their Name
- ✓ Email Address
- ✓ Phone Number
- ✓ Company Name
- ✓ Service Interest
- ✓ Message
- ✓ Reply-to address (so you can reply directly)

## Security Notes

Your email credentials are stored locally in your browser code. This is generally safe because:
- Public Key is meant to be public
- Service only allows sending from your EMAIL
- No sensitive passwords are exposed

If you want extra security later, you can move this to a backend server.

## Support

- **EmailJS Docs**: https://www.emailjs.com/docs/
- **Contact EmailJS Support**: support@emailjs.com

---

Once you complete these steps, your contact form will work automatically! 🎉
