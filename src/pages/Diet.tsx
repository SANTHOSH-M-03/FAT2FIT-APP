import { UtensilsCrossed, Plus, Camera, Search, Apple, Coffee, Pizza, Salad } from 'lucide-react';

export default function Diet() {
  const meals = [
    {
      type: 'Breakfast',
      icon: Coffee,
      color: 'from-amber-400 to-orange-400',
      items: [
        { name: 'Oatmeal with Berries', calories: 320, protein: 12, carbs: 54, fats: 8 },
        { name: 'Greek Yogurt', calories: 150, protein: 15, carbs: 12, fats: 4 },
      ],
      totalCalories: 470
    },
    {
      type: 'Lunch',
      icon: Salad,
      color: 'from-green-400 to-teal-400',
      items: [
        { name: 'Grilled Chicken Salad', calories: 420, protein: 45, carbs: 28, fats: 15 },
        { name: 'Brown Rice', calories: 210, protein: 5, carbs: 45, fats: 2 },
      ],
      totalCalories: 630
    },
    {
      type: 'Dinner',
      icon: Pizza,
      color: 'from-purple-400 to-pink-400',
      items: [
        { name: 'Salmon Fillet', calories: 380, protein: 42, carbs: 0, fats: 22 },
        { name: 'Steamed Vegetables', calories: 120, protein: 4, carbs: 24, fats: 1 },
        { name: 'Quinoa', calories: 222, protein: 8, carbs: 39, fats: 4 },
      ],
      totalCalories: 722
    },
    {
      type: 'Snacks',
      icon: Apple,
      color: 'from-red-400 to-pink-400',
      items: [
        { name: 'Protein Shake', calories: 180, protein: 25, carbs: 12, fats: 3 },
        { name: 'Almonds', calories: 164, protein: 6, carbs: 6, fats: 14 },
      ],
      totalCalories: 344
    },
  ];

  const nutritionGoals = [
    { name: 'Protein', current: 132, goal: 160, unit: 'g', color: 'bg-blue-500', percentage: 82.5 },
    { name: 'Carbs', current: 248, goal: 320, unit: 'g', color: 'bg-purple-500', percentage: 77.5 },
    { name: 'Fats', current: 62, goal: 80, unit: 'g', color: 'bg-amber-500', percentage: 77.5 },
    { name: 'Calories', current: 2146, goal: 3072, unit: 'kcal', color: 'bg-green-500', percentage: 69.8 },
  ];

  const totalConsumed = meals.reduce((sum, meal) => sum + meal.totalCalories, 0);
  const calorieGoal = 3072;

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-1">Diet & Nutrition</h1>
        <p className="text-gray-600">Track your meals and reach your nutrition goals</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Today's Nutrition</h2>
              <span className="text-sm text-gray-500">{totalConsumed} / {calorieGoal} kcal</span>
            </div>

            <div className="relative w-48 h-48 mx-auto mb-6">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="96" cy="96" r="88" stroke="#f3f4f6" strokeWidth="16" fill="none" />
                <circle cx="96" cy="96" r="88" stroke="#10b981" strokeWidth="16" fill="none"
                  strokeDasharray="553" strokeDashoffset={553 - (553 * totalConsumed / calorieGoal)} strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold">{totalConsumed}</span>
                <span className="text-sm text-gray-500">kcal consumed</span>
                <span className="text-xs text-gray-400 mt-1">{calorieGoal - totalConsumed} remaining</span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {nutritionGoals.map((goal) => (
                <div key={goal.name} className="text-center">
                  <div className={`w-3 h-3 ${goal.color} rounded-full mx-auto mb-2`}></div>
                  <div className="text-sm font-medium text-gray-600">{goal.name}</div>
                  <div className="text-lg font-bold">{goal.current}{goal.unit === 'g' ? 'g' : ''}</div>
                  <div className="text-xs text-gray-500">of {goal.goal}{goal.unit === 'g' ? 'g' : ''}</div>
                  <div className="mt-1 bg-gray-200 rounded-full h-1.5">
                    <div className={`${goal.color} h-1.5 rounded-full`} style={{ width: `${goal.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {meals.map((meal) => (
            <div key={meal.type} className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${meal.color} flex items-center justify-center`}>
                    <meal.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{meal.type}</h3>
                    <p className="text-sm text-gray-500">{meal.totalCalories} kcal</p>
                  </div>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Plus className="w-5 h-5 text-green-600" />
                </button>
              </div>

              <div className="space-y-2">
                {meal.items.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <div className="font-medium text-sm">{item.name}</div>
                      <div className="text-xs text-gray-500">
                        P: {item.protein}g · C: {item.carbs}g · F: {item.fats}g
                      </div>
                    </div>
                    <div className="font-bold text-sm">{item.calories} kcal</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-3 p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                  <Plus className="w-5 h-5 text-white" />
                </div>
                <div className="text-left flex-1">
                  <div className="font-semibold text-sm">Add Meal</div>
                  <div className="text-xs text-gray-500">Log your food</div>
                </div>
              </button>

              <button className="w-full flex items-center gap-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                  <Camera className="w-5 h-5 text-white" />
                </div>
                <div className="text-left flex-1">
                  <div className="font-semibold text-sm">Scan Food</div>
                  <div className="text-xs text-gray-500">Take a photo</div>
                </div>
              </button>

              <button className="w-full flex items-center gap-3 p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center">
                  <Search className="w-5 h-5 text-white" />
                </div>
                <div className="text-left flex-1">
                  <div className="font-semibold text-sm">Browse Recipes</div>
                  <div className="text-xs text-gray-500">Healthy meals</div>
                </div>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Hydration</h3>
            <div className="text-center mb-4">
              <div className="text-4xl font-bold mb-1">6 / 8</div>
              <div className="text-sm text-gray-500">glasses today</div>
            </div>
            <div className="grid grid-cols-4 gap-2 mb-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((glass) => (
                <div key={glass} className={`aspect-square rounded-lg flex items-center justify-center ${
                  glass <= 6 ? 'bg-blue-500' : 'bg-gray-200'
                }`}>
                  <span className={`text-xl ${glass <= 6 ? 'opacity-0' : 'opacity-30'}`}>💧</span>
                </div>
              ))}
            </div>
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors">
              Add Water
            </button>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Meal Timing</h3>
            <div className="space-y-3">
              {meals.map((meal) => (
                <div key={meal.type} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${meal.color} flex items-center justify-center`}>
                      <meal.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium">{meal.type}</span>
                  </div>
                  <span className="text-sm text-gray-500">
                    {meal.type === 'Breakfast' ? '8:00 AM' :
                     meal.type === 'Lunch' ? '1:00 PM' :
                     meal.type === 'Dinner' ? '7:00 PM' : '10:30 AM'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
