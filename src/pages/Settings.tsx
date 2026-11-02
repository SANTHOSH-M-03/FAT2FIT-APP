import { User, Bell, Lock, Palette, Globe, HelpCircle, LogOut } from 'lucide-react';

export default function Settings() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-1">Settings</h1>
        <p className="text-gray-600">Manage your account and preferences</p>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-gray-600" />
              <h2 className="text-xl font-semibold">Profile Settings</h2>
            </div>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input type="text" defaultValue="Vikash" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" defaultValue="vikash@example.com" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
              <textarea rows={3} placeholder="Tell us about yourself..." className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors">
              Save Changes
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-gray-600" />
              <h2 className="text-xl font-semibold">Notifications</h2>
            </div>
          </div>
          <div className="p-6 space-y-4">
            {[
              { label: 'Workout Reminders', enabled: true },
              { label: 'Meal Logging Reminders', enabled: true },
              { label: 'Progress Updates', enabled: false },
              { label: 'Community Activity', enabled: true },
              { label: 'Challenge Updates', enabled: true },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">{item.label}</span>
                <button className={`relative w-12 h-6 rounded-full transition-colors ${item.enabled ? 'bg-green-600' : 'bg-gray-300'}`}>
                  <div className={`absolute w-5 h-5 bg-white rounded-full top-0.5 transition-transform ${item.enabled ? 'right-0.5' : 'left-0.5'}`}></div>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <Palette className="w-5 h-5 text-gray-600" />
              <h2 className="text-xl font-semibold">Appearance</h2>
            </div>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Theme</label>
              <div className="grid grid-cols-3 gap-3">
                <button className="p-4 border-2 border-green-500 rounded-lg bg-white">
                  <div className="text-sm font-medium">Light</div>
                </button>
                <button className="p-4 border-2 border-gray-200 rounded-lg bg-gray-900 text-white">
                  <div className="text-sm font-medium">Dark</div>
                </button>
                <button className="p-4 border-2 border-gray-200 rounded-lg bg-gradient-to-br from-white to-gray-900">
                  <div className="text-sm font-medium">Auto</div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <Lock className="w-5 h-5 text-gray-600" />
              <h2 className="text-xl font-semibold">Privacy & Security</h2>
            </div>
          </div>
          <div className="p-6 space-y-3">
            <button className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="font-medium text-sm">Change Password</div>
              <div className="text-xs text-gray-500">Update your password</div>
            </button>
            <button className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="font-medium text-sm">Two-Factor Authentication</div>
              <div className="text-xs text-gray-500">Add an extra layer of security</div>
            </button>
            <button className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="font-medium text-sm">Connected Apps</div>
              <div className="text-xs text-gray-500">Manage third-party integrations</div>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="p-6 space-y-3">
            <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors">
              <Globe className="w-5 h-5 text-gray-600" />
              <div className="flex-1 text-left">
                <div className="font-medium text-sm">Language</div>
                <div className="text-xs text-gray-500">English (US)</div>
              </div>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors">
              <HelpCircle className="w-5 h-5 text-gray-600" />
              <div className="flex-1 text-left">
                <div className="font-medium text-sm">Help & Support</div>
                <div className="text-xs text-gray-500">Get help or contact us</div>
              </div>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-50 rounded-lg transition-colors text-red-600">
              <LogOut className="w-5 h-5" />
              <div className="flex-1 text-left">
                <div className="font-medium text-sm">Log Out</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
