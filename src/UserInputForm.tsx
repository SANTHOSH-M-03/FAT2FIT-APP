import React, { useState } from 'react';

interface SleepSchedule {
  bedtime: string;
  wakeUp: string;
  hours: number;
}

interface UserData {
  age: number;
  gender: 'male' | 'female';
  weight: number;
  height: number;
  activityLevel: number;
  goal: 'build' | 'lose' | 'maintain';
  dietPreference: 'veg' | 'nonveg';
  stepGoal: number;
  sleepSchedule: SleepSchedule;
}

interface Props {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
  onCalculate: () => void;
  isCalculating?: boolean;
}

const UserInputForm: React.FC<Props> = ({ userData, setUserData, onCalculate, isCalculating = false }) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Validation function
  const validateField = (field: string, value: any): string => {
    switch (field) {
      case 'age':
        if (value < 10 || value > 120) return 'Age must be between 10 and 120';
        break;
      case 'weight':
        if (value < 20 || value > 300) return 'Weight must be between 20 and 300 kg';
        break;
      case 'height':
        if (value < 100 || value > 250) return 'Height must be between 100 and 250 cm';
        break;
      case 'stepGoal':
        if (value < 1000 || value > 50000) return 'Step goal must be between 1,000 and 50,000';
        break;
    }
    return '';
  };

  // Update validation on change
  const handleFieldChange = (field: string, value: any) => {
    const error = validateField(field, value);
    setErrors(prev => ({ ...prev, [field]: error }));
    setUserData(prev => ({ ...prev, [field]: value }));
  };

  const activityOptions = [
    { value: 1.2, label: 'Sedentary (desk job)' },
    { value: 1.375, label: 'Lightly active (1–3 days/wk)' },
    { value: 1.55, label: 'Moderately active (3–5 days/wk)' },
    { value: 1.725, label: 'Very active (6–7 days/wk)' },
    { value: 1.9, label: 'Extra active (athlete / 2× training)' },
  ];

  // Track raw string values so "0" can be fully cleared on focus
  // Show empty string for zero values (first-time setup)
  const [rawAge, setRawAge] = useState(userData.age > 0 ? String(userData.age) : '');
  const [rawWeight, setRawWeight] = useState(userData.weight > 0 ? String(userData.weight) : '');
  const [rawHeight, setRawHeight] = useState(userData.height > 0 ? String(userData.height) : '');

  const handleFocus = (
    setter: React.Dispatch<React.SetStateAction<string>>,
    currentRaw: string
  ) => {
    if (currentRaw === '0') setter('');
  };

  const handleBlur = (
    raw: string,
    setter: React.Dispatch<React.SetStateAction<string>>,
    field: 'age' | 'weight' | 'height',
    fallback: number
  ) => {
    let n = parseFloat(raw);
    if (!raw || isNaN(n)) {
      n = fallback;
    }
    if (field === 'age') {
      n = Math.max(10, Math.min(120, n));
    } else if (field === 'weight') {
      n = Math.max(30, Math.min(300, n));
    } else if (field === 'height') {
      n = Math.max(100, Math.min(250, n));
    }
    setter(String(n));
    setUserData(prev => ({ ...prev, [field]: n }));
  };

  return (
    <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 shadow-2xl">
      <h2 className="text-2xl font-semibold mb-1 flex items-center gap-2">
          <span>👤</span> Your Details
        </h2>
        <p className="text-zinc-500 text-sm mb-6">Fill in your body stats and goals to get a personalised plan</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Age */}
          <div>
            <label className="block text-zinc-400 text-sm mb-2">Age (years)</label>
            <input
              type="number"
              value={rawAge}
              onFocus={() => handleFocus(setRawAge, rawAge)}
              onChange={e => {
                setRawAge(e.target.value);
                const n = parseFloat(e.target.value);
                if (!isNaN(n)) handleFieldChange('age', n);
              }}
              onBlur={() => handleBlur(rawAge, setRawAge, 'age', 25)}
              min={10}
              max={120}
              className={`w-full bg-zinc-800 border rounded-2xl px-5 py-4 focus:outline-none text-lg transition-colors ${
                errors.age ? 'border-red-500 focus:border-red-500' : 'border-zinc-700 focus:border-emerald-500'
              }`}
            />
            {errors.age && <p className="text-red-400 text-xs mt-1">{errors.age}</p>}
          </div>
          {/* Gender */}
          <div>
            <label className="block text-zinc-400 text-sm mb-2">Gender</label>
            <div className="flex gap-3">
              <button
                onClick={() => setUserData({ ...userData, gender: 'male' })}
                className={`flex-1 py-4 rounded-2xl font-medium transition-all ${userData.gender === 'male' ? 'bg-emerald-500 text-white' : 'bg-zinc-800 hover:bg-zinc-700'}`}
              >
                Male
              </button>
              <button
                onClick={() => setUserData({ ...userData, gender: 'female' })}
                className={`flex-1 py-4 rounded-2xl font-medium transition-all ${userData.gender === 'female' ? 'bg-emerald-500 text-white' : 'bg-zinc-800 hover:bg-zinc-700'}`}
              >
                Female
              </button>
            </div>
          </div>
          {/* Weight */}
          <div>
            <label className="block text-zinc-400 text-sm mb-2">Weight (kg)</label>
            <input
              type="number"
              value={rawWeight}
              onFocus={() => handleFocus(setRawWeight, rawWeight)}
              onChange={e => {
                setRawWeight(e.target.value);
                const n = parseFloat(e.target.value);
                if (!isNaN(n)) handleFieldChange('weight', n);
              }}
              onBlur={() => handleBlur(rawWeight, setRawWeight, 'weight', 70)}
              min={20}
              max={300}
              className={`w-full bg-zinc-800 border rounded-2xl px-5 py-4 focus:outline-none text-lg transition-colors ${
                errors.weight ? 'border-red-500 focus:border-red-500' : 'border-zinc-700 focus:border-emerald-500'
              }`}
            />
            {errors.weight && <p className="text-red-400 text-xs mt-1">{errors.weight}</p>}
          </div>
          {/* Height */}
          <div>
            <label className="block text-zinc-400 text-sm mb-2">Height (cm)</label>
            <input
              type="number"
              value={rawHeight}
              onFocus={() => handleFocus(setRawHeight, rawHeight)}
              onChange={e => {
                setRawHeight(e.target.value);
                const n = parseFloat(e.target.value);
                if (!isNaN(n)) handleFieldChange('height', n);
              }}
              onBlur={() => handleBlur(rawHeight, setRawHeight, 'height', 170)}
              min={100}
              max={250}
              className={`w-full bg-zinc-800 border rounded-2xl px-5 py-4 focus:outline-none text-lg transition-colors ${
                errors.height ? 'border-red-500 focus:border-red-500' : 'border-zinc-700 focus:border-emerald-500'
              }`}
            />
            {errors.height && <p className="text-red-400 text-xs mt-1">{errors.height}</p>}
          </div>
        </div>
        {/* Activity Level */}
        <div className="mt-8">
          <label className="block text-zinc-400 text-sm mb-3">Activity Level</label>
          <select
            value={userData.activityLevel}
            onChange={e => setUserData({ ...userData, activityLevel: Number(e.target.value) })}
            className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 focus:outline-none focus:border-emerald-500 text-lg transition-colors"
          >
            {activityOptions.map(opt => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        {/* Goal */}
        <div className="mt-8">
          <label className="block text-zinc-400 text-sm mb-3">Primary Goal</label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              onClick={() => setUserData({ ...userData, goal: 'build' })}
              className={`py-4 rounded-2xl font-medium transition-all flex flex-col items-center gap-1 ${userData.goal === 'build' ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30' : 'bg-zinc-800 hover:bg-zinc-700'}`}
            >
              <span className="text-xl">🏋️</span>
              Build Muscle
            </button>
            <button
              onClick={() => setUserData({ ...userData, goal: 'lose' })}
              className={`py-4 rounded-2xl font-medium transition-all flex flex-col items-center gap-1 ${userData.goal === 'lose' ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30' : 'bg-zinc-800 hover:bg-zinc-700'}`}
            >
              <span className="text-xl">🔥</span>
              Lose Fat
            </button>
            <button
              onClick={() => setUserData({ ...userData, goal: 'maintain' })}
              className={`py-4 rounded-2xl font-medium transition-all flex flex-col items-center gap-1 ${userData.goal === 'maintain' ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30' : 'bg-zinc-800 hover:bg-zinc-700'}`}
            >
              <span className="text-xl">⚖️</span>
              Maintain
            </button>
          </div>
        </div>
        {/* Diet Preference */}
        <div className="mt-8">
          <label className="block text-zinc-400 text-sm mb-3">Diet Preference</label>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => setUserData({ ...userData, dietPreference: 'veg' })}
              className={`flex-1 py-4 rounded-2xl font-medium transition-all flex items-center justify-center gap-2 ${userData.dietPreference === 'veg' ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30' : 'bg-zinc-800 hover:bg-zinc-700'}`}
            >
              🥦 Pure Veg
            </button>
            <button
              onClick={() => setUserData({ ...userData, dietPreference: 'nonveg' })}
              className={`flex-1 py-4 rounded-2xl font-medium transition-all flex items-center justify-center gap-2 ${userData.dietPreference === 'nonveg' ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30' : 'bg-zinc-800 hover:bg-zinc-700'}`}
            >
              🥩 Mixed (Veg + Non-Veg)
            </button>
          </div>
        </div>
        {/* Calculate Button */}
        <button
          onClick={onCalculate}
          disabled={isCalculating || Object.values(errors).some(error => error !== '')}
          className={`mt-10 w-full py-6 transition-all text-xl font-semibold rounded-3xl flex items-center justify-center gap-3 active:scale-95 ${
            isCalculating || Object.values(errors).some(error => error !== '')
              ? 'bg-zinc-600 cursor-not-allowed'
              : 'bg-emerald-500 hover:bg-emerald-600'
          }`}
        >
          {isCalculating ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Calculating...</span>
            </>
          ) : (
            <>
              <span>Calculate My Personalized Plan</span>
              <span className="text-3xl">→</span>
            </>
          )}
        </button>
      <p className="text-center text-zinc-500 text-sm mt-4">
        Powered by Mifflin-St Jeor formula • Real-time updates
      </p>
    </div>
  );
};

export default UserInputForm;