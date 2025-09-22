# Authentication Setup Guide

## OAuth Provider Setup

### Google OAuth Setup

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API
4. Go to "Credentials" → "Create Credentials" → "OAuth client ID"
5. Configure the OAuth consent screen
6. Select "Web application" as the application type
7. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (for development)
   - `https://yourdomain.com/api/auth/callback/google` (for production)
8. Copy the Client ID and Client Secret to your `.env.local` file

### GitHub OAuth Setup

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click "New OAuth App"
3. Fill in the application details:
   - Application name: "VSM Stand-up App"
   - Homepage URL: `http://localhost:3000` (or your production URL)
   - Authorization callback URL: `http://localhost:3000/api/auth/callback/github`
4. Click "Register application"
5. Copy the Client ID and generate a Client Secret
6. Add both to your `.env.local` file

## Environment Variables Setup

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Fill in your OAuth credentials in `.env.local`:
   ```env
   NEXTAUTH_SECRET=your-random-secret-here
   NEXTAUTH_URL=http://localhost:3000
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   GITHUB_CLIENT_ID=your-github-client-id
   GITHUB_CLIENT_SECRET=your-github-client-secret
   ```

3. Generate a secure NextAuth secret:
   ```bash
   openssl rand -base64 32
   ```

## Testing Authentication

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:3000`
3. You should be redirected to the sign-in page
4. Test both Google and GitHub authentication
5. After successful login, you should be redirected to the dashboard

## Features Implemented

✅ **OAuth login (Google/GitHub) works**
- Users can sign in with their Google or GitHub accounts
- OAuth providers are properly configured with NextAuth.js

✅ **User cannot access dashboard without login**
- Middleware protects all routes except authentication pages
- Unauthenticated users are redirected to sign-in page

✅ **Logged-in user sees only their editable entries**
- Users can only edit and delete their own standup entries
- Other users' entries are displayed as read-only
- User data is sourced from authenticated session

## Production Deployment

For production deployment:

1. Update `NEXTAUTH_URL` to your production domain
2. Update OAuth redirect URIs in Google and GitHub to match your production URLs
3. Use a secure random string for `NEXTAUTH_SECRET`
4. Ensure all environment variables are properly set in your hosting platform