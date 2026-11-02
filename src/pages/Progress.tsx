import { TrendingUp, TrendingDown, Calendar, Camera, Weight, Ruler, Target } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

export default function Progress() {
  const weightData = [
    { date: 'Sep 1', weight: 76.5 },
    { date: 'Sep 15', weight: 76.0 },
    { date: 'Oct 1', weight: 75.4 },
    { date: 'Oct 15', weight: 75.0 },
    { date: 'Oct 29', weight: 74.5 },
    { date: 'Nov 2', weight: 74.2 },
  ];

  const workoutData = [
    { week: 'W1', count: 3 },
    { week: 'W2', count: 4 },
    { week: 'W3', count: 5 },
    { week: 'W4', count: 4 },
    { week: 'W5', count: 5 },
    { week: 'W6', count: 4 },
  ];

  const bodyMeasurements = [
    { part: 'Chest', current: 102, previous: 104, unit: 'cm', change: -2 },
    { part: 'Waist', current: 86, previous: 90, unit: 'cm', change: -4 },
    { part: 'Hips', current: 98, previous: 101, unit: 'cm', change: -3 },
    { part: 'Arms', current: 36, previous: 35, unit: 'cm', change: 1 },
    { part: 'Thighs', current: 58, previous: 60, unit: 'cm', change: -2 },
  ];

  const milestones = [
    { date: 'Nov 2, 2026', title: 'Lost 2 kg this month', icon: Weight, color: 'bg-green-500' },
    { date: 'Oct 28, 2026', title: 'Completed 20 workouts', icon: Target, color: 'bg-purple-500' },
    { date: 'Oct 15, 2026', title: '7-day activity streak', icon: TrendingUp, color: 'bg-orange-500' },
    { date: 'Oct 1, 2026', title: 'Hit weight goal milestone', icon: Weight, color: 'bg-blue-500' },
  ];

  const currentWeight = 74.2;
  const goalWeight = 68;
  const startWeight = 76.5;
  const totalLoss = startWeight - currentWeight;
  const remaining = currentWeight - goalWeight;
  const progress = ((startWeight - currentWeight) / (startWeight - goalWeight)) * 100;

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-1">Progress</h1>
        <p className="text-gray-600">Track your transformation journey</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Weight Progress</h2>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Calendar className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Camera className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-green-50 rounded-xl p-4">
                <div className="text-sm text-gray-600 mb-1">Current</div>
                <div className="text-2xl font-bold text-green-700">{currentWeight} kg</div>
              </div>
              <div className="bg-blue-50 rounded-xl p-4">
                <div className="text-sm text-gray-600 mb-1">Goal</div>
                <div className="text-2xl font-bold text-blue-700">{goalWeight} kg</div>
              </div>
              <div className="bg-purple-50 rounded-xl p-4">
                <div className="text-sm text-gray-600 mb-1">To Go</div>
                <div className="text-2xl font-bold text-purple-700">{remaining.toFixed(1)} kg</div>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Progress to Goal</span>
                <span className="text-sm font-semibold text-green-600">{progress.toFixed(1)}%</span>
              </div>
              <div className="bg-gray-200 rounded-full h-3">
                <div className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
              </div>
            </div>

            <div className="h-80 mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={weightData}>
                  <XAxis dataKey="date" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" domain={[66, 78]} />
                  <Tooltip />
                  <Line type="monotone" dataKey="weight" stroke="#10b981" strokeWidth={3} dot={{ fill: '#10b981', r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-green-600">
                <TrendingDown className="w-4 h-4" />
                <span className="font-semibold">Lost {totalLoss.toFixed(1)} kg in 2 months</span>
              </div>
              <div className="text-gray-500">Start: {startWeight} kg</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <h2 className="text-xl font-bold mb-6">Workout Frequency</h2>
            <div className="h-64 mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={workoutData}>
                  <XAxis dataKey="week" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip />
                  <Bar dataKey="count" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="text-center">
              <span className="text-sm text-gray-600">Average </span>
              <span className="text-lg font-bold text-purple-600">4.2 workouts</span>
              <span className="text-sm text-gray-600"> per week</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Body Measurements</h2>
              <button className="text-sm text-green-600 font-medium hover:underline">Update</button>
            </div>
            <div className="space-y-4">
              {bodyMeasurements.map((measurement) => (
                <div key={measurement.part} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <Ruler className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">{measurement.part}</div>
                      <div className="text-sm text-gray-500">
                        {measurement.current} {measurement.unit} 
                        <span className="mx-2">→</span>
                        {measurement.previous} {measurement.unit}
                      </div>
                    </div>
                  </div>
                  <div className={`flex items-center gap-1 font-semibold ${
                    measurement.change < 0 ? 'text-green-600' : 'text-blue-600'
                  }`}>
                    {measurement.change < 0 ? <TrendingDown className="w-4 h-4" /> : <TrendingUp className="w-4 h-4" />}
                    <span>{Math.abs(measurement.change)} {measurement.unit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Summary</h3>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Weight className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-green-900">Weight Loss</span>
                </div>
                <div className="text-2xl font-bold text-green-700">{totalLoss.toFixed(1)} kg</div>
                <div className="text-sm text-green-600">in 2 months</div>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Target className="w-5 h-5 text-purple-600" />
                  <span className="font-semibold text-purple-900">Workouts</span>
                </div>
                <div className="text-2xl font-bold text-purple-700">25</div>
                <div className="text-sm text-purple-600">completed</div>
              </div>

              <div className="p-4 bg-orange-50 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="w-5 h-5 text-orange-600" />
                  <span className="font-semibold text-orange-900">Streak</span>
                </div>
                <div className="text-2xl font-bold text-orange-700">7 days</div>
                <div className="text-sm text-orange-600">current</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Milestones</h3>
            <div className="space-y-4">
              {milestones.map((milestone, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className={`w-10 h-10 rounded-full ${milestone.color} flex items-center justify-center flex-shrink-0`}>
                    <milestone.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">{milestone.title}</div>
                    <div className="text-xs text-gray-500">{milestone.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl p-6 text-white">
            <div className="text-center">
              <div className="text-5xl mb-2">🎯</div>
              <h3 className="text-xl font-bold mb-2">Keep Going!</h3>
              <p className="text-white/90 text-sm mb-4">
                You're {progress.toFixed(0)}% of the way to your goal. Stay consistent and you'll get there!
              </p>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                <div className="text-sm text-white/80 mb-1">Estimated Goal Date</div>
                <div className="text-lg font-bold">January 2027</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
