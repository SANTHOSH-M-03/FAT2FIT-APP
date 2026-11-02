# CoreFit - Fitness Tracking Application

A comprehensive fitness tracking application built with React, TypeScript, and Firebase. Track your workouts, nutrition, progress, and connect with a fitness community.

## Features

### 🏠 Dashboard
- Personalized greeting and daily overview
- Fitness journey hero banner
- Key metrics: calories, workouts, weight, goals
- Today's workout and nutrition plan
- Activity streak calendar
- Body progress charts
- Body composition tracking

### 💪 Workouts
- Pre-built workout programs (Muscle Building, Fat Loss, Strength Training)
- Exercise library with detailed instructions
- Track sets, reps, and progress
- Workout history and statistics

### 🍽️ Diet & Nutrition
- Daily meal logging (Breakfast, Lunch, Dinner, Snacks)
- Macronutrient tracking (Protein, Carbs, Fats)
- Calorie goal management
- Hydration tracking
- Meal timing and suggestions

### 📊 Progress Tracking
- Weight progress with charts
- Body measurements tracking
- Workout frequency analytics
- Milestone achievements
- Goal progress visualization

### 📅 Plans & Programs
- 8-16 week structured programs
- Goal-based workout plans
- Progress tracking per program
- Weekly workout schedules

### 🏆 Challenges
- Community fitness challenges
- Leaderboards and rankings
- Points and rewards system
- Active and upcoming challenges

### 👥 Community
- Social feed for sharing progress
- Like, comment, and share posts
- Community leaderboard
- Member profiles and stats

### 🤖 AI Coach
- 24/7 AI-powered fitness guidance
- Personalized workout plans
- Nutrition recommendations
- Form analysis and tips
- Real-time chat support

### ⚙️ Settings
- Profile management
- Notification preferences
- Theme customization (Light/Dark/Auto)
- Privacy and security settings
- Language preferences

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Routing**: React Router DOM v7
- **Styling**: Tailwind CSS v4
- **Charts**: Recharts
- **Icons**: Lucide React
- **Backend**: Firebase (Authentication, Realtime Database)
- **Build Tool**: Vite
- **Date Utilities**: date-fns

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Firebase account

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd COREFIT-APP
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:

Create a `.env` file in the root directory with your Firebase credentials:

```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
VITE_FIREBASE_DATABASE_URL=your_database_url_here
VITE_FIREBASE_PROJECT_ID=your_project_id_here
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
VITE_FIREBASE_APP_ID=your_app_id_here
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id_here
```

Use `.env.example` as a reference.

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173/` (or another port if 5173 is in use).

### Build

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── pages/              # Page components
│   ├── Dashboard.tsx   # Main dashboard
│   ├── Activity.tsx    # Activity tracking
│   ├── Workouts.tsx    # Workout management
│   ├── Diet.tsx        # Nutrition tracking
│   ├── Progress.tsx    # Progress analytics
│   ├── Plans.tsx       # Workout programs
│   ├── Challenges.tsx  # Community challenges
│   ├── Community.tsx   # Social features
│   ├── AICoach.tsx     # AI assistant
│   └── Settings.tsx    # User settings
├── components/
│   └── Layout.tsx      # Main layout with sidebar
├── firebase.ts         # Firebase configuration
├── UserInputForm.tsx   # Initial user setup
├── App.tsx            # Main app component
└── main.tsx           # Entry point
```

## Features by Page

### Dashboard
- Daily calorie and workout tracking
- Quick stats cards
- Today's plan overview
- Nutrition donut chart
- Workout focus section
- Explore more modules
- Calendar with activity streak
- Body progress line chart

### Activity
- Step counter with circular progress
- Move, Exercise, Stand rings
- Activity timeline chart
- Distance and active time
- Weekly summary grid

### Workouts
- Active program display
- Exercise list with images
- Workout stats (calories, duration)
- Exercise library with filters
- Program catalog

### Diet & Nutrition
- Meal-by-meal tracking
- Nutrition goal progress bars
- Quick action buttons (Add meal, Scan, Browse recipes)
- Hydration tracker
- Meal timing overview

### Progress
- Weight loss chart with trend
- Body measurement tracking
- Workout frequency bar chart
- Milestone timeline
- Summary cards
- Goal completion percentage

## Responsive Design

The application is fully responsive and optimized for:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1440px+)

## Firebase Setup

### Quick Setup (Required for Google Sign-In)

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project: `fat2fit-4ae46`
3. Navigate to **Authentication** → **Sign-in method**
4. Enable **Google** provider:
   - Click on Google
   - Toggle "Enable"
   - Select support email
   - Click "Save"

**Detailed instructions**: See [FIREBASE_SETUP.md](./FIREBASE_SETUP.md)

## Authentication

The app includes Google Sign-In authentication:

- **Sign In**: Click "Sign in with Google" button in the header
- **User Profile**: Your name and photo appear in the navbar
- **Sign Out**: Click your profile and select "Sign Out"
- **Persistence**: User data is saved to localStorage

### Features After Sign-In:
- Personalized dashboard with your name
- Profile photo from Google account
- Activity tracking linked to your account
- Community posts with your profile

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Support

For support, email support@corefit.app or join our community forum.

---

Built with ❤️ for fitness enthusiasts worldwide.
