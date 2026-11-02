import { Trophy, Users, Flame, Calendar, Award, TrendingUp } from 'lucide-react';

export default function Challenges() {
  const activeChallenges = [
    {
      title: '30-Day Fitness Challenge',
      participants: 2847,
      daysLeft: 12,
      progress: 60,
      reward: '500 points',
      gradient: 'from-orange-400 to-red-500',
      icon: Flame,
    },
    {
      title: 'November Step Challenge',
      participants: 5234,
      daysLeft: 28,
      progress: 15,
      reward: '300 points',
      gradient: 'from-green-400 to-teal-500',
      icon: TrendingUp,
    },
  ];

  const upcomingChallenges = [
    {
      title: 'December Weight Loss Challenge',
      startsIn: '15 days',
      participants: 1234,
      duration: '30 days',
      gradient: 'from-purple-400 to-pink-500',
    },
    {
      title: 'New Year Strength Challenge',
      startsIn: '45 days',
      participants: 892,
      duration: '60 days',
      gradient: 'from-blue-400 to-cyan-500',
    },
  ];

  const completedChallenges = [
    {
      title: 'October Cardio Challenge',
      completedDate: 'Oct 31, 2026',
      rank: 247,
      totalParticipants: 3421,
      pointsEarned: 500,
    },
    {
      title: 'September Core Challenge',
      completedDate: 'Sep 30, 2026',
      rank: 189,
      totalParticipants: 2876,
      pointsEarned: 400,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-1">Challenges</h1>
        <p className="text-gray-600">Join community challenges and stay motivated</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl p-6 text-white">
          <Trophy className="w-12 h-12 mb-4" />
          <div className="text-4xl font-bold mb-1">3</div>
          <div className="text-white/90">Active Challenges</div>
        </div>

        <div className="bg-gradient-to-br from-green-400 to-teal-400 rounded-2xl p-6 text-white">
          <Award className="w-12 h-12 mb-4" />
          <div className="text-4xl font-bold mb-1">7</div>
          <div className="text-white/90">Completed</div>
        </div>

        <div className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl p-6 text-white">
          <Flame className="w-12 h-12 mb-4" />
          <div className="text-4xl font-bold mb-1">2,100</div>
          <div className="text-white/90">Total Points</div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Active Challenges</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activeChallenges.map((challenge, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className={`h-24 bg-gradient-to-br ${challenge.gradient} flex items-center justify-center`}>
                <challenge.icon className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{challenge.title}</h3>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{challenge.participants.toLocaleString()} joined</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{challenge.daysLeft} days left</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Your Progress</span>
                    <span className="text-sm font-semibold text-green-600">{challenge.progress}%</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-3">
                    <div className={`bg-gradient-to-r ${challenge.gradient} h-3 rounded-full transition-all`} style={{ width: `${challenge.progress}%` }}></div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="text-sm">
                    <span className="text-gray-600">Reward: </span>
                    <span className="font-semibold text-yellow-600">{challenge.reward}</span>
                  </div>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors">
                    Continue
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Upcoming Challenges</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingChallenges.map((challenge, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className={`h-20 bg-gradient-to-br ${challenge.gradient}`}></div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-3">{challenge.title}</h3>
                
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Starts In</div>
                    <div className="font-semibold">{challenge.startsIn}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Duration</div>
                    <div className="font-semibold">{challenge.duration}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Joined</div>
                    <div className="font-semibold">{challenge.participants}</div>
                  </div>
                </div>

                <button className="w-full bg-gray-900 text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                  Join Challenge
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Completed Challenges</h2>
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="divide-y divide-gray-200">
            {completedChallenges.map((challenge, idx) => (
              <div key={idx} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      <Trophy className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold">{challenge.title}</h3>
                      <div className="text-sm text-gray-600">{challenge.completedDate}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600 mb-1">Rank #{challenge.rank} of {challenge.totalParticipants.toLocaleString()}</div>
                    <div className="text-sm font-semibold text-yellow-600">+{challenge.pointsEarned} points</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
