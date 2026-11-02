# CoreFit App - Data Structure

## Overview
The app now uses **real data from localStorage** instead of hardcoded demo values. All data is user-generated and persists across sessions.

## LocalStorage Keys

### User Profile
- `userName` - User's name (from Google auth or form)
- `currentWeight` - Current weight in kg
- `goalWeight` - Target weight in kg
- `startWeight` - Starting weight (for progress calculation)
- `age` - User's age
- `height` - Height in cm
- `gender` - 'male' or 'female'

### Activity Data
- `todayCalories` - Calories consumed today (number)
- `calorieGoal` - Daily calorie target (number, default: 2500)
- `weekWorkouts` - Number of workouts completed this week (0-7)
- `activityStreak` - Current activity streak in days (number)

### Nutrition Data
- `todayProtein` - Protein consumed today in grams
- `todayCarbs` - Carbs consumed today in grams
- `todayFats` - Fats consumed today in grams

### Progress Data
- `weightHistory` - JSON array of weight entries:
  ```json
  [
    { "date": "Nov 2", "weight": 74.2 },
    { "date": "Nov 9", "weight": 73.5 }
  ]
  ```

### Plans & Workouts
- `todaysPlan` - JSON array of today's tasks:
  ```json
  [
    {
      "id": 1,
      "name": "Morning Walk",
      "duration": "30 min",
      "calories": 180,
      "completed": true
    }
  ]
  ```

- `todaysWorkouts` - JSON array of scheduled workouts:
  ```json
  [
    {
      "name": "Bench Press",
      "sets": "4 sets",
      "reps": "8 reps",
      "image": "https://..."
    }
  ]
  ```

### Authentication
- `userDataSubmitted` - 'true' if user completed initial form

## How Data Flows

### 1. Initial Setup (UserInputForm)
When user completes the form:
```javascript
localStorage.setItem('userName', 'User');
localStorage.setItem('currentWeight', '70');
localStorage.setItem('goalWeight', '68');
localStorage.setItem('startWeight', '70');
localStorage.setItem('userDataSubmitted', 'true');
```

### 2. Google Sign-In
When user signs in with Google:
```javascript
localStorage.setItem('userName', user.displayName);
// Profile photo comes from user.photoURL
```

### 3. Dashboard Display
Dashboard reads from localStorage:
```javascript
const currentWeight = localStorage.getItem('currentWeight') || '70';
const todayCalories = localStorage.getItem('todayCalories') || '0';
```

### 4. Empty States
When no data exists:
- Shows "No plans for today" with "Add your first plan" button
- Shows "No workouts scheduled" with "Browse workout library" button
- Weight chart shows "No weight data yet"

## Data Updates

### Adding Weight Entry
```javascript
const weightHistory = JSON.parse(localStorage.getItem('weightHistory') || '[]');
weightHistory.push({
  date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
  weight: 72.5
});
localStorage.setItem('weightHistory', JSON.stringify(weightHistory));
```

### Logging Workout
```javascript
const weekWorkouts = parseInt(localStorage.getItem('weekWorkouts') || '0');
localStorage.setItem('weekWorkouts', String(weekWorkouts + 1));
```

### Logging Meal
```javascript
const todayCalories = parseInt(localStorage.getItem('todayCalories') || '0');
const todayProtein = parseInt(localStorage.getItem('todayProtein') || '0');

localStorage.setItem('todayCalories', String(todayCalories + mealCalories));
localStorage.setItem('todayProtein', String(todayProtein + mealProtein));
```

### Completing Task
```javascript
const todaysPlan = JSON.parse(localStorage.getItem('todaysPlan') || '[]');
const updated = todaysPlan.map(task => 
  task.id === taskId ? { ...task, completed: true } : task
);
localStorage.setItem('todaysPlan', JSON.stringify(updated));
```

## Progress Calculations

### Weight Loss
```javascript
const startWeight = parseFloat(localStorage.getItem('startWeight'));
const currentWeight = parseFloat(localStorage.getItem('currentWeight'));
const totalLoss = startWeight - currentWeight;
```

### Goal Progress
```javascript
const goalWeight = parseFloat(localStorage.getItem('goalWeight'));
const remaining = currentWeight - goalWeight;
const progress = ((startWeight - currentWeight) / (startWeight - goalWeight)) * 100;
```

### Calorie Progress
```javascript
const todayCalories = parseInt(localStorage.getItem('todayCalories') || '0');
const calorieGoal = parseInt(localStorage.getItem('calorieGoal') || '2500');
const percentage = (todayCalories / calorieGoal) * 100;
```

## Future: Firebase Integration

To persist data across devices, migrate to Firebase Realtime Database:

```javascript
// Structure in Firebase
{
  users: {
    [uid]: {
      profile: {
        name, weight, goal, startWeight, age, height, gender
      },
      activity: {
        todayCalories, weekWorkouts, activityStreak
      },
      nutrition: {
        todayProtein, todayCarbs, todayFats
      },
      weightHistory: [
        { date, weight }
      ],
      plans: [
        { id, name, completed }
      ],
      workouts: [
        { name, sets, reps }
      ]
    }
  }
}
```

## Resetting Data

To clear all user data:
```javascript
localStorage.clear();
// Or selectively:
localStorage.removeItem('weightHistory');
localStorage.removeItem('todaysPlan');
```

## Default Values

When data doesn't exist:
- `currentWeight`: 70 kg
- `goalWeight`: 68 kg
- `calorieGoal`: 2500 kcal
- `weekWorkouts`: 0
- `todayCalories`: 0
- `activityStreak`: 0
- `todayProtein`: 0 g
- `todayCarbs`: 0 g
- `todayFats`: 0 g

## Example: Complete User Data

```json
{
  "userName": "John",
  "currentWeight": "74.2",
  "goalWeight": "68",
  "startWeight": "76.5",
  "age": "28",
  "height": "175",
  "gender": "male",
  "todayCalories": "1850",
  "calorieGoal": "2500",
  "weekWorkouts": "3",
  "activityStreak": "7",
  "todayProtein": "120",
  "todayCarbs": "210",
  "todayFats": "65",
  "weightHistory": "[{\"date\":\"Nov 2\",\"weight\":74.2}]",
  "todaysPlan": "[{\"id\":1,\"name\":\"Morning Walk\",\"completed\":true}]",
  "todaysWorkouts": "[{\"name\":\"Bench Press\",\"sets\":\"4 sets\",\"reps\":\"8 reps\"}]",
  "userDataSubmitted": "true"
}
```

---

**All demo data has been removed. The app now uses real, user-generated data!**
