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
        <h2 className="text-2xl font-bold text-gray-800">My Account</h2>
        <p className="text-gray-500 text-sm">Your personal identity and credentials.</p>
      </div>

      {/* Profile Identity Card */}
      <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden p-8 text-center space-y-4">
        <div className="relative inline-block">
          <div className="w-28 h-28 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mx-auto ring-4 ring-brand-50 shadow-inner">
            <span className="text-4xl font-black">S</span>
          </div>
          <button className="absolute bottom-1 right-1 bg-brand-500 text-white p-2.5 rounded-full shadow-lg border-4 border-white active:scale-90 transition-transform">
            <Camera className="w-4 h-4" />
          </button>
        </div>
        
        <div>
          <h3 className="text-2xl font-black text-gray-800 tracking-tight">{profileData.fullName}</h3>
          <div className="flex items-center justify-center space-x-2 mt-1">
            <Award className="w-4 h-4 text-brand-500" />
            <span className="text-xs text-brand-600 font-bold uppercase tracking-widest">Premium Aspirant</span>
          </div>
        </div>

        <button className="flex items-center space-x-2 mx-auto px-5 py-2.5 bg-gray-50 text-gray-600 rounded-2xl text-xs font-bold border border-gray-100 hover:bg-gray-100 transition-colors">
          <Edit3 className="w-3.5 h-3.5" />
          <span>Edit Profile</span>
        </button>
      </div>

      {/* Account Info Sections */}
      <div className="space-y-3">
        <h3 className="px-1 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] flex items-center">
            <UserCheck className="w-3 h-3 mr-1.5" /> Contact Details
        </h3>
        
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden divide-y divide-gray-50">
          <div className="flex items-center space-x-4 p-5">
            <div className="p-3 bg-blue-50 text-blue-500 rounded-2xl">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">Email Address</p>
              <p className="text-base font-bold text-gray-700">{profileData.email}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-5">
            <div className="p-3 bg-emerald-50 text-emerald-500 rounded-2xl">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">Contact Number</p>
              <p className="text-base font-bold text-gray-700">{profileData.contactNumber}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="px-1 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] flex items-center">
            <Target className="w-3 h-3 mr-1.5" /> Academic Info
        </h3>
        
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden divide-y divide-gray-50">
          <div className="flex items-center space-x-4 p-5">
            <div className="p-3 bg-orange-50 text-orange-500 rounded-2xl">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">Target Exam</p>
              <p className="text-base font-bold text-gray-700">{profileData.targetExam}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-5">
            <div className="p-3 bg-purple-50 text-purple-500 rounded-2xl">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">Member Since</p>
              <p className="text-base font-bold text-gray-700">{profileData.joinDate}</p>
            </div>
          </div>
        </div>
      </div>

      <button className="w-full flex items-center justify-center space-x-2 p-5 rounded-3xl bg-rose-50 text-rose-600 font-bold border border-rose-100 hover:bg-rose-100 transition-all active:scale-[0.98] mt-4">
        <LogOut className="w-5 h-5" />
        <span>Log Out of All Devices</span>
      </button>
    </div>
  );
};

export default Profile;