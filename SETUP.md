# Local Development Setup

Quick guide to get the project running on your local machine.

## Prerequisites

- Node.js v18+ ([download](https://nodejs.org/))
- npm (comes with Node.js)
- Git
- Code editor (VS Code recommended)

## Installation

1. **Clone the repository:**
   ```bash
   git clone YOUR_REPO_URL
   cd winworld
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables (optional for dev):**
   
   Create a `.env` file in the root directory:
   ```bash
   AIRTABLE_API_KEY=your_api_key_here
   AIRTABLE_BASE_ID=your_base_id_here
   ADMIN_EMAIL=fellowship@example.com
   ```
   
   > **Note:** Without these variables, the app will still work but form submissions will only be logged to the console.

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   
   Navigate to `http://localhost:5173`

## Project Structure

```
winworld/
├── src/
│   ├── lib/
│   │   ├── components/          # Reusable Svelte components
│   │   │   ├── Header.svelte
│   │   │   ├── Footer.svelte
│   │   │   ├── Button.svelte
│   │   │   ├── Card.svelte
│   │   │   └── FacultyCard.svelte
│   │   ├── data/
│   │   │   └── faculty.ts       # Faculty member data
│   │   └── utils/
│   │       └── airtable.ts      # Airtable integration
│   ├── routes/
│   │   ├── +page.svelte         # Homepage
│   │   ├── +layout.svelte       # Root layout (with header/footer)
│   │   ├── apply/
│   │   │   ├── +page.svelte     # Application form
│   │   │   └── +page.server.ts # Form handler
│   │   └── faculty/
│   │       └── +page.svelte     # Faculty page
│   ├── app.html                 # HTML template
│   └── app.css                  # Global styles + Tailwind
├── static/                      # Static assets
├── package.json                 # Dependencies
├── tailwind.config.js          # Tailwind configuration
├── svelte.config.js            # SvelteKit config
└── vite.config.ts              # Vite config
```

## Common Development Tasks

### Editing Content

**Homepage:**
- Edit `src/routes/+page.svelte`

**Faculty Page:**
- Edit faculty data in `src/lib/data/faculty.ts`
- Edit layout in `src/routes/faculty/+page.svelte`

**Application Form:**
- Edit form fields in `src/routes/apply/+page.svelte`
- Edit submission handler in `src/routes/apply/+page.server.ts`

### Updating Styles

**Global styles:**
- Edit `src/app.css` for Tailwind utilities and custom classes

**Component styles:**
- Use Tailwind classes directly in Svelte components
- Modify `tailwind.config.js` for theme customization

**Colors:**
```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      primary: '#1e40af',      // Main blue
      'primary-light': '#3b82f6',
      'primary-dark': '#1e3a8a'
    }
  }
}
```

### Adding New Pages

1. Create a new folder in `src/routes/`
2. Add `+page.svelte` file
3. The route is automatically available at `/folder-name`

Example:
```bash
# Create blog page
mkdir src/routes/blog
touch src/routes/blog/+page.svelte
# Now accessible at /blog
```

### Testing the Build

Before deploying, always test the production build:

```bash
npm run build
npm run preview
```

This builds the site and serves it locally at `http://localhost:4173`

## Troubleshooting

### Port Already in Use

If port 5173 is already in use:
```bash
# Kill the process using the port
lsof -ti:5173 | xargs kill -9

# Or run on a different port
npm run dev -- --port 3000
```

### Module Not Found Errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

```bash
# Run type checking
npm run check

# Watch mode
npm run check:watch
```

### Styles Not Updating

1. Clear browser cache (Cmd+Shift+R / Ctrl+Shift+R)
2. Restart dev server
3. Check Tailwind config is correct

## VS Code Setup (Recommended)

Install these extensions:
- **Svelte for VS Code** - Syntax highlighting and IntelliSense
- **Tailwind CSS IntelliSense** - Class name autocomplete
- **Prettier** - Code formatting

`.vscode/settings.json` (create this file):
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[svelte]": {
    "editor.defaultFormatter": "svelte.svelte-vscode"
  }
}
```

## Updating Faculty Data

Edit `src/lib/data/faculty.ts`:

```typescript
{
  id: 9, // Increment ID
  name: 'Dr. New Faculty',
  title: 'Assistant Professor',
  credentials: 'MD, FACEP',
  institution: 'Harvard Medical School',
  bio: 'Short bio here...',
  specialties: ['Emergency Medicine', 'POCUS'],
  imageUrl: 'https://images.unsplash.com/...'
}
```

## Database Schema (Airtable)

If using Airtable, your table should have these fields:

| Field Name | Type | Options |
|------------|------|---------|
| Full Name | Single line text | - |
| Email | Email | - |
| Phone | Phone | - |
| Country | Single line text | - |
| Medical Specialty | Single select | Anesthesiology, Cardiology, Critical Care, etc. |
| Ultrasound Experience Level | Single select | Beginner, Intermediate, Advanced |
| Status | Single select | New, Under Review, Accepted, Rejected |

See `DEPLOYMENT.md` for complete field list.

## Getting Help

- **SvelteKit Issues:** [kit.svelte.dev](https://kit.svelte.dev/)
- **Tailwind Help:** [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **TypeScript Errors:** Check the console and type definitions

## Next Steps

1. Familiarize yourself with SvelteKit routing
2. Customize the content and styles
3. Set up Airtable (see DEPLOYMENT.md)
4. Deploy to Vercel (see DEPLOYMENT.md)

Happy coding! 🚀
