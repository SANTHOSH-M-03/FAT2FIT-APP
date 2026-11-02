import { Heart, MessageCircle, Share2, Users, TrendingUp, Award } from 'lucide-react';
import { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default function Community() {
  const [currentUser, setCurrentUser] = useState<{ name: string; avatar: string }>({
    name: 'You',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=User',
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser({
          name: user.displayName || 'You',
          avatar: user.photoURL || 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + user.email,
        });
      }
    });
    return () => unsubscribe();
  }, []);
  const posts = [
    {
      author: 'Sarah Johnson',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      time: '2 hours ago',
      content: 'Just completed my 50th workout this month! Feeling stronger than ever. Who else is crushing their goals this November? 💪',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop',
      likes: 127,
      comments: 23,
      shares: 8,
    },
    {
      author: 'Mike Chen',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
      time: '5 hours ago',
      content: "Lost 5kg in 6 weeks! The journey isn't easy, but consistency is key. Thanks to this amazing community for the motivation! 🎯",
      likes: 243,
      comments: 45,
      shares: 15,
    },
    {
      author: 'Emma Wilson',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
      time: '1 day ago',
      content: "New PR on deadlifts today - 140kg! Remember, progress isn't always linear. Trust the process. 🏋️",
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop',
      likes: 189,
      comments: 31,
      shares: 12,
    },
  ];

  const topMembers = [
    { name: 'Alex Rodriguez', points: 3420, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex', rank: 1 },
    { name: 'Jessica Lee', points: 3210, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica', rank: 2 },
    { name: 'David Park', points: 2980, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David', rank: 3 },
    { name: currentUser.name, points: 2100, avatar: currentUser.avatar, rank: 12 },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-1">Community</h1>
        <p className="text-gray-600">Share your journey and get inspired</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={currentUser.avatar}
                alt="Your avatar"
                className="w-12 h-12 rounded-full"
              />
              <input
                type="text"
                placeholder="Share your progress, tips, or motivation..."
                className="flex-1 px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="flex gap-2">
              <button className="flex-1 bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition-colors">
                Post Update
              </button>
              <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                📷
              </button>
            </div>
          </div>

          {posts.map((post, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="p-6 pb-4">
                <div className="flex items-center gap-3 mb-4">
                  <img src={post.avatar} alt={post.author} className="w-12 h-12 rounded-full" />
                  <div>
                    <div className="font-semibold">{post.author}</div>
                    <div className="text-sm text-gray-500">{post.time}</div>
                  </div>
                </div>
                <p className="text-gray-800 mb-4">{post.content}</p>
              </div>
              
              {post.image && (
                <img src={post.image} alt="Post" className="w-full h-80 object-cover" />
              )}

              <div className="p-6 pt-4">
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <span>{post.likes} likes</span>
                  <span>{post.comments} comments · {post.shares} shares</span>
                </div>
                
                <div className="flex gap-2 pt-4 border-t border-gray-200">
                  <button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <Heart className="w-5 h-5" />
                    <span className="font-medium">Like</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    <span className="font-medium">Comment</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <Share2 className="w-5 h-5" />
                    <span className="font-medium">Share</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-5 h-5 text-gray-600" />
              <h3 className="text-lg font-semibold">Community Stats</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="text-3xl font-bold text-blue-700 mb-1">12,847</div>
                <div className="text-sm text-blue-600">Active Members</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <div className="text-3xl font-bold text-green-700 mb-1">45,230</div>
                <div className="text-sm text-green-600">Workouts This Week</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <div className="text-3xl font-bold text-purple-700 mb-1">2,341</div>
                <div className="text-sm text-purple-600">Posts Today</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-gray-600" />
              <h3 className="text-lg font-semibold">Leaderboard</h3>
            </div>
            <div className="space-y-3">
              {topMembers.map((member, idx) => (
                <div key={idx} className={`flex items-center gap-3 p-3 rounded-lg ${
                  member.name === currentUser.name ? 'bg-green-50 border border-green-200' : 'bg-gray-50'
                }`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                    member.rank === 1 ? 'bg-yellow-400 text-yellow-900' :
                    member.rank === 2 ? 'bg-gray-300 text-gray-700' :
                    member.rank === 3 ? 'bg-orange-400 text-orange-900' :
                    'bg-gray-200 text-gray-600'
                  }`}>
                    {member.rank}
                  </div>
                  <img src={member.avatar} alt={member.name} className="w-10 h-10 rounded-full" />
                  <div className="flex-1">
                    <div className="font-semibold text-sm">{member.name}</div>
                    <div className="text-xs text-gray-500">{member.points} points</div>
                  </div>
                  {member.rank <= 3 && (
                    <Award className={`w-5 h-5 ${
                      member.rank === 1 ? 'text-yellow-500' :
                      member.rank === 2 ? 'text-gray-400' :
                      'text-orange-500'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              View Full Leaderboard
            </button>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl p-6 text-white">
            <Users className="w-10 h-10 mb-3" />
            <h3 className="text-xl font-bold mb-2">Join Groups</h3>
            <p className="text-white/90 text-sm mb-4">
              Connect with members who share your fitness goals
            </p>
            <button className="w-full bg-white text-green-700 py-2 rounded-lg font-medium hover:bg-white/90 transition-colors">
              Browse Groups
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
