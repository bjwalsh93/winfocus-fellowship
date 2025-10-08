# WINFOCUS World Fellowship Program Website

## Project Overview

A professional website for the WINFOCUS World Fellowship Program - enabling international medical students and doctors to apply for ultrasound training and accreditation at Harvard Medical School.

**Launch Timeline:** Immediate  
**Deployment:** Vercel (custom domain, later migrating to WINFOCUS.org subdomain)

---

## Tech Stack

### Core Framework
- **SvelteKit** - Full-stack framework with SSR, routing, and form handling
- **TailwindCSS** - Utility-first CSS framework for rapid styling
- **TypeScript** - Type safety and better developer experience

### UI Components
- **Skeleton UI** or **Flowbite Svelte** - Pre-built Svelte components
- Custom components matching WINFOCUS brand

### Backend/Data
- **Airtable** (or Google Sheets) - Application form submissions storage
- **Resend** or **SendGrid** - Email notifications for new applications
- No authentication system needed (public-facing only)

### Deployment
- **Vercel** - Hosting and deployment (already set up)
- Custom domain (configured in Vercel)
- Automatic deployments from Git

---

## Website Structure

### Page 1: Home / Introduction
**Route:** `/`

**Sections:**
1. **Hero Section**
   - Compelling headline: "WINFOCUS World Fellowship Program"
   - Subheadline about Harvard accreditation for international physicians
   - Primary CTA: "Apply Now" button
   - Background: Professional medical/ultrasound imagery

2. **Program Overview**
   - What is the fellowship
   - Duration and structure
   - WINFOCUS + Harvard partnership highlight

3. **Key Benefits**
   - International recognition
   - Harvard Medical School accreditation
   - Hands-on ultrasound training
   - WINFOCUS network access
   - Career advancement opportunities

4. **Who Should Apply**
   - Target audience (medical residents, fellows, early-career physicians)
   - Specialty focus (Emergency Medicine, Critical Care, etc.)
   - International applicants welcome

5. **Program Highlights** (Stats/Cards)
   - Fellowship duration
   - Training hours
   - Faculty expertise
   - Success rate/alumni

6. **Testimonials** (Optional - Phase 2)
   - Quotes from past fellows (to be generated)

7. **Call to Action**
   - "Ready to Apply?" section
   - Button to application page

### Page 2: Application / Sign Up
**Route:** `/apply`

**Form Fields:**

**Personal Information**
- Full Name (required)
- Email Address (required)
- Phone Number (required)
- Country of Origin (dropdown)
- Current City/Region

**Professional Background**
- Current Position/Title (required)
- Current Institution/Hospital (required)
- Medical Specialty (dropdown: Emergency Medicine, Critical Care, Cardiology, etc.)
- Years of Medical Practice (number)
- Medical License Number & Country

**Education**
- Medical School Name (required)
- Graduation Year (required)
- Additional Certifications (text area)

**Ultrasound Experience**
- Current Ultrasound Experience Level (dropdown: Beginner, Intermediate, Advanced)
- Prior Ultrasound Training/Certifications (text area)
- Types of Ultrasound Performed (checkboxes: Cardiac, Lung, Abdominal, etc.)

**Application Essay**
- Why do you want to join this fellowship? (500 words max)
- How will this fellowship advance your career goals? (300 words max)

**Supporting Documents**
- CV/Resume Upload (PDF, required)
- Letter of Recommendation Upload (PDF, optional)
- Medical License Copy (PDF, optional)

**Consent & Agreement**
- Checkbox: "I agree to the terms and conditions"
- Checkbox: "I consent to WINFOCUS contacting me about my application"

**Form Submission:**
- On submit → Save to Airtable
- Send confirmation email to applicant
- Send notification email to program administrator
- Show success message with next steps

### Page 3: Faculty / About Us
**Route:** `/faculty`

**Sections:**
1. **Page Header**
   - "Meet Our Faculty"
   - Description of world-class educators

2. **Program Director(s)**
   - Larger card/section for 1-2 key leaders
   - Photo, full bio, credentials

3. **Core Faculty Grid**
   - 6-8 faculty members
   - Card format with:
     - Professional photo
     - Name
     - Title & Credentials (MD, PhD, etc.)
     - Institution affiliation
     - Areas of expertise (tags)
     - Short bio (2-3 sentences)

4. **Partner Institutions**
   - WINFOCUS logo + description
   - Harvard Medical School logo + description
   - Partnership statement

5. **Advisory Board** (Optional - Phase 2)
   - Additional supporting faculty/advisors

---

## Design System

### Color Palette (Based on WINFOCUS.org)
- **Primary Blue:** `#1e40af` (medical trust/professionalism)
- **Accent Blue:** `#3b82f6` (interactive elements)
- **Dark:** `#1e293b` (text, headers)
- **Gray:** `#64748b` (secondary text)
- **White:** `#ffffff` (backgrounds)
- **Light Gray:** `#f8fafc` (section backgrounds)

### Typography
- **Headings:** Inter or Poppins (bold, clean, modern)
- **Body:** Inter or system fonts (readable, professional)
- **Sizes:** Follow Tailwind defaults with custom scale

### Component Style
- **Cards:** White with subtle shadow, hover lift effect
- **Buttons:** 
  - Primary: Blue with white text, rounded
  - Secondary: Outline style
- **Forms:** Clean inputs with focus states, proper validation feedback
- **Navigation:** Fixed top bar, responsive hamburger on mobile

### Layout Principles
- Wide hero sections (full viewport height)
- Max-width containers (1280px) for content
- Generous whitespace
- Card-based layouts for content blocks
- Mobile-first responsive design

---

## Content Requirements

### Fake Content to Generate

#### Faculty Profiles (8 total)
For each faculty member, generate:
- Name (realistic, diverse)
- Title: Assistant Professor, Associate Professor, Director of [Specialty]
- Credentials: MD, PhD, RDCS, etc.
- Institution: Harvard Medical School, Beth Israel Deaconess, Mass General, etc.
- Bio: 2-3 sentences about expertise and background
- Photo: Use AI-generated professional headshots or stock medical professional photos
- Specialties: Emergency Medicine, Critical Care, Cardiology, Point-of-Care Ultrasound

#### Program Details Content
- Fellowship duration: 6-12 months
- Training hours: 500+ hands-on hours
- Start dates: Rolling admissions or specific cohorts
- Curriculum overview
- Learning objectives
- Certification details

#### Homepage Copy
- Hero headline and subheadline
- Program overview paragraph (200 words)
- Benefits list (5-7 items)
- Eligibility requirements
- Application deadlines/timeline

---

## Development Phases

### Phase 1: Project Setup (1-2 hours)
- [x] Create project planning documentation
- [ ] Initialize SvelteKit project with TypeScript
- [ ] Install and configure TailwindCSS
- [ ] Set up project folder structure
- [ ] Install additional dependencies (Skeleton UI, etc.)
- [ ] Configure Vercel for deployment
- [ ] Set up Git repository

### Phase 2: Core Layout & Components (2-3 hours)
- [ ] Create reusable components:
  - Header/Navigation
  - Footer
  - Button
  - Card
  - Input/Form elements
  - Section container
- [ ] Set up routing for 3 pages
- [ ] Build responsive navigation
- [ ] Implement mobile menu

### Phase 3: Homepage Development (3-4 hours)
- [ ] Hero section with CTA
- [ ] Program overview section
- [ ] Key benefits cards
- [ ] Who should apply section
- [ ] Program highlights/stats
- [ ] Final CTA section
- [ ] Add imagery (stock or AI-generated)
- [ ] Responsive design testing

### Phase 4: Faculty Page (2-3 hours)
- [ ] Generate 8 faculty profiles (AI-assisted)
- [ ] Find/generate professional photos
- [ ] Create faculty card component
- [ ] Build faculty grid layout
- [ ] Add partner institutions section
- [ ] Program director highlight section

### Phase 5: Application Form (4-5 hours)
- [ ] Build multi-section form layout
- [ ] Implement form validation (client-side)
- [ ] Set up Airtable base and table structure
- [ ] Configure Airtable API integration
- [ ] Implement file upload handling
- [ ] Set up email notifications (Resend/SendGrid)
- [ ] Create success/error states
- [ ] Test form submission end-to-end

### Phase 6: Polish & Optimization (2-3 hours)
- [ ] Add smooth scroll animations
- [ ] Optimize images and assets
- [ ] Add SEO meta tags and Open Graph
- [ ] Create favicon and app icons
- [ ] Cross-browser testing
- [ ] Mobile responsiveness final check
- [ ] Accessibility audit (WCAG basics)
- [ ] Performance optimization (Lighthouse)

### Phase 7: Deployment (1 hour)
- [ ] Deploy to Vercel
- [ ] Configure custom domain
- [ ] Set up environment variables (API keys)
- [ ] Test production build
- [ ] Set up form submission monitoring
- [ ] Create submission notification workflow

---

## Project Structure

```
winworld/
├── src/
│   ├── lib/
│   │   ├── components/
│   │   │   ├── Header.svelte
│   │   │   ├── Footer.svelte
│   │   │   ├── Button.svelte
│   │   │   ├── Card.svelte
│   │   │   ├── FacultyCard.svelte
│   │   │   └── FormInput.svelte
│   │   ├── data/
│   │   │   ├── faculty.ts        # Faculty data
│   │   │   └── content.ts        # Site content/copy
│   │   ├── utils/
│   │   │   ├── airtable.ts       # Airtable API functions
│   │   │   ├── email.ts          # Email sending functions
│   │   │   └── validation.ts     # Form validation
│   │   └── types/
│   │       └── index.ts          # TypeScript types
│   ├── routes/
│   │   ├── +page.svelte          # Homepage
│   │   ├── +layout.svelte        # Root layout
│   │   ├── apply/
│   │   │   ├── +page.svelte      # Application form
│   │   │   └── +page.server.ts   # Form submission handler
│   │   └── faculty/
│   │       └── +page.svelte      # Faculty page
│   ├── app.html
│   └── app.css
├── static/
│   ├── images/
│   │   ├── faculty/              # Faculty photos
│   │   ├── logos/                # WINFOCUS, Harvard logos
│   │   └── hero/                 # Hero images
│   └── favicon.png
├── package.json
├── svelte.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

---

## Environment Variables

Create `.env` file (not committed to Git):

```
AIRTABLE_API_KEY=your_api_key
AIRTABLE_BASE_ID=your_base_id
RESEND_API_KEY=your_api_key
ADMIN_EMAIL=fellowship@example.com
```

---

## Airtable Schema

**Table Name:** `Fellowship Applications`

**Fields:**
- Full Name (Single line text)
- Email (Email)
- Phone (Phone)
- Country (Single line text)
- Current Position (Single line text)
- Current Institution (Single line text)
- Medical Specialty (Single select)
- Years of Practice (Number)
- Medical License (Single line text)
- Medical School (Single line text)
- Graduation Year (Number)
- Additional Certifications (Long text)
- Ultrasound Experience Level (Single select)
- Prior Training (Long text)
- Ultrasound Types (Multiple select)
- Application Essay 1 (Long text)
- Application Essay 2 (Long text)
- CV URL (URL - from file upload)
- Recommendation Letter URL (URL)
- License Copy URL (URL)
- Status (Single select: New, Under Review, Accepted, Rejected)
- Submission Date (Created time)
- Notes (Long text - for admin use)

---

## SEO & Meta Tags

Each page should include:
- Title tag (unique per page)
- Meta description
- Open Graph tags (for social sharing)
- Twitter Card tags
- Canonical URL

**Homepage Title:** "WINFOCUS World Fellowship Program | Harvard Ultrasound Training"

**Apply Page Title:** "Apply Now | WINFOCUS World Fellowship Program"

**Faculty Page Title:** "Our Faculty | WINFOCUS World Fellowship Program"

---

## Post-Launch Tasks

### Analytics & Monitoring
- [ ] Set up Google Analytics or Plausible
- [ ] Monitor form submissions in Airtable
- [ ] Track application conversion rate
- [ ] Set up uptime monitoring

### Future Enhancements (Phase 2)
- [ ] Admin dashboard for application review
- [ ] Application status tracking for applicants
- [ ] Email templates for application status updates
- [ ] FAQ page
- [ ] Blog/News section
- [ ] Program alumni showcase
- [ ] Integration with WINFOCUS.org main site
- [ ] Multi-language support (if international)

### Migration to WINFOCUS.org
- [ ] Coordinate with WINFOCUS IT team
- [ ] Set up subdomain (e.g., fellowship.winfocus.org)
- [ ] Migrate DNS records
- [ ] Set up redirects from original domain
- [ ] Update API keys/environment variables
- [ ] Test all functionality post-migration

---

## Success Metrics

**Launch Day:**
- All pages render correctly on desktop/mobile
- Application form successfully submits to Airtable
- Email notifications working
- No console errors
- Lighthouse score >90

**Week 1:**
- Monitor first applications
- Track form completion rate
- Identify and fix any UX issues
- Gather feedback from stakeholders

---

## Resources & References

- **WINFOCUS Website:** https://www.winfocus.org/
- **SvelteKit Docs:** https://kit.svelte.dev/docs
- **TailwindCSS Docs:** https://tailwindcss.com/docs
- **Airtable API:** https://airtable.com/api
- **Vercel Deployment:** https://vercel.com/docs

---

## Notes

- Keep design consistent with WINFOCUS.org branding
- Prioritize mobile responsiveness (many international users on mobile)
- Ensure form is simple but comprehensive
- Make application process clear and encouraging
- Professional but welcoming tone throughout
- Consider time zones for international applicants

---

**Estimated Total Development Time:** 15-20 hours (can be compressed to 2-3 days with focused work)

**Launch Ready By:** As soon as Phase 7 complete

---

## Getting Started

1. Review this README and confirm all requirements are captured
2. Initialize SvelteKit project
3. Set up Vercel deployment pipeline
4. Generate faculty content with AI assistance
5. Build iteratively, deploying early and often
6. Test with real application scenarios

**Ready to build? Let's go! 🚀**


