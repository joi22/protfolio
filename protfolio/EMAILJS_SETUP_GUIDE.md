# EmailJS Setup Guide

## Step-by-Step Instructions to Set Up EmailJS

### Step 1: Create EmailJS Account (Already Done ✅)
You've already created your account and have Service ID: `service_wdhan3b`

### Step 2: Get Your Public Key
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/admin)
2. Click on **Account** in the left sidebar
3. Scroll down to find **API Keys** section
4. Copy your **Public Key** (it looks like: `xxxxxxxxxxxxx`)

### Step 3: Create an Email Template
1. In EmailJS Dashboard, go to **Email Templates** in the left sidebar
2. Click **Create New Template**
3. Choose a template or start from scratch
4. Set up your template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - Message content
   - `{{to_name}}` - Your name (Muhammad Uzair)

5. **Template Example:**
   ```
   Subject: New Contact Form Message from {{from_name}}
   
   Hello {{to_name}},
   
   You have received a new message from your portfolio contact form.
   
   From: {{from_name}}
   Email: {{from_email}}
   
   Message:
   {{message}}
   
   ---
   This message was sent from your portfolio website.
   ```

6. Click **Save**
7. Copy the **Template ID** (it looks like: `template_xxxxxxxxx`)

### Step 4: Update Your Code
1. Open `protfolio/src/UI/we_Site/componente/ContactForm.jsx`
2. Find these lines (around line 15-17):
   ```javascript
   const SERVICE_ID = 'service_wdhan3b';
   const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Replace this
   const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Replace this
   ```

3. Replace:
   - `YOUR_TEMPLATE_ID` with your actual Template ID from Step 3
   - `YOUR_PUBLIC_KEY` with your actual Public Key from Step 2

### Step 5: Test the Form
1. Run your development server: `npm run dev`
2. Fill out the contact form on your website
3. Submit the form
4. Check your email inbox for the message

## Important Notes:
- Make sure your EmailJS service is connected to your email provider (Gmail, Outlook, etc.)
- The free plan allows 200 emails per month
- Test the form before deploying to production

## Troubleshooting:
- If emails aren't sending, check the browser console for errors
- Verify all three IDs (Service ID, Template ID, Public Key) are correct
- Make sure your EmailJS service is active in the dashboard

