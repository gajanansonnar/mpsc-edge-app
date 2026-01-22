
import React, { useState, useEffect } from 'react';
import { BookOpen, Sparkles, FileText, CheckSquare, Bell, TrendingUp, RefreshCw, Target } from 'lucide-react';
import { AppView } from '../types';
import { geminiService } from '../services/geminiService';

interface DashboardProps {
  onChangeView: (view: AppView) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onChangeView }) => {
  const [quote, setQuote] = useState<string>("स्वप्न 'अधिकारी' व्हायचं असेल, तर मेहनतही 'राजेषाही' हवी. जिद्द ठेवा आणि मैदान मारून दाखवा!");
  const [isLoadingQuote, setIsLoadingQuote] = useState(false);

  const fetchNewQuote = async () => {
    setIsLoadingQuote(true);
    try {
      const newQuote = await geminiService.generateQuote();
      if (newQuote) {
        setQuote(newQuote);
      }
    } catch (e) {
      // Keep default quote if error
      console.error("Failed to fetch quote", e);
    }
    setIsLoadingQuote(false);
  };

  useEffect(() => {
    fetchNewQuote();
  }, []);

  const stats = [
    { label: 'Tests Taken', value: '12', icon: CheckSquare, color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-100 dark:bg-blue-900/30' },
    { label: 'Notes Read', value: '8', icon: BookOpen, color: 'text-green-600 dark:text-green-400', bg: 'bg-green-100 dark:bg-green-900/30' },
    { label: 'Avg Score', value: '78%', icon: TrendingUp, color: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-100 dark:bg-purple-900/30' },
  ];

  const menuItems = [
    { id: AppView.STUDY_MATERIAL, label: 'Study Material', icon: BookOpen, desc: 'Topic-wise notes & PDFs', color: 'bg-indigo-500' },
    { id: AppView.PYQ, label: 'PYQ Bank', icon: FileText, desc: 'Previous Year Questions', color: 'bg-orange-500' },
    { id: AppView.TEST_SERIES, label: 'Test Series', icon: CheckSquare, desc: 'Mock tests & quizzes', color: 'bg-emerald-500' },
    { id: AppView.UPDATES, label: 'Daily Updates', icon: Bell, desc: 'Current affairs & jobs', color: 'bg-rose-500' },
    { id: AppView.DOUBT_SOLVER, label: 'AI Doubt Solver', icon: Sparkles, desc: 'Instant clarity with Gemini', color: 'bg-sky-500' },
  ];

  return (
    <div className="space-y-6 pb-20 animate-fade-in">
      {/* AI Daily Focus Banner - Updated to Brand Orange */}
      <div className="bg-brand-500 rounded-[2.5rem] p-6 text-white shadow-xl shadow-brand-100 dark:shadow-none flex flex-col justify-center min-h-[160px] relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-8 -mb-8 blur-xl"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-3">
             <div className="flex items-center space-x-2 opacity-90">
                <div className="bg-white/20 p-1.5 rounded-lg backdrop-blur-sm">
                  <Target className="w-4 h-4 text-white" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">AI Daily Focus</span>
             </div>
             <button 
                onClick={fetchNewQuote}
                disabled={isLoadingQuote}
                className="bg-white/20 backdrop-blur-md p-2 rounded-xl border border-white/20 hover:bg-white/30 transition-all active:scale-95 disabled:opacity-50"
                title="Refresh Quote"
             >
                {isLoadingQuote ? (
                  <RefreshCw className="w-5 h-5 animate-spin text-white" />
                ) : (
                  <Sparkles className="w-5 h-5 text-white" />
                )}
             </button>
          </div>
          
          <div className={`transition-all duration-500 ${isLoadingQuote ? 'opacity-50 blur-sm' : 'opacity-100 blur-0'}`}>
            <h2 className="text-xl font-bold leading-relaxed tracking-wide italic drop-shadow-sm">
              "{quote}"
            </h2>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-3">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-800 p-3 rounded-2xl shadow-sm flex flex-col items-center justify-center text-center border border-gray-100 dark:border-gray-700 transition-colors">
            <div className={`p-2 rounded-xl ${stat.bg} mb-2`}>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </div>
            <span className="text-lg font-black text-gray-800 dark:text-gray-100 leading-none">{stat.value}</span>
            <span className="text-[10px] text-gray-400 font-bold uppercase mt-1 tracking-tighter">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Main Menu Grid */}
      <div>
        <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3 px-1">Learning Hub</h3>
        <div className="grid grid-cols-1 gap-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onChangeView(item.id)}
              className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm flex items-center space-x-4 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all active:scale-[0.98] group"
            >
              <div className={`p-3 rounded-xl shadow-sm ${item.color} text-white transition-transform group-hover:scale-110`}>
                <item.icon className="w-6 h-6" />
              </div>
              <div className="flex-1 text-left">
                <h4 className="font-bold text-gray-800 dark:text-gray-100">{item.label}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{item.desc}</p>
              </div>
              <div className="text-gray-300 dark:text-gray-600 group-hover:text-brand-500 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
