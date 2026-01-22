
import React, { useState } from 'react';
import { 
  Bell, 
  Globe, 
  Moon, 
  Trash2, 
  ShieldCheck, 
  Info, 
  ChevronRight,
  Monitor,
  Layout,
  User
} from 'lucide-react';
import { AppView } from '../types';

interface SettingsProps {
  onChangeView: (view: AppView) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Settings: React.FC<SettingsProps> = ({ onChangeView, darkMode, toggleDarkMode }) => {
  const [isEnglish, setIsEnglish] = useState(true);
  const [notifications, setNotifications] = useState(true);

  const settingSections = [
    {
      title: 'Account',
      items: [
        { 
          icon: User, 
          label: 'My Profile', 
          value: 'Sanaya', 
          onClick: () => onChangeView(AppView.PROFILE),
          color: 'text-purple-600' 
        },
      ]
    },
    {
      title: 'Interface',
      items: [
        { 
          icon: Globe, 
          label: 'App Language', 
          value: isEnglish ? 'English' : 'Marathi', 
          onClick: () => setIsEnglish(!isEnglish),
          color: 'text-emerald-500' 
        },
        { 
          icon: Moon, 
          label: 'Dark Theme', 
          type: 'toggle', 
          enabled: darkMode, 
          onClick: toggleDarkMode,
          color: 'text-indigo-500' 
        },
        { 
          icon: Monitor, 
          label: 'Font Size', 
          value: 'Default',
          color: 'text-blue-500' 
        },
      ]
    },
    {
      title: 'Notifications',
      items: [
        { 
          icon: Bell, 
          label: 'Exam Alerts', 
          type: 'toggle', 
          enabled: notifications, 
          onClick: () => setNotifications(!notifications),
          color: 'text-rose-500' 
        },
        { 
          icon: Bell, 
          label: 'Daily Study Reminder', 
          type: 'toggle', 
          enabled: true, 
          color: 'text-rose-400' 
        },
      ]
    },
    {
      title: 'Storage & Privacy',
      items: [
        { 
          icon: Trash2, 
          label: 'Clear App Data', 
          color: 'text-gray-400',
          onClick: () => alert('App cache and local data cleared successfully!')
        },
        { 
          icon: ShieldCheck, 
          label: 'Privacy Settings', 
          color: 'text-emerald-600',
          onClick: () => onChangeView(AppView.PRIVACY_POLICY)
        }
      ]
    },
    {
      title: 'About',
      items: [
        { 
          icon: Info, 
          label: 'App Version', 
          value: 'v1.2.4 Stable', 
          color: 'text-gray-400',
          onClick: () => onChangeView(AppView.ABOUT)
        },
        { 
          icon: Layout, 
          label: 'Legal Terms', 
          color: 'text-gray-400'
        },
      ]
    }
  ];

  return (
    <div className="space-y-6 pb-24 animate-fade-in">
      <div className="flex flex-col space-y-1">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Settings</h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm">Configure your application preferences.</p>
      </div>

      <div className="space-y-8">
        {settingSections.map((section, sIdx) => (
          <div key={sIdx} className="space-y-3">
            <h3 className="px-1 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">{section.title}</h3>
            <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden transition-colors">
              {section.items.map((item, iIdx) => (
                <button
                  key={iIdx}
                  onClick={item.onClick}
                  className={`w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border-b last:border-b-0 border-gray-50 dark:border-gray-700 group`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-2.5 rounded-xl bg-gray-50 dark:bg-gray-700 ${item.color} group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-bold text-gray-700 dark:text-gray-200">{item.label}</span>
                  </div>
                  
                  <div className="flex items-center">
                    {item.type === 'toggle' ? (
                      <div className={`w-11 h-6 rounded-full relative transition-colors ${item.enabled ? 'bg-brand-500' : 'bg-gray-200 dark:bg-gray-600'}`}>
                        <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${item.enabled ? 'left-6' : 'left-1'}`} />
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        {item.value && <span className="text-xs text-gray-400 font-bold">{item.value}</span>}
                        <ChevronRight className="w-4 h-4 text-gray-300 dark:text-gray-600 group-hover:text-brand-500 transition-colors" />
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}

        <div className="px-1 py-8 text-center space-y-2 opacity-30">
          <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">MPSC Edge Mobile</div>
          <div className="text-[9px] font-medium text-gray-400 uppercase tracking-widest">A Product of Maharashtra EdTech</div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
