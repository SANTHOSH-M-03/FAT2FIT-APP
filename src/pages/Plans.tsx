import { Target, Clock, TrendingUp, Dumbbell, ChevronRight } from 'lucide-react';

export default function Plans() {
  const activeProgram = {
    name: 'Build Muscle',
    subtitle: '12-Week Program',
    currentWeek: 2,
    totalWeeks: 12,
    progress: 16.7,
    workoutsCompleted: 8,
    totalWorkouts: 48,
  };

  const programs = [
    {
      title: 'Fat Loss Program',
      duration: '8 weeks',
      level: 'All Levels',
      workouts: 32,
      description: 'High-intensity workouts combined with cardio to maximize fat burning',
      gradient: 'from-orange-400 to-red-500',
      features: ['4 workouts/week', '45-60 min sessions', 'HIIT & Cardio', 'Meal plans included']
    },
    {
      title: 'Strength Training',
      duration: '16 weeks',
      level: 'Advanced',
      workouts: 64,
      description: 'Progressive overload program to build maximum strength',
      gradient: 'from-purple-400 to-pink-500',
      features: ['4 workouts/week', '90 min sessions', 'Powerlifting focus', 'Recovery protocols']
    },
    {
      title: 'Lean & Fit',
      duration: '10 weeks',
      level: 'Intermediate',
      workouts: 40,
      description: 'Build lean muscle while maintaining low body fat percentage',
      gradient: 'from-teal-400 to-blue-500',
      features: ['5 workouts/week', '60 min sessions', 'Compound movements', 'Nutrition coaching']
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-1">Plans & Programs</h1>
        <p className="text-gray-600">Goal-based workout programs designed for results</p>
      </div>

      <div className="mb-8">
        <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 text-white">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="text-sm text-white/80 mb-1">Active Program</div>
              <h2 className="text-3xl font-bold mb-2">{activeProgram.name}</h2>
              <p className="text-white/90">{activeProgram.subtitle}</p>
            </div>
            <button className="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-lg hover:bg-white/30 transition-colors">
              View Details
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-5 h-5" />
                <span className="text-sm">Progress</span>
              </div>
              <div className="text-2xl font-bold">Week {activeProgram.currentWeek}</div>
              <div className="text-sm text-white/80">of {activeProgram.totalWeeks} weeks</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Dumbbell className="w-5 h-5" />
                <span className="text-sm">Workouts</span>
              </div>
              <div className="text-2xl font-bold">{activeProgram.workoutsCompleted}</div>
              <div className="text-sm text-white/80">of {activeProgram.totalWorkouts} completed</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm">Completion</span>
              </div>
              <div className="text-2xl font-bold">{activeProgram.progress}%</div>
              <div className="text-sm text-white/80">overall progress</div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-full h-3 mb-2">
            <div className="bg-white h-3 rounded-full transition-all duration-500" style={{ width: `${activeProgram.progress}%` }}></div>
          </div>
          <div className="text-sm text-white/80">{Math.round((activeProgram.totalWeeks - activeProgram.currentWeek) * 7)} days remaining</div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Available Programs</h2>
        <p className="text-gray-600">Choose a program that matches your fitness goals</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((program, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all group cursor-pointer">
            <div className={`h-32 bg-gradient-to-br ${program.gradient} p-6 flex flex-col justify-end`}>
              <h3 className="text-2xl font-bold text-white">{program.title}</h3>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{program.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Dumbbell className="w-4 h-4" />
                  <span>{program.workouts} workouts</span>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-4">{program.description}</p>

              <div className="space-y-2 mb-4">
                {program.features.map((feature, fidx) => (
                  <div key={fidx} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  program.level === 'All Levels' ? 'bg-green-100 text-green-700' :
                  program.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {program.level}
                </span>
                <button className="flex items-center gap-1 text-green-600 font-semibold text-sm group-hover:gap-2 transition-all">
                  Start Program <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
