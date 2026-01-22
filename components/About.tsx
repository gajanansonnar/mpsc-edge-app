
import React from 'react';
import { Sparkles, Target, ShieldCheck, Heart, Mail, Globe } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    { icon: Sparkles, title: "AI Doubt Solver", desc: "Instant clarity on complex topics using the latest Gemini AI technology." },
    { icon: Target, title: "Exam Centric", desc: "Meticulously curated notes for Rajyaseva and Combined examinations." },
    { icon: ShieldCheck, title: "Free for All", desc: "Our mission is to make quality education accessible to every aspirant in Maharashtra." }
  ];

  return (
    <div className="space-y-8 pb-24 animate-fade-in">
      {/* App Brand Logo & Header */}
      <div className="text-center space-y-4 pt-4">
        <div className="w-28 h-28 bg-brand-500 rounded-[2.5rem] flex items-center justify-center shadow-2xl shadow-brand-100 dark:shadow-none mx-auto transform -rotate-3">
          <Sparkles className="w-14 h-14 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-black text-gray-800 dark:text-white tracking-tight">MPSC Edge</h2>
          <p className="text-brand-600 dark:text-brand-400 font-bold text-sm tracking-widest uppercase mt-1">Your Ultimate Study Companion</p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 space-y-4">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white flex items-center">
          <Heart className="w-5 h-5 mr-2 text-rose-500" /> Our Mission
        </h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
          MPSC Edge was born out of a simple idea: every aspirant, regardless of their financial background, deserves access to top-tier preparation tools. 
          We combine traditional study methods with cutting-edge AI to provide a comprehensive, free platform that helps you crack the Maharashtra Public Service Commission exams.
        </p>
      </div>

      {/* Features List */}
      <div className="space-y-4">
        <h3 className="px-1 text-xs font-black text-gray-400 uppercase tracking-widest">Why Choose Us</h3>
        <div className="grid grid-cols-1 gap-4">
          {features.map((f, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-2xl border border-gray-50 dark:border-gray-700 shadow-sm flex items-start space-x-4">
              <div className="p-3 rounded-xl bg-brand-50 dark:bg-brand-900/20 text-brand-500 dark:text-brand-400">
                <f.icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 dark:text-white">{f.title}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Connect Section - Matching the User's Image */}
      <div className="bg-[#0f172a] rounded-[2.5rem] p-8 text-white space-y-8">
        <h3 className="text-2xl font-bold tracking-tight text-center">Connect With Us</h3>
        
        <div className="grid grid-cols-2 gap-4">
          <button className="flex flex-col items-center justify-center space-y-3 p-5 rounded-2xl bg-[#1e293b] hover:bg-[#2d3a4f] transition-all active:scale-95 border border-slate-800/50">
            <Mail className="w-8 h-8 text-brand-500" />
            <span className="text-xs font-bold uppercase tracking-widest">Email Support</span>
          </button>
          
          <button className="flex flex-col items-center justify-center space-y-3 p-5 rounded-2xl bg-[#1e293b] hover:bg-[#2d3a4f] transition-all active:scale-95 border border-slate-800/50">
            <Globe className="w-8 h-8 text-brand-500" />
            <span className="text-xs font-bold uppercase tracking-widest">Official Site</span>
          </button>
        </div>

        <div className="pt-8 border-t border-slate-800/60 text-center space-y-2">
          <div className="flex items-center justify-center space-x-1.5 text-sm text-slate-400">
            <span>Made with</span>
            <span className="text-orange-500">🧡</span>
            <span>in Maharashtra</span>
          </div>
          <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">
            © 2024 MPSC Edge Team
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
