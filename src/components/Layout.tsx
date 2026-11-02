import { Outlet, NavLink } from 'react-router-dom';
import { Home, Activity, Dumbbell, Apple, TrendingUp, Calendar, Trophy, Users, Bot, Settings, Bell, Search, ChevronLeft, ChevronRight, LogOut } from 'lucide-react';
import { useState, useEffect } from 'react';
import { auth, googleProvider } from '../firebase';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import type { User } from 'firebase/auth';

export default function Layout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        localStorage.setItem('userName', currentUser.displayName || 'User');
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('userName');
      setShowProfileMenu(false);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const navItems = [
    { path: '/', icon: Home, label: 'Dashboard' },
    { path: '/activity', icon: Activity, label: 'Activity' },
    { path: '/workouts', icon: Dumbbell, label: 'Workouts' },
    { path: '/diet', icon: Apple, label: 'Diet & Nutrition' },
    { path: '/progress', icon: TrendingUp, label: 'Progress' },
    { path: '/plans', icon: Calendar, label: 'Plans & Programs' },
    { path: '/challenges', icon: Trophy, label: 'Challenges' },
    { path: '/community', icon: Users, label: 'Community' },
    { path: '/ai-coach', icon: Bot, label: 'AI Coach' },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <aside className={`${sidebarCollapsed ? 'w-20' : 'w-64'} bg-white border-r border-gray-200 flex flex-col transition-all duration-300`}>
        <div className="p-4 flex items-center gap-3 border-b border-gray-200">
          <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-xl">CF</span>
          </div>
          {!sidebarCollapsed && <span className="font-bold text-xl">CoreFit</span>}
        </div>

        <nav className="flex-1 p-3 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-3 rounded-lg mb-1 transition-colors ${
                  isActive
                    ? 'bg-green-100 text-green-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {!sidebarCollapsed && <span className="text-sm font-medium">{item.label}</span>}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-700 hover:bg-gray-100'
              }`
            }
          >
            <Settings className="w-5 h-5 flex-shrink-0" />
            {!sidebarCollapsed && <span className="text-sm font-medium">Settings</span>}
          </NavLink>
        </div>

        <button
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="absolute left-full top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50"
        >
          {sidebarCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div className="flex-1 max-w-xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search workouts, meals, tips..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex items-center gap-4 ml-6">
            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center gap-3 pl-4 border-l border-gray-200 hover:bg-gray-50 rounded-lg p-2 transition-colors"
                >
                  <img
                    src={user.photoURL || 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + user.email}
                    alt="User"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="hidden md:block text-left">
                    <div className="text-sm font-semibold">{user.displayName || 'User'}</div>
                    <div className="text-xs text-gray-500">{user.email}</div>
                  </div>
                </button>

                {showProfileMenu && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setShowProfileMenu(false)}
                    />
                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-20">
                      <div className="px-4 py-3 border-b border-gray-200">
                        <div className="text-sm font-semibold">{user.displayName}</div>
                        <div className="text-xs text-gray-500">{user.email}</div>
                      </div>
                      <button
                        onClick={handleSignOut}
                        className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <LogOut className="w-4 h-4" />
                        Sign Out
                      </button>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <button
                onClick={handleGoogleSignIn}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
                <span className="text-sm font-medium">Sign in with Google</span>
              </button>
            )}
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
