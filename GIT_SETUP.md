# Git Setup & Deployment Instructions

## ✅ What's Been Done

- ✅ Git repository initialized
- ✅ All files committed (29 files, 6,943 lines of code)
- ✅ Initial commit created

---

## 🔐 Step 1: Create .env File (LOCAL ONLY - DO NOT COMMIT)

Create a file called `.env` in the project root with your Airtable credentials:

```bash
# Create .env file (copy this exactly)
cat > .env << 'EOF'
AIRTABLE_API_KEY=your_airtable_api_key_here
AIRTABLE_BASE_ID=YOUR_BASE_ID_HERE
ADMIN_EMAIL=fellowship@winfocus.org
EOF
```

**IMPORTANT:** 
- This file is already in `.gitignore` and won't be committed
- You need to get your Airtable Base ID from: https://airtable.com/
- Update `AIRTABLE_BASE_ID` once you create your base

---

## 📤 Step 2: Push to GitHub

### Option A: Create New Repo on GitHub.com (Recommended)

1. **Go to GitHub:** https://github.com/new
2. **Create a new repository:**
   - Name: `winfocus-fellowship` (or your preferred name)
   - Description: "FAWUS World Fellowship Program Website"
   - Privacy: Private or Public (your choice)
   - **DO NOT** initialize with README, .gitignore, or license

3. **Push your code:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/winfocus-fellowship.git
   git branch -M main
   git push -u origin main
   ```

### Option B: Use GitHub CLI (if installed)

```bash
gh repo create winfocus-fellowship --private --source=. --remote=origin
git push -u origin main
```

---

## 🚀 Step 3: Deploy to Vercel

### 3.1 Connect to Vercel

1. Go to: https://vercel.com/new
2. Click "Import Project"
3. Select your GitHub repository
4. Vercel will auto-detect SvelteKit

### 3.2 Add Environment Variables in Vercel

In Vercel project settings, add these:

| Variable Name | Value |
|---------------|-------|
| `AIRTABLE_API_KEY` | Your Airtable API token |
| `AIRTABLE_BASE_ID` | Your base ID from Airtable |
| `ADMIN_EMAIL` | `fellowship@winfocus.org` |

**How to add:**
1. Go to your project in Vercel
2. Settings → Environment Variables
3. Add each variable
4. Save and redeploy

### 3.3 Deploy

Click "Deploy" and Vercel will build your site!

---

## 📊 Step 4: Set Up Airtable

### 4.1 Create Base

1. Log in to: https://airtable.com/
2. Create a new base: "Fellowship Applications"
3. Rename the table to: "Fellowship Applications"

### 4.2 Add Fields

Click the + icon to add these fields:

| Field Name | Field Type | Options |
|------------|------------|---------|
| Full Name | Single line text | - |
| Email | Email | - |
| Phone | Phone | - |
| Country | Single line text | - |
| Current Position | Single line text | - |
| Current Institution | Single line text | - |
| Medical Specialty | Single select | Add: Emergency Medicine, Cardiology, Critical Care, etc. |
| Years of Practice | Number | Integer |
| Medical License | Single line text | - |
| Medical School | Single line text | - |
| Graduation Year | Number | Integer |
| Additional Certifications | Long text | - |
| Ultrasound Experience Level | Single select | Beginner, Intermediate, Advanced |
| Prior Training | Long text | - |
| Ultrasound Types | Multiple select | Add: Cardiac, Lung, Abdominal, etc. |
| Application Essay 1 | Long text | - |
| Application Essay 2 | Long text | - |
| Status | Single select | New, Under Review, Accepted, Rejected |
| Submission Date | Created time | - |
| Notes | Long text | - |

### 4.3 Get Base ID

1. Go to your base in Airtable
2. Click "Help" → "API documentation"
3. Your Base ID is shown at the top: `appXXXXXXXXXXXXXX`
4. Copy this ID

### 4.4 Update Environment Variables

**Locally:**
```bash
# Edit .env file and replace YOUR_BASE_ID_HERE with your actual base ID
nano .env
```

**On Vercel:**
1. Go to Settings → Environment Variables
2. Edit `AIRTABLE_BASE_ID`
3. Replace with your actual base ID
4. Save and redeploy

---

## ✅ Step 5: Test Everything

### Local Testing

```bash
# Start dev server
npm run dev

# Open browser: http://localhost:5173
# Go to /apply and submit a test application
# Check Airtable to see if it appears
```

### Production Testing

1. Visit your Vercel deployment URL
2. Test all pages
3. Submit a test application
4. Verify it appears in Airtable

---

## 🔄 Making Updates

After initial deployment, any changes you push will auto-deploy:

```bash
# Make your changes
git add .
git commit -m "Update homepage content"
git push origin main

# Vercel automatically deploys!
```

---

## 🎯 Quick Reference Commands

```bash
# Check git status
git status

# View commit history
git log --oneline

# Push changes
git add .
git commit -m "Your message"
git push origin main

# Pull latest changes
git pull origin main

# Create a new branch
git checkout -b feature-name

# Switch branches
git checkout main
```

---

## 🆘 Troubleshooting

### Dev Server Won't Start

```bash
# Stop all node processes
pkill node

# Clear cache and restart
rm -rf .svelte-kit node_modules
npm install
npm run dev
```

### Airtable Not Working

1. Check API key is correct in .env (local) and Vercel (production)
2. Check Base ID is correct
3. Check table name is exactly: "Fellowship Applications"
4. Check API token has read/write permissions

### Git Push Rejected

```bash
# If you need to force push (BE CAREFUL)
git push -f origin main

# Or pull first, then push
git pull origin main --rebase
git push origin main
```

---

## 📋 Checklist

Before going live:

- [ ] `.env` file created locally with your Airtable credentials
- [ ] Airtable base created with all required fields
- [ ] Base ID obtained and added to .env
- [ ] Code pushed to GitHub
- [ ] Vercel project connected to GitHub
- [ ] Environment variables added to Vercel
- [ ] Test application submitted successfully
- [ ] Application appears in Airtable
- [ ] Custom domain connected (optional)
- [ ] All pages reviewed and content updated

---

## 🎉 You're Done!

Your website is now:
- ✅ Committed to Git
- ✅ Ready to push to GitHub
- ✅ Ready to deploy to Vercel
- ✅ Integrated with Airtable

**Next:** Follow Step 2 above to push to GitHub, then deploy to Vercel!

---

## 📞 Need Your Airtable Base ID?

1. Go to: https://airtable.com/
2. Create your base (if not done)
3. Click Help → API documentation
4. Copy the Base ID (starts with `app`)
5. Update your `.env` file and Vercel environment variables

---

**Questions? Check DEPLOYMENT.md for detailed instructions!**
