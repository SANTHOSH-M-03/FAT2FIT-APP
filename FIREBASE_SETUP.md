# Firebase Setup Guide

Follow these steps to set up Google Authentication for your CoreFit app:

## Step 1: Firebase Console Setup

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project: `fat2fit-4ae46` (or rename to corefit)

## Step 2: Enable Google Authentication

1. In the Firebase Console, click on **"Authentication"** in the left sidebar
2. Click on the **"Sign-in method"** tab
3. Find **"Google"** in the list of providers
4. Click on **"Google"**
5. Toggle the **"Enable"** switch to ON
6. Select a **"Support email"** from the dropdown (your email)
7. Click **"Save"**

## Step 3: Configure Authorized Domains

1. Still in the **"Sign-in method"** tab, scroll down to **"Authorized domains"**
2. Make sure these domains are listed:
   - `localhost` (for development)
   - `fat2fit-4ae46.firebaseapp.com` (your Firebase hosting domain)
   - Add your production domain if you have one

## Step 4: Test the Authentication

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Open the app in your browser: `http://localhost:5174`

3. You should see a "Sign in with Google" button in the header

4. Click it and sign in with your Google account

## Troubleshooting

### "This app isn't verified" warning
- During development, Google may show a warning
- Click "Advanced" → "Go to corefit (unsafe)"
- This is normal for apps in development

### "Popup closed by user" error
- Make sure popups are not blocked in your browser
- Try signing in again

### "auth/unauthorized-domain" error
- Add your domain to the Authorized domains list in Firebase Console
- Wait a few minutes for the changes to propagate

## Security Notes

1. **Never commit your `.env` file** - it's already in `.gitignore`
2. Keep your Firebase API keys secure
3. For production, consider:
   - Setting up Firebase Security Rules
   - Enabling App Check for abuse prevention
   - Adding reCAPTCHA for additional security

## Optional: Enable Email/Password Authentication

If you want to also allow email/password sign-in:

1. Go to Authentication → Sign-in method
2. Click on **"Email/Password"**
3. Enable the first option (Email/Password)
4. Click **"Save"**

## Next Steps

Once authentication is working:

1. User data will be automatically saved to localStorage
2. The user's name and photo will appear in the navbar
3. Users can sign out from the profile dropdown menu
4. Consider setting up Firebase Realtime Database rules for user data storage

---

**Need help?** Check the [Firebase Authentication Documentation](https://firebase.google.com/docs/auth/web/google-signin)
