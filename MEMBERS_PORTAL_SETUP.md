# Members Portal Setup Guide

## Overview
The Members Portal is a password-protected section of the FAWUS website where fellows and faculty can access exclusive program resources.

## Features
- ✅ Simple password authentication
- ✅ Session-based login (stays logged in for 7 days)
- ✅ Secure cookie-based authentication
- ✅ Integration with Google Drive for document storage
- ✅ Clean, professional interface
- ✅ Mobile responsive

## Setup Instructions

### 1. Set the Members Password

The portal uses a password stored as an environment variable for security.

**Local Development:**
Create a `.env` file in the project root:
```bash
MEMBERS_PASSWORD=your_secure_password_here
```

**Production (Vercel):**
1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add a new variable:
   - **Name:** `MEMBERS_PASSWORD`
   - **Value:** Your secure password (e.g., `FAWUS2025!Secure`)
   - **Environment:** Production, Preview, Development

**Default Password:**
If no environment variable is set, the default password is `fawus2025` (for testing only - change this!)

### 2. Configure Google Drive Integration

1. **Create a Google Drive Folder:**
   - Create a new folder in Google Drive for fellowship resources
   - Add all program documents, handbooks, recordings, etc.
   - Set sharing permissions to "Anyone with the link can view"
   - Copy the folder URL

2. **Update the Portal Link:**
   - Open `src/routes/members/+page.svelte`
   - Find line with: `href="https://drive.google.com/drive/folders/YOUR_FOLDER_ID"`
   - Replace `YOUR_FOLDER_ID` with your actual Google Drive folder URL

   Example:
   ```html
   href="https://drive.google.com/drive/folders/1a2b3c4d5e6f7g8h9i0j"
   ```

### 3. Alternative: Use Other Platforms

Instead of Google Drive, you can link to:
- **Dropbox:** `https://www.dropbox.com/sh/YOUR_SHARED_LINK`
- **Notion:** `https://notion.so/YOUR_WORKSPACE`
- **Microsoft OneDrive:** `https://onedrive.live.com/...`

Just update the link in `src/routes/members/+page.svelte`

## How It Works

### Authentication Flow
1. User visits `/members`
2. If not authenticated, shows password form
3. User enters password
4. Server validates against `MEMBERS_PASSWORD` env variable
5. If correct, sets secure cookie (`members_auth`)
6. Cookie lasts 7 days
7. User can access members area
8. Logout clears the cookie

### Security Features
- Password stored as environment variable (not in code)
- HttpOnly cookies (can't be accessed by JavaScript)
- Secure flag in production (HTTPS only)
- SameSite strict (prevents CSRF attacks)
- No indexing by search engines (`noindex` meta tag)

## Managing Access

### Changing the Password
1. Update the `MEMBERS_PASSWORD` environment variable
2. Redeploy the application (or restart in development)
3. Share new password with fellows/faculty

### Revoking Access
- Change the password
- All existing sessions remain valid for up to 7 days
- Users will need to re-login with new password

### Sharing Access
Share these details with authorized users:
- **Portal URL:** `https://your-domain.com/members`
- **Password:** [Your secure password]
- **Contact:** fellowship@winfocus.org (for access issues)

## Customization

### Adding More Resources
Edit the `resources` array in `src/routes/members/+page.svelte`:

```typescript
const resources = [
    {
        title: 'Your Resource Name',
        description: 'Brief description',
        icon: '📚', // Any emoji
        type: 'PDF' // or 'Folder', 'Excel', etc.
    },
    // ... more resources
];
```

### Changing Session Duration
In `src/routes/members/+page.server.ts`, modify the `maxAge`:

```typescript
maxAge: 60 * 60 * 24 * 7  // 7 days (in seconds)
// Change to: 60 * 60 * 24 * 30  // 30 days
```

### Styling
The portal uses the same design system as the rest of the site. Colors and styles are defined in:
- `tailwind.config.js` - Color palette
- `src/app.css` - Global styles

## Testing

### Local Testing
1. Start dev server: `npm run dev`
2. Visit: `http://localhost:5173/members`
3. Enter password (default: `fawus2025`)
4. Verify you can access the members area
5. Test logout functionality

### Production Testing
1. Deploy to Vercel
2. Set `MEMBERS_PASSWORD` environment variable
3. Visit production URL `/members`
4. Test login with correct password
5. Test incorrect password (should show error)
6. Verify Google Drive link opens correctly

## Troubleshooting

### "Invalid password" even with correct password
- Check environment variable is set correctly
- Verify no extra spaces in password
- Restart dev server or redeploy

### Cookie not persisting
- Check browser allows cookies
- Verify `secure` flag matches environment (HTTP vs HTTPS)
- Clear browser cookies and try again

### Google Drive link not working
- Verify folder sharing settings are "Anyone with link"
- Test the link in incognito/private browsing
- Check for typos in the URL

## Future Enhancements

Possible upgrades for the future:
- Individual user accounts with email/password
- Role-based access (fellows vs faculty)
- File upload directly to the site
- Progress tracking dashboard
- Email notifications for new resources
- Two-factor authentication

## Support

For questions or issues:
- **Email:** fellowship@winfocus.org
- **Technical Issues:** Contact the web developer

