import { Bot, Send, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function AICoach() {
  const [message, setMessage] = useState('');
  
  const conversations = [
    {
      type: 'ai',
      message: "Hello! I'm your AI fitness coach. How can I help you today?",
      time: '10:30 AM',
    },
    {
      type: 'user',
      message: "I want to lose weight but also build muscle. What's the best approach?",
      time: '10:31 AM',
    },
    {
      type: 'ai',
      message: "Great question! Building muscle while losing fat requires a strategic approach. Here's my recommendation:\n\n1. **Nutrition**: Maintain a slight caloric deficit (300-500 calories below maintenance) while ensuring high protein intake (1.6-2.2g per kg of body weight).\n\n2. **Training**: Focus on progressive resistance training 3-4 times per week, combined with 2-3 cardio sessions.\n\n3. **Recovery**: Ensure 7-9 hours of sleep and adequate rest days.\n\nWould you like me to create a personalized plan based on your current stats?",
      time: '10:31 AM',
    },
    {
      type: 'user',
      message: "Yes please! My current weight is 74.2kg and I want to reach 68kg.",
      time: '10:32 AM',
    },
    {
      type: 'ai',
      message: "Perfect! Based on your goal to lose 6.2kg, here's your personalized plan:\n\n📊 **Timeline**: 12-16 weeks\n🍽️ **Daily Calories**: 2,400-2,600 kcal\n💪 **Protein Target**: 140-160g per day\n🏋️ **Workout Split**: Push/Pull/Legs (3x per week)\n🏃 **Cardio**: 2-3 sessions of 30 min LISS\n\nThis balanced approach will help you lose fat while maintaining muscle mass. Shall I add this plan to your profile?",
      time: '10:33 AM',
    },
  ];

  const suggestions = [
    "Create a workout plan for me",
    "What should I eat today?",
    "How to improve my sleep?",
    "Tips for staying motivated",
  ];

  return (
    <div className="max-w-6xl mx-auto h-[calc(100vh-12rem)]">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-1">AI Coach</h1>
        <p className="text-gray-600">Get personalized fitness guidance powered by AI</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
        <div className="lg:col-span-2 flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-purple-500 to-pink-500">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div className="text-white">
                <div className="font-semibold">AI Fitness Coach</div>
                <div className="text-sm text-white/80 flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  Online
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {conversations.map((conv, idx) => (
              <div key={idx} className={`flex ${conv.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] ${conv.type === 'user' ? 'order-2' : 'order-1'}`}>
                  {conv.type === 'ai' && (
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-xs text-gray-500">{conv.time}</span>
                    </div>
                  )}
                  <div className={`rounded-2xl px-4 py-3 ${
                    conv.type === 'user'
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    <p className="whitespace-pre-line text-sm leading-relaxed">{conv.message}</p>
                  </div>
                  {conv.type === 'user' && (
                    <div className="text-xs text-gray-500 mt-1 text-right">{conv.time}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2 mb-3">
              {suggestions.map((suggestion, idx) => (
                <button
                  key={idx}
                  className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-xs font-medium transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask your AI coach anything..."
                className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <h3 className="text-lg font-semibold">AI Features</h3>
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-purple-50 rounded-lg">
                <div className="font-semibold text-sm text-purple-900 mb-1">Personalized Plans</div>
                <div className="text-xs text-purple-700">Custom workout & meal plans</div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="font-semibold text-sm text-blue-900 mb-1">Form Analysis</div>
                <div className="text-xs text-blue-700">Get feedback on your technique</div>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <div className="font-semibold text-sm text-green-900 mb-1">Nutrition Advice</div>
                <div className="text-xs text-green-700">Smart meal recommendations</div>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg">
                <div className="font-semibold text-sm text-orange-900 mb-1">24/7 Support</div>
                <div className="text-xs text-orange-700">Always here to help</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-sm font-medium">
                📋 Get Today's Plan
              </button>
              <button className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-sm font-medium">
                🍽️ Meal Suggestions
              </button>
              <button className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-sm font-medium">
                💪 Exercise Form Tips
              </button>
              <button className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-sm font-medium">
                📊 Progress Review
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white">
            <Bot className="w-10 h-10 mb-3" />
            <h3 className="text-xl font-bold mb-2">Premium AI Coach</h3>
            <p className="text-white/90 text-sm mb-4">
              Unlock advanced AI features with voice chat, video analysis, and unlimited conversations
            </p>
            <button className="w-full bg-white text-purple-700 py-2 rounded-lg font-medium hover:bg-white/90 transition-colors">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
