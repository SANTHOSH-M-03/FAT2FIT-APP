import { Flame, MapPin, Clock, Dumbbell, PersonStanding } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { format, addDays, startOfWeek } from 'date-fns';

export default function Activity() {
  const currentDate = new Date();
  const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 });
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));
  
  const activityData = [
    { time: '6am', steps: 2000 },
    { time: '9am', steps: 3500 },
    { time: '12pm', steps: 5200 },
    { time: '3pm', steps: 6800 },
    { time: '6pm', steps: 8420 },
    { time: '9pm', steps: 8420 },
  ];

  const activities = [
    {
      type: 'Move',
      current: 2146,
      goal: 3072,
      unit: 'kcal',
      percentage: 70,
      color: 'from-red-400 to-orange-400',
      icon: Flame
    },
    {
      type: 'Exercise',
      current: 43,
      goal: 60,
      unit: 'min',
      percentage: 72,
      color: 'from-green-400 to-teal-400',
      icon: Dumbbell
    },
    {
      type: 'Stand',
      current: 7,
      goal: 12,
      unit: 'hr',
      percentage: 58,
      color: 'from-purple-400 to-pink-400',
      icon: PersonStanding
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-1">Activity</h1>
        <p className="text-gray-600">Track your daily movement and progress</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold">Today</h2>
              <p className="text-sm text-gray-500">{format(currentDate, 'EEEE, MMM d')}</p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium">Day</button>
              <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-200">Week</button>
              <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-200">Month</button>
            </div>
          </div>

          <div className="relative w-80 h-80 mx-auto mb-6">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="160" cy="160" r="140" stroke="#f3f4f6" strokeWidth="20" fill="none" />
              
              <circle cx="160" cy="160" r="140" stroke="url(#gradient1)" strokeWidth="20" fill="none"
                strokeDasharray="880" strokeDashoffset="264" strokeLinecap="round" />
              
              <circle cx="160" cy="160" r="110" stroke="#f3f4f6" strokeWidth="20" fill="none" />
              <circle cx="160" cy="160" r="110" stroke="url(#gradient2)" strokeWidth="20" fill="none"
                strokeDasharray="691" strokeDashoffset="194" strokeLinecap="round" />
              
              <circle cx="160" cy="160" r="80" stroke="#f3f4f6" strokeWidth="20" fill="none" />
              <circle cx="160" cy="160" r="80" stroke="url(#gradient3)" strokeWidth="20" fill="none"
                strokeDasharray="503" strokeDashoffset="211" strokeLinecap="round" />
              
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f87171" />
                  <stop offset="100%" stopColor="#fb923c" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#34d399" />
                  <stop offset="100%" stopColor="#14b8a6" />
                </linearGradient>
                <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#c084fc" />
                  <stop offset="100%" stopColor="#f472b6" />
                </linearGradient>
              </defs>
            </svg>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-6xl font-bold">8,420</div>
              <div className="text-gray-500 text-sm">Steps</div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            {activities.map((activity) => (
              <div key={activity.type} className="text-center">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${activity.color} flex items-center justify-center mx-auto mb-2`}>
                  <activity.icon className="w-6 h-6 text-white" />
                </div>
                <div className="font-bold text-lg">{activity.current}</div>
                <div className="text-xs text-gray-500">{activity.goal} {activity.unit}</div>
                <div className="text-xs font-medium text-gray-700">{activity.percentage}%</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <Flame className="w-6 h-6 text-orange-500 mx-auto mb-1" />
              <div className="text-2xl font-bold">2,146</div>
              <div className="text-xs text-gray-500">kcal</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <MapPin className="w-6 h-6 text-blue-500 mx-auto mb-1" />
              <div className="text-2xl font-bold">6.2 km</div>
              <div className="text-xs text-gray-500">Distance</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <Clock className="w-6 h-6 text-purple-500 mx-auto mb-1" />
              <div className="text-2xl font-bold">4.3 min</div>
              <div className="text-xs text-gray-500">Active Time</div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Steps Progress</h3>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={activityData}>
                  <Line type="monotone" dataKey="steps" stroke="#10b981" strokeWidth={3} dot={{ fill: '#10b981', r: 5 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              {activityData.map((point) => (
                <span key={point.time}>{point.time}</span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Activity Goals</h3>
            <div className="space-y-4">
              {activities.map((activity) => (
                <div key={activity.type}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${activity.color} flex items-center justify-center`}>
                        <activity.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">{activity.type}</div>
                        <div className="text-xs text-gray-500">{activity.current} / {activity.goal} {activity.unit}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg">{activity.percentage}%</div>
                    </div>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2">
                    <div className={`bg-gradient-to-r ${activity.color} h-2 rounded-full transition-all duration-500`} style={{ width: `${activity.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Weekly Summary</h3>
            <div className="grid grid-cols-7 gap-2">
              {weekDays.map((day, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-xs text-gray-500 mb-2">{format(day, 'EEE')}</div>
                  <div className={`w-full aspect-square rounded-lg flex items-center justify-center text-xs font-semibold ${
                    idx < 5 ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-400'
                  }`}>
                    {idx < 5 ? '✓' : '-'}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">{idx < 5 ? '8.4k' : '0'}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
