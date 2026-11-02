import { Play, Clock, Flame, Search } from 'lucide-react';
import { useState } from 'react';

export default function Workouts() {
  const [activeTab, setActiveTab] = useState<'plan' | 'library' | 'programs'>('plan');

  const todayWorkout = {
    title: 'Muscle Building',
    subtitle: 'Push · Pull · Legs',
    week: 2,
    totalWeeks: 12,
    day: 'Today: Push',
    exercises: [
      { name: 'Bench Press', sets: 4, reps: 8, image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=100&h=100&fit=crop' },
      { name: 'Overhead Press', sets: 4, reps: 8, image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=100&h=100&fit=crop' },
      { name: 'Incline Dumbbell Press', sets: 3, reps: 10, image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop' },
      { name: 'Lateral Raises', sets: 3, reps: 12, image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=100&h=100&fit=crop' },
      { name: 'Tricep Pushdowns', sets: 3, reps: 12, image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=100&h=100&fit=crop' },
    ]
  };

  const workoutPrograms = [
    {
      title: 'Build Muscle',
      subtitle: '12-Week Program',
      duration: '60-90 min/session',
      level: 'Intermediate',
      gradient: 'from-blue-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=200&fit=crop'
    },
    {
      title: 'Fat Loss',
      subtitle: '8-Week Program',
      duration: '45-60 min/session',
      level: 'All Levels',
      gradient: 'from-orange-500 to-red-500',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=200&fit=crop'
    },
    {
      title: 'Strength Training',
      subtitle: '16-Week Program',
      duration: '90 min/session',
      level: 'Advanced',
      gradient: 'from-purple-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=200&fit=crop'
    },
  ];

  const exerciseLibrary = [
    { name: 'Bench Press', muscle: 'Chest', difficulty: 'Intermediate', image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=100&h=100&fit=crop' },
    { name: 'Squats', muscle: 'Legs', difficulty: 'Intermediate', image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=100&h=100&fit=crop' },
    { name: 'Deadlift', muscle: 'Back', difficulty: 'Advanced', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=100&h=100&fit=crop' },
    { name: 'Shoulder Press', muscle: 'Shoulders', difficulty: 'Beginner', image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=100&h=100&fit=crop' },
    { name: 'Pull-ups', muscle: 'Back', difficulty: 'Intermediate', image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=100&h=100&fit=crop' },
    { name: 'Bicep Curls', muscle: 'Arms', difficulty: 'Beginner', image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=100&h=100&fit=crop' },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-1">Workout</h1>
        <p className="text-gray-600">Train smart, build muscle and stay consistent.</p>
      </div>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab('plan')}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            activeTab === 'plan' ? 'bg-green-600 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
          }`}
        >
          Plan
        </button>
        <button
          onClick={() => setActiveTab('library')}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            activeTab === 'library' ? 'bg-green-600 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
          }`}
        >
          Library
        </button>
        <button
          onClick={() => setActiveTab('programs')}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            activeTab === 'programs' ? 'bg-green-600 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
          }`}
        >
          Programs
        </button>
      </div>

      {activeTab === 'plan' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white mb-6 relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=400&fit=crop"
                alt="Workout"
                className="absolute inset-0 w-full h-full object-cover opacity-30"
              />
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-2">{todayWorkout.title}</h2>
                <p className="text-white/80 mb-1">{todayWorkout.subtitle}</p>
                <p className="text-sm text-white/60 mb-6">Week {todayWorkout.week} / {todayWorkout.totalWeeks}</p>
                <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-green-700 transition-colors">
                  <Play className="w-5 h-5" />
                  Start Today's Workout
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{todayWorkout.day}</h3>
                <span className="text-sm text-gray-500">Day 1 of 3</span>
              </div>
              <div className="space-y-3">
                {todayWorkout.exercises.map((exercise, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer group">
                    <img src={exercise.image} alt={exercise.name} className="w-16 h-16 rounded-lg object-cover" />
                    <div className="flex-1">
                      <div className="font-semibold">{exercise.name}</div>
                      <div className="text-sm text-gray-500">{exercise.sets} sets × {exercise.reps} reps</div>
                    </div>
                    <button className="p-3 bg-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="w-5 h-5 text-green-600" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Workout Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                      <Flame className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Avg Calories</div>
                      <div className="font-bold">425 kcal</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Avg Duration</div>
                      <div className="font-bold">65 min</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Weekly Progress</h3>
              <div className="space-y-3">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, idx) => (
                  <div key={day} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{day}</span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      idx < 4 ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-400'
                    }`}>
                      {idx < 4 ? '✓' : '-'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'library' && (
        <div>
          <div className="mb-6">
            <div className="relative max-w-xl">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search exercises..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {exerciseLibrary.map((exercise, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <img src={exercise.image} alt={exercise.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold mb-1">{exercise.name}</h3>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">{exercise.muscle}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      exercise.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                      exercise.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {exercise.difficulty}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'programs' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workoutPrograms.map((program, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className={`h-48 bg-gradient-to-br ${program.gradient} relative`}>
                <img src={program.image} alt={program.title} className="w-full h-full object-cover opacity-60" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{program.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{program.subtitle}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="font-medium">{program.level}</span>
                  </div>
                </div>
                <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Start Program
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
