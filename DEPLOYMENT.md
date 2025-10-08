# Deployment Guide

This guide will help you deploy the FAWUS Fellowship website to Vercel.

## Prerequisites

- [Node.js](https://nodejs.org/) installed (v18 or higher)
- [Vercel account](https://vercel.com/) (free tier works)
- [Airtable account](https://airtable.com/) (optional, for form submissions)
- Git repository (GitHub, GitLab, or Bitbucket)

---

## Step 1: Set Up Airtable (Optional but Recommended)

If you want to collect application submissions in Airtable:

### 1.1 Create Airtable Base

1. Log in to [Airtable](https://airtable.com/)
2. Create a new base called "Fellowship Applications"
3. Create a table called "Fellowship Applications"
4. Add the following fields:

| Field Name | Field Type |
|------------|------------|
| Full Name | Single line text |
| Email | Email |
| Phone | Phone |
| Country | Single line text |
| Current Position | Single line text |
| Current Institution | Single line text |
| Medical Specialty | Single select |
| Years of Practice | Number |
| Medical License | Single line text |
| Medical School | Single line text |
| Graduation Year | Number |
| Additional Certifications | Long text |
| Ultrasound Experience Level | Single select |
| Prior Training | Long text |
| Ultrasound Types | Multiple select |
| Application Essay 1 | Long text |
| Application Essay 2 | Long text |
| Status | Single select (options: New, Under Review, Accepted, Rejected) |
| Submission Date | Created time |
| Notes | Long text |

### 1.2 Get API Credentials

1. Go to your Airtable account settings
2. Navigate to "Developer" section
3. Generate a Personal Access Token with the following scopes:
   - `data.records:read`
   - `data.records:write`
   - `schema.bases:read`
4. Copy your API key
5. Get your Base ID from the base URL: `https://airtable.com/[BASE_ID]/...`

---

## Step 2: Deploy to Vercel

### 2.1 Connect Repository to Vercel

1. Push your code to GitHub/GitLab/Bitbucket:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "Add New Project"
4. Import your Git repository
5. Vercel will automatically detect it's a SvelteKit project

### 2.2 Configure Environment Variables

In the Vercel project settings, add the following environment variables:

| Variable Name | Value | Notes |
|--------------|-------|-------|
| `AIRTABLE_API_KEY` | Your API key from step 1.2 | Required for form submissions |
| `AIRTABLE_BASE_ID` | Your base ID from step 1.2 | Required for form submissions |
| `ADMIN_EMAIL` | fellowship@yourdomain.com | Optional, for notifications |

**Important:** If you don't configure Airtable, form submissions will be logged to console only (dev mode).

### 2.3 Configure Custom Domain

1. In Vercel project settings, go to "Domains"
2. Add your custom domain
3. Follow Vercel's instructions to update DNS records with your domain registrar
4. Wait for DNS propagation (5-60 minutes typically)

### 2.4 Deploy

1. Click "Deploy"
2. Vercel will build and deploy your site
3. Visit your deployment URL to test

---

## Step 3: Verify Deployment

### 3.1 Test the Website

Visit your deployed URL and verify:
- ✅ Homepage loads correctly
- ✅ Faculty page displays all 8 faculty members
- ✅ Application form is accessible
- ✅ Navigation works on mobile and desktop
- ✅ All links work correctly

### 3.2 Test Form Submission

1. Go to `/apply`
2. Fill out the application form
3. Submit the form
4. Verify:
   - Success message appears
   - Submission appears in your Airtable base
   - Confirmation email is sent (if configured)

---

## Step 4: Post-Deployment Tasks

### 4.1 Set Up Analytics (Optional)

Add Google Analytics or Plausible for tracking:

1. Get your analytics tracking code
2. Add to `src/app.html` in the `<head>` section
3. Redeploy

### 4.2 Set Up Form Notifications

Configure email notifications when new applications are submitted:

**Option A: Airtable Automations (Recommended)**
1. In your Airtable base, go to "Automations"
2. Create a new automation
3. Trigger: "When record is created"
4. Action: "Send email"
5. Configure recipient and email template

**Option B: Use Resend/SendGrid**
1. Sign up for [Resend](https://resend.com/) or [SendGrid](https://sendgrid.com/)
2. Add API key to environment variables
3. Update `src/routes/apply/+page.server.ts` to send emails

### 4.3 Configure Backups

Set up regular backups of your Airtable data:
1. Use Airtable's backup feature (Pro plan)
2. Or use Airtable API to export data periodically

---

## Step 5: Continuous Deployment

Vercel automatically deploys when you push to your main branch:

```bash
# Make changes to your code
git add .
git commit -m "Update homepage content"
git push origin main
# Vercel will automatically rebuild and deploy
```

### Preview Deployments

Vercel creates preview deployments for pull requests automatically.

---

## Troubleshooting

### Build Fails on Vercel

**Problem:** Build fails with dependency errors

**Solution:**
```bash
# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json
# Reinstall dependencies
npm install
# Test build locally
npm run build
# If successful, push to Git
```

### Form Submissions Not Reaching Airtable

**Problem:** Form submits but data doesn't appear in Airtable

**Solution:**
1. Check environment variables are set correctly in Vercel
2. Check Airtable API token has correct scopes
3. Verify table name matches exactly: "Fellowship Applications"
4. Check Vercel function logs for errors

### Images Not Loading

**Problem:** Faculty images or other images not displaying

**Solution:**
1. All images from Unsplash are loaded via CDN
2. Check browser console for CORS errors
3. Ensure image URLs are valid and accessible

### Slow Page Load

**Problem:** Website loads slowly

**Solution:**
1. Enable Vercel's Edge Network (automatic)
2. Optimize images (compress, use WebP format)
3. Check Lighthouse score: `npm run build && npm run preview`

---

## Environment Variables Reference

```bash
# .env (for local development only - never commit this file)
AIRTABLE_API_KEY=patAbcDef123456789
AIRTABLE_BASE_ID=appXyz9876543210
ADMIN_EMAIL=fellowship@winfocus.org
```

---

## Development Commands

```bash
# Install dependencies
npm install

# Run development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Type check
npm run check
```

---

## Support

For issues with:
- **SvelteKit**: [SvelteKit Documentation](https://kit.svelte.dev/docs)
- **Vercel**: [Vercel Support](https://vercel.com/support)
- **Airtable**: [Airtable API Docs](https://airtable.com/developers/web/api/introduction)
- **TailwindCSS**: [Tailwind Documentation](https://tailwindcss.com/docs)

---

## Next Steps After Deployment

1. ✅ Test all pages and functionality
2. ✅ Set up Airtable automations for notifications
3. ✅ Add Google Analytics
4. ✅ Monitor first application submissions
5. ✅ Set up regular Airtable backups
6. ✅ Share website URL with stakeholders
7. ✅ Plan migration to FAWUS.org subdomain (when ready)

---

**Congratulations! Your FAWUS Fellowship website is live! 🎉**
