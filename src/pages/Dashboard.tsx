import { Play, ChevronRight, Flame, Dumbbell, Weight, Target, Trophy, LayersIcon, TrendingUp, UtensilsCrossed, Users, BookOpen } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default function Dashboard() {
  const [userName, setUserName] = useState('User');
  const [currentWeight, setCurrentWeight] = useState(70);
  const [goalWeight, setGoalWeight] = useState(68);
  const [bodyProgressData, setBodyProgressData] = useState<Array<{ date: string; weight: number }>>([]);
  const [todayCalories, setTodayCalories] = useState(0);
  const [weekWorkouts, setWeekWorkouts] = useState(0);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.displayName) {
        setUserName(user.displayName.split(' ')[0]);
      } else {
        setUserName(localStorage.getItem('userName') || 'User');
      }
    });
    
    // Load user data from localStorage
    const savedWeight = parseFloat(localStorage.getItem('currentWeight') || '70');
    const savedGoal = parseFloat(localStorage.getItem('goalWeight') || '68');
    const savedCalories = parseInt(localStorage.getItem('todayCalories') || '0');
    const savedWorkouts = parseInt(localStorage.getItem('weekWorkouts') || '0');
    
    setCurrentWeight(savedWeight);
    setGoalWeight(savedGoal);
    setTodayCalories(savedCalories);
    setWeekWorkouts(savedWorkouts);
    
    // Initialize start weight if not set
    if (!localStorage.getItem('startWeight')) {
      localStorage.setItem('startWeight', String(savedWeight));
    }
    
    // Load weight history
    const savedHistory = localStorage.getItem('weightHistory');
    if (savedHistory) {
      setBodyProgressData(JSON.parse(savedHistory));
    } else {
      // Initialize with current weight only
      const today = new Date();
      const initialData = [{
        date: today.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        weight: savedWeight
      }];
      setBodyProgressData(initialData);
      localStorage.setItem('weightHistory', JSON.stringify(initialData));
    }
    
    return () => unsubscribe();
  }, []);
  
  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const currentDay = new Date().getDay();
  
  const startWeight = parseFloat(localStorage.getItem('startWeight') || String(currentWeight));
  const totalLoss = Math.max(0, startWeight - currentWeight);
  const progress = startWeight > goalWeight && totalLoss > 0 ? Math.min(100, ((startWeight - currentWeight) / (startWeight - goalWeight)) * 100) : 0;

  const todaysPlan = JSON.parse(localStorage.getItem('todaysPlan') || '[]');
  const workouts = JSON.parse(localStorage.getItem('todaysWorkouts') || '[]');

  const exploreCards = [
    { icon: Trophy, title: 'Challenges', subtitle: 'Join & stay motivated', color: 'from-yellow-400 to-orange-400' },
    { icon: LayersIcon, title: 'Programs', subtitle: 'Goal-based plans', color: 'from-purple-400 to-pink-400' },
    { icon: TrendingUp, title: 'Progress', subtitle: 'Track your results', color: 'from-green-400 to-teal-400' },
    { icon: UtensilsCrossed, title: 'Recipes', subtitle: 'Healthy & tasty meals', color: 'from-orange-400 to-red-400' },
    { icon: Users, title: 'Community', subtitle: 'Share & get support', color: 'from-blue-400 to-cyan-400' },
    { icon: BookOpen, title: 'Learn', subtitle: 'Fitness guides & tips', color: 'from-pink-400 to-purple-400' },
  ];

  const calorieGoal = parseInt(localStorage.getItem('calorieGoal') || '2500');

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-1">
          Hello, {userName} <span className="inline-block animate-wave">👋</span>
        </h1>
        <p className="text-gray-600">Stay consistent, stay stronger.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-2">Your Fitness Journey</h2>
              <h3 className="text-4xl font-bold mb-2 text-green-900">Stronger, Healthier, Fitter.</h3>
              <p className="text-white/90 mb-6">Personalized workouts, nutrition, and tracking — all in one place.</p>
              <div className="flex gap-3">
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-green-700 transition-colors">
                  Continue Workout <Play className="w-4 h-4" />
                </button>
                <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-white/30 transition-colors">
                  View Plan <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=400&fit=crop&q=80" 
              alt="Fitness Training" 
              className="absolute right-0 top-0 h-full w-1/2 object-cover rounded-r-2xl"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-4 border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <Flame className="w-5 h-5 text-orange-500" />
                <span className="text-2xl font-bold">{todayCalories}</span>
              </div>
              <p className="text-sm text-gray-600">kcal</p>
              <p className="text-xs text-gray-500">Today</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <Dumbbell className="w-5 h-5 text-purple-500" />
                <span className="text-2xl font-bold">{weekWorkouts} / 5</span>
              </div>
              <p className="text-sm text-gray-600">Workouts</p>
              <p className="text-xs text-gray-500">This Week</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <Weight className="w-5 h-5 text-blue-500" />
                <span className="text-2xl font-bold">{currentWeight}</span>
              </div>
              <p className="text-sm text-gray-600">kg</p>
              {totalLoss > 0 && <p className="text-xs text-green-600">↓ {totalLoss.toFixed(1)} kg</p>}
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-5 h-5 text-pink-500" />
                <span className="text-2xl font-bold">{goalWeight}</span>
              </div>
              <p className="text-sm text-gray-600">kg</p>
              <p className="text-xs text-gray-500">Goal Weight</p>
              <div className="mt-2 bg-pink-100 rounded-full h-1">
                <div className="bg-pink-500 h-1 rounded-full transition-all" style={{ width: `${progress}%` }}></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Today's Plan</h3>
                <span className="text-sm text-gray-500">{new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</span>
              </div>
              <div className="space-y-3">
                {todaysPlan.length > 0 ? todaysPlan.map((item: any) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      item.completed ? 'bg-green-500 border-green-500' : 'border-gray-300'
                    }`}>
                      {item.completed && <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">{item.name}</div>
                      <div className="text-xs text-gray-500">{item.description || item.type}</div>
                    </div>
                    {!item.completed && (
                      <button className="p-2 hover:bg-gray-100 rounded-lg">
                        <Play className="w-5 h-5 text-green-600" />
                      </button>
                    )}
                  </div>
                )) : (
                  <div className="text-center py-8 text-gray-500">
                    <p className="mb-2">No plans for today</p>
                    <button className="text-green-600 text-sm hover:underline">Add your first plan</button>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Nutrition Overview</h3>
                <span className="text-sm text-green-600 font-medium">{todayCalories} / {calorieGoal} kcal</span>
              </div>
              <div className="relative w-40 h-40 mx-auto mb-4">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="80" cy="80" r="70" stroke="#e5e7eb" strokeWidth="12" fill="none" />
                  <circle cx="80" cy="80" r="70" stroke="#10b981" strokeWidth="12" fill="none" 
                    strokeDasharray="440" strokeDashoffset={440 - (440 * todayCalories / calorieGoal)} strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold">{todayCalories}</span>
                  <span className="text-xs text-gray-500">kcal</span>
                  <span className="text-xs text-gray-500">consumed</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-sm">Protein</span>
                  </div>
                  <span className="text-sm font-medium">{localStorage.getItem('todayProtein') || '0'} g</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    <span className="text-sm">Carbs</span>
                  </div>
                  <span className="text-sm font-medium">{localStorage.getItem('todayCarbs') || '0'} g</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <span className="text-sm">Fats</span>
                  </div>
                  <span className="text-sm font-medium">{localStorage.getItem('todayFats') || '0'} g</span>
                </div>
              </div>
              <button className="w-full mt-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                <UtensilsCrossed className="w-4 h-4" />
                Log Meal
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">Workout Focus</h3>
                <p className="text-sm text-gray-500">Today's Schedule</p>
              </div>
            </div>
            <div className="space-y-3">
              {workouts.length > 0 ? workouts.map((workout: any, idx: number) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <img src={workout.image || 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=100&h=100&fit=crop'} alt={workout.name} className="w-12 h-12 rounded-lg object-cover" />
                  <div className="flex-1">
                    <div className="font-medium text-sm">{workout.name}</div>
                    <div className="text-xs text-gray-500">{workout.sets} · {workout.reps}</div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              )) : (
                <div className="text-center py-8 text-gray-500">
                  <p className="mb-2">No workouts scheduled</p>
                  <button className="text-green-600 text-sm hover:underline">Browse workout library</button>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Explore More</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {exploreCards.map((card, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div className={`bg-gradient-to-br ${card.color} rounded-xl p-6 mb-2 group-hover:scale-105 transition-transform`}>
                    <card.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="font-semibold text-sm">{card.title}</div>
                  <div className="text-xs text-gray-500">{card.subtitle}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Your Plan</h3>
              <div className="flex gap-2">
                <button className="p-1 hover:bg-gray-100 rounded"><ChevronRight className="w-4 h-4 rotate-180" /></button>
                <button className="p-1 hover:bg-gray-100 rounded"><ChevronRight className="w-4 h-4" /></button>
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-4">{new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
            <div className="grid grid-cols-7 gap-2 mb-2">
              {weekDays.map((day) => (
                <div key={day} className="text-center text-xs text-gray-500 font-medium">{day}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2">
              {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                <div key={day} className={`aspect-square rounded-lg flex items-center justify-center text-sm font-medium cursor-pointer transition-colors ${
                  day === currentDay ? 'bg-green-500 text-white' : 
                  day < currentDay ? 'bg-green-100 text-green-700' : 
                  'bg-gray-50 text-gray-400'
                }`}>
                  {day}
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <Flame className="w-5 h-5 text-orange-500" />
                <span className="font-semibold">Activity Streak</span>
                <span className="ml-auto text-lg font-bold">{localStorage.getItem('activityStreak') || '0'} Days</span>
              </div>
              <div className="flex gap-1">
                {weekDays.map((day, idx) => (
                  <div key={day} className={`flex-1 h-2 rounded-full ${
                    idx < parseInt(localStorage.getItem('activityStreak') || '0') ? 'bg-green-500' : 'bg-gray-200'
                  }`}></div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Body Progress</h3>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
            <div className="mb-4">
              <div className="text-3xl font-bold">{currentWeight} kg</div>
              {totalLoss > 0 && <div className="text-sm text-green-600 font-medium">↓ {totalLoss.toFixed(1)} kg total</div>}
            </div>
            <div className="h-32 mb-2">
              {bodyProgressData.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={bodyProgressData}>
                    <Line type="monotone" dataKey="weight" stroke="#10b981" strokeWidth={3} dot={{ fill: '#10b981', r: 4 }} />
                  </LineChart>
                </ResponsiveContainer>
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                  No weight data yet
                </div>
              )}
            </div>
            {bodyProgressData.length > 1 && (
              <div className="flex justify-between text-xs text-gray-500">
                {bodyProgressData.slice(-5).map((point) => (
                  <span key={point.date}>{point.date}</span>
                ))}
              </div>
            )}
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Body Composition</h3>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    Protein
                  </span>
                  <span className="text-sm font-medium">{localStorage.getItem('todayProtein') || '0'} g</span>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${Math.min(100, (parseInt(localStorage.getItem('todayProtein') || '0') / 160) * 100)}%` }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    Carbs
                  </span>
                  <span className="text-sm font-medium">{localStorage.getItem('todayCarbs') || '0'} g</span>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: `${Math.min(100, (parseInt(localStorage.getItem('todayCarbs') || '0') / 320) * 100)}%` }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    Fats
                  </span>
                  <span className="text-sm font-medium">{localStorage.getItem('todayFats') || '0'} g</span>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div className="bg-amber-500 h-2 rounded-full" style={{ width: `${Math.min(100, (parseInt(localStorage.getItem('todayFats') || '0') / 80) * 100)}%` }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
