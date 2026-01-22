
import React from 'react';
import { Mail, Phone, Camera, Target, Calendar, Edit3, LogOut, Award, UserCheck } from 'lucide-react';

const Profile: React.FC = () => {
  const profileData = {
    fullName: "Sanaya 💖",
    email: "sanaya@example.com",
    contactNumber: "+91 98765 43210",
    targetExam: "MPSC Rajyaseva 2024",
    joinDate: "January 2024"
  };

  return (
    <div className="space-y-6 pb-24 animate-fade-in">
      <div className="flex flex-col space-y-1">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">My Account</h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm">Your personal identity and credentials.</p>
      </div>

      {/* Profile Identity Card */}
      <div className="bg-white dark:bg-gray-800 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden p-8 text-center space-y-4">
        <div className="relative inline-block group">
          <div className="w-28 h-28 bg-brand-100 dark:bg-brand-900/30 rounded-full flex items-center justify-center mx-auto ring-4 ring-brand-50 dark:ring-brand-900/20 shadow-inner overflow-hidden relative">
            <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" 
                alt="Profile" 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 hidden group-hover:flex items-center justify-center transition-all cursor-pointer">
                <Camera className="w-8 h-8 text-white opacity-80" />
            </div>
          </div>
          <button className="absolute bottom-1 right-1 bg-brand-500 text-white p-2.5 rounded-full shadow-lg border-4 border-white dark:border-gray-800 active:scale-90 transition-transform z-10">
            <Edit3 className="w-3.5 h-3.5" />
          </button>
        </div>
        
        <div>
          <h3 className="text-2xl font-black text-gray-800 dark:text-white tracking-tight">{profileData.fullName}</h3>
          <div className="flex items-center justify-center space-x-2 mt-1">
            <Award className="w-4 h-4 text-brand-500" />
            <span className="text-xs text-brand-600 dark:text-brand-400 font-bold uppercase tracking-widest">Premium Aspirant</span>
          </div>
        </div>
      </div>

      {/* Account Info Sections */}
      <div className="space-y-3">
        <h3 className="px-1 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] flex items-center">
            <UserCheck className="w-3 h-3 mr-1.5" /> Contact Details
        </h3>
        
        <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden divide-y divide-gray-50 dark:divide-gray-700">
          <div className="flex items-center space-x-4 p-5">
            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-500 dark:text-blue-400 rounded-2xl">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-tight">Email Address</p>
              <p className="text-base font-bold text-gray-700 dark:text-gray-200">{profileData.email}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-5">
            <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-500 dark:text-emerald-400 rounded-2xl">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-tight">Contact Number</p>
              <p className="text-base font-bold text-gray-700 dark:text-gray-200">{profileData.contactNumber}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="px-1 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] flex items-center">
            <Target className="w-3 h-3 mr-1.5" /> Academic Info
        </h3>
        
        <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden divide-y divide-gray-50 dark:divide-gray-700">
          <div className="flex items-center space-x-4 p-5">
            <div className="p-3 bg-orange-50 dark:bg-orange-900/20 text-orange-500 dark:text-orange-400 rounded-2xl">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-tight">Target Exam</p>
              <p className="text-base font-bold text-gray-700 dark:text-gray-200">{profileData.targetExam}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-5">
            <div className="p-3 bg-purple-50 dark:bg-purple-900/20 text-purple-500 dark:text-purple-400 rounded-2xl">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-tight">Member Since</p>
              <p className="text-base font-bold text-gray-700 dark:text-gray-200">{profileData.joinDate}</p>
            </div>
          </div>
        </div>
      </div>

      <button className="w-full flex items-center justify-center space-x-2 p-5 rounded-3xl bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 font-bold border border-rose-100 dark:border-rose-900/30 hover:bg-rose-100 dark:hover:bg-rose-900/40 transition-all active:scale-[0.98] mt-4">
        <LogOut className="w-5 h-5" />
        <span>Log Out of All Devices</span>
      </button>
    </div>
  );
};

export default Profile;
