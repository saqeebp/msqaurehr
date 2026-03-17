# Email Template Setup Guide for EmailJS

## How to Add This Template to EmailJS

### Step 1: Copy the Template Code

Open the file `EMAIL_TEMPLATE.txt` in your project folder and copy all the content.

### Step 2: Go to EmailJS Email Templates

1. Log in to your **EmailJS Account** at https://dashboard.emailjs.com/
2. Click on **"Email Templates"** in the left sidebar
3. Click **"Create New Template"**

### Step 3: Configure the Template

1. **Template Name:** `contact_form_template`
2. **Template Subject:** `New Contact Form Submission from {{from_name}}`
3. **In the "Content" section:** Paste the entire template code from `EMAIL_TEMPLATE.txt`

### Step 4: Save the Template

1. Click **"Save"**
2. Copy your **Template ID** (shown at the top of the page)
3. Update your `js/script.js` file with this Template ID:
   ```javascript
   emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
   ```

### Step 5: Test It

1. Go to your website's Contact page
2. Fill out the form and submit
3. Check your email inbox (msquarehr@gmail.com)
4. You should see an email with all the visitor's information formatted nicely

## Template Variables Explained

The template uses these variables from your contact form:

| Variable | Source | Example |
|----------|--------|---------|
| `{{from_name}}` | Name field | "John Smith" |
| `{{from_email}}` | Email field | "john@company.com" |
| `{{phone}}` | Phone field | "+91 9876543210" |
| `{{company}}` | Company field | "Tech Solutions Ltd" |
| `{{service}}` | Service dropdown | "HR Recruitment" |
| `{{message}}` | Message textarea | "We need help with recruitment..." |

## Customization Options

You can modify the template to suit your preferences:

### Option 1: Simpler Version (Basic Info Only)
```
Subject: New Inquiry - {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}
Service: {{service}}

Message:
{{message}}

Reply to: {{from_email}}
```

### Option 2: HTML Template (If you want styling)
If EmailJS dashboard supports HTML templates, you can use HTML formatting for a prettier email.

### Option 3: Add More Details
You could add additional fields to your form and template like:
- Budget range
- Timeline for project
- Number of employees
- Industry type

## Troubleshooting

### Template Not Sending Variables
- Make sure variable names match EXACTLY (they're case-sensitive)
- In the form, ensure the JavaScript uses the same variable names:
  ```javascript
  const templateParams = {
      from_name: name,
      from_email: email,
      phone: phone,
      company: company,
      service: service,
      message: message,
      reply_to: email
  };
  ```

### Email Not Received
1. Check your spam/junk folder
2. Verify Template ID is correct in `js/script.js`
3. Check your email service (Gmail) isn't blocking emails
4. Check browser console for JavaScript errors (F12 → Console tab)

## What Visitors Receive

**Optional:** You can also set up an auto-reply to visitors confirming receipt:

1. In EmailJS, create another template named `visitor_confirmation`
2. Send to: `{{from_email}}` (instead of your email)
3. Subject: `We received your inquiry - M Square HR Consultant`
4. Content:
```
Dear {{from_name}},

Thank you for contacting M Square HR Consultant!

We have received your inquiry regarding {{service}} services. 
Our team will review your information and get back to you shortly.

If you have any urgent questions, please call us:
+91 9545551435 | +91 9545551444 | +91 9850842287

Best regards,
M Square HR Consultant Team
B- 501, K Ville, Adarsh Nagar, Kilvale Ravet
Pune – 412101, India
```

Then in `js/script.js`, send both emails:
```javascript
// Send to your email
emailjs.send('YOUR_SERVICE_ID', 'contact_form_template', templateParams);

// Send confirmation to visitor
emailjs.send('YOUR_SERVICE_ID', 'visitor_confirmation', templateParams);
```

## Template Best Practices

✓ **Clear sections** - Organize information by categories
✓ **Include all form data** - Nothing gets lost
✓ **Easy to read** - Use separators and formatting
✓ **Reply-to included** - Easy for your team to respond
✓ **Professional footer** - Shows company info
✓ **Timestamp capability** - EmailJS auto-adds receive time

---

Once set up, every form submission will arrive formatted perfectly in your inbox! 📧
