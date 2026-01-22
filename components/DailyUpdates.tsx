import React from 'react';
import { MOCK_UPDATES } from '../constants';
import { Bell, Calendar, Briefcase, Newspaper } from 'lucide-react';

const DailyUpdates: React.FC = () => {
  const getIcon = (category: string) => {
    switch (category) {
        case 'Job Alert': return <Briefcase className="w-4 h-4" />;
        case 'Exam Update': return <Bell className="w-4 h-4" />;
        default: return <Newspaper className="w-4 h-4" />;
    }
  };

  const getColor = (category: string) => {
    switch (category) {
        case 'Job Alert': return 'bg-purple-100 text-purple-700';
        case 'Exam Update': return 'bg-red-100 text-red-700';
        default: return 'bg-blue-100 text-blue-700';
    }
  };

  return (
    <div className="space-y-4 pb-20">
      <h2 className="text-2xl font-bold text-gray-800">Daily Updates</h2>
      
      <div className="space-y-4">
        {MOCK_UPDATES.map((item) => (
          <div key={item.id} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden">
            <div className={`absolute top-0 right-0 p-2 rounded-bl-xl ${getColor(item.category)}`}>
                {getIcon(item.category)}
            </div>
            
            <span className={`inline-block px-2 py-1 text-xs font-bold rounded mb-2 ${getColor(item.category)}`}>
                {item.category}
            </span>
            
            <h3 className="font-bold text-lg text-gray-800 mb-2 leading-snug">{item.title}</h3>
            <p className="text-gray-600 text-sm mb-3 leading-relaxed">{item.description}</p>
            
            <div className="flex items-center text-xs text-gray-400 border-t border-gray-100 pt-3">
                <Calendar className="w-3 h-3 mr-1.5" />
                {new Date(item.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center py-6">
        <p className="text-gray-400 text-sm">You're all caught up!</p>
      </div>
    </div>
  );
};

export default DailyUpdates;
