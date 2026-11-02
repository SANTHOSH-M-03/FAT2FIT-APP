# Deploy CoreFit to Vercel

## Issue: Deployment Failed Due to Wrong Account

Your deployment failed because it was connected to a different Vercel account. Here's how to fix it:

## Solution: Fresh Deployment

### Step 1: Remove Old Vercel Configuration

The repository may have old Vercel settings. Let's start fresh:

```bash
# Remove any existing Vercel config (if exists)
rm -rf .vercel
```

### Step 2: Login to Correct Vercel Account

```bash
# Login to Vercel with the correct account
npx vercel login
```

This will:
1. Ask for your email
2. Send a verification email
3. Click the link to confirm

### Step 3: Deploy to Vercel

```bash
# Deploy from this directory
npx vercel
```

Follow the prompts:
- **Set up and deploy?** → Yes
- **Which scope?** → Select SANTHOSH-M-03 (or your account)
- **Link to existing project?** → No
- **Project name?** → corefit-app (or your choice)
- **Directory?** → ./ (current directory)
- **Override settings?** → No

### Step 4: Set Environment Variables

In Vercel Dashboard (https://vercel.com):

1. Go to your project
2. Click **Settings** → **Environment Variables**
3. Add these variables:

```
VITE_FIREBASE_API_KEY = AIzaSyDu0BENtN4Rs8XQpl9Q08qHBYBrzOd4uuU
VITE_FIREBASE_AUTH_DOMAIN = fat2fit-4ae46.firebaseapp.com
VITE_FIREBASE_DATABASE_URL = https://fat2fit-4ae46-default-rtdb.asia-southeast1.firebasedatabase.app
VITE_FIREBASE_PROJECT_ID = fat2fit-4ae46
VITE_FIREBASE_STORAGE_BUCKET = fat2fit-4ae46.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID = 292404299047
VITE_FIREBASE_APP_ID = 1:292404299047:web:affad0a5d07a8ea3aed502
VITE_FIREBASE_MEASUREMENT_ID = G-BSH70B7S0N
```

### Step 5: Redeploy

```bash
npx vercel --prod
```

## Alternative: Deploy via GitHub Integration

### Option 1: Automatic Deployment

1. Go to https://vercel.com/new
2. Click **Import Git Repository**
3. Select **GitHub**
4. Find: `SANTHOSH-M-03/FAT2FIT-APP`
5. Click **Import**
6. Configure:
   - **Project Name**: corefit-app
   - **Framework**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
7. Add environment variables (from Step 4 above)
8. Click **Deploy**

### Option 2: Vercel CLI with GitHub

```bash
# Link to GitHub repository
npx vercel link

# Deploy production
npx vercel --prod
```

## Troubleshooting

### Error: "Deployment belongs to another account"

**Solution**: Remove `.vercel` folder and redeploy:
```bash
rm -rf .vercel
npx vercel
```

### Error: "No Space Left on Device"

**Solution**: Clean npm cache:
```bash
npm cache clean --force
npx vercel
```

### Error: "Build Failed"

**Solution**: Check build locally first:
```bash
npm run build
# If successful, then deploy
npx vercel --prod
```

### Error: "Environment Variables Missing"

**Solution**: Add them in Vercel Dashboard:
1. Go to Settings → Environment Variables
2. Add all VITE_* variables
3. Redeploy

## After Successful Deployment

1. **Update Firebase Authorized Domains**:
   - Go to Firebase Console
   - Authentication → Settings → Authorized domains
   - Add your Vercel domain: `your-app.vercel.app`

2. **Test Your App**:
   - Visit your Vercel URL
   - Try signing in with Google
   - Test all features

3. **Set Custom Domain** (Optional):
   - Go to Vercel Dashboard
   - Settings → Domains
   - Add your custom domain

## Quick Commands

```bash
# Fresh deployment
rm -rf .vercel && npx vercel

# Production deployment
npx vercel --prod

# Check deployment status
npx vercel ls

# View logs
npx vercel logs

# Remove project (start over)
npx vercel remove corefit-app
```

## Vercel Configuration

Your `vercel.json` is already configured with:
- ✅ Vite framework detection
- ✅ SPA routing (all routes → index.html)
- ✅ Asset caching
- ✅ Environment variable references

## Expected Result

After successful deployment:
- 🌐 URL: `https://corefit-app.vercel.app` (or similar)
- ✅ Google Sign-In working
- ✅ All pages loading
- ✅ Data persistence with localStorage

---

**Need help?** Run: `npx vercel --help`

**Vercel Dashboard**: https://vercel.com/dashboard
