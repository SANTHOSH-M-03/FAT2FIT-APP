import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Activity from './pages/Activity';
import Workouts from './pages/Workouts';
import Diet from './pages/Diet';
import Progress from './pages/Progress';
import Plans from './pages/Plans';
import Challenges from './pages/Challenges';
import Community from './pages/Community';
import AICoach from './pages/AICoach';
import Settings from './pages/Settings';
import UserInputForm from './UserInputForm';

interface UserData {
  age: number;
  gender: 'male' | 'female';
  weight: number;
  height: number;
  activityLevel: number;
  goal: 'build' | 'lose' | 'maintain';
  dietPreference: 'veg' | 'nonveg';
  stepGoal: number;
  sleepSchedule: {
    bedtime: string;
    wakeUp: string;
    hours: number;
  };
}

function App() {
  const [userDataSubmitted, setUserDataSubmitted] = useState(
    localStorage.getItem('userDataSubmitted') === 'true'
  );
  
  const [userData, setUserData] = useState<UserData>({
    age: 25,
    gender: 'male',
    weight: 70,
    height: 170,
    activityLevel: 1.55,
    goal: 'maintain',
    dietPreference: 'nonveg',
    stepGoal: 10000,
    sleepSchedule: {
      bedtime: '23:00',
      wakeUp: '07:00',
      hours: 8,
    },
  });

  const handleCalculate = () => {
    localStorage.setItem('userName', 'User');
    localStorage.setItem('currentWeight', String(userData.weight));
    localStorage.setItem('goalWeight', String(userData.goal === 'lose' ? userData.weight - 10 : userData.goal === 'build' ? userData.weight + 5 : userData.weight));
    localStorage.setItem('userDataSubmitted', 'true');
    setUserDataSubmitted(true);
  };

  if (!userDataSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">Welcome to CoreFit</h1>
            <p className="text-gray-400">Let's personalize your fitness journey</p>
          </div>
          <UserInputForm
            userData={userData}
            setUserData={setUserData}
            onCalculate={handleCalculate}
          />
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="activity" element={<Activity />} />
          <Route path="workouts" element={<Workouts />} />
          <Route path="diet" element={<Diet />} />
          <Route path="progress" element={<Progress />} />
          <Route path="plans" element={<Plans />} />
          <Route path="challenges" element={<Challenges />} />
          <Route path="community" element={<Community />} />
          <Route path="ai-coach" element={<AICoach />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
