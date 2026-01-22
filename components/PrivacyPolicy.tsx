
import React from 'react';
import { Shield, ChevronLeft, Lock, Eye, Server, FileText } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  const sections = [
    {
      icon: Eye,
      title: "Data We Collect",
      content: "We collect basic profile information including your full name, email address, and contact number to personalize your study experience and track your progress across different devices."
    },
    {
      icon: Server,
      title: "How We Use Your Data",
      content: "Your data is used to maintain your test history, provide personalized study recommendations, and enable our AI Doubt Solver to understand your context better. We do not sell your personal information to third parties."
    },
    {
      icon: Sparkles,
      title: "AI & Third Parties",
      content: "MPSC Edge uses Google Gemini API to power the Doubt Solver. While we send your queries to the AI, we ensure no personally identifiable information is attached to these requests unless explicitly provided by you in the query."
    },
    {
      icon: Lock,
      title: "Data Security",
      content: "We implement industry-standard security measures to protect your information. Your account is secured via standard authentication protocols, and data transmission is encrypted using SSL/TLS."
    }
  ];

  return (
    <div className="space-y-6 pb-24 animate-fade-in">
      <button 
        onClick={onBack}
        className="flex items-center text-sm font-bold text-gray-500 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400 transition-colors"
      >
        <ChevronLeft className="w-4 h-4 mr-1" /> Back to Settings
      </button>

      <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <Shield className="w-6 h-6 text-emerald-500" />
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Privacy Policy</h2>
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-sm">Last updated: May 24, 2024</p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed italic">
          At MPSC Edge, we take your privacy seriously. This policy describes how we handle your data to help you achieve your goal of cracking the MPSC exams.
        </p>
      </div>

      <div className="space-y-4">
        {sections.map((section, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-gray-50 dark:border-gray-700 shadow-sm space-y-3">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-brand-50 dark:bg-brand-900/20 rounded-lg text-brand-500 dark:text-brand-400">
                <section.icon className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-800 dark:text-white">{section.title}</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed pl-11">
              {section.content}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-gray-900 rounded-[2rem] p-6 text-white text-center space-y-3">
        <FileText className="w-8 h-8 mx-auto text-brand-500" />
        <h4 className="font-bold">Have Questions?</h4>
        <p className="text-xs text-gray-400">If you have any questions about our privacy practices, please contact our support team via the About section.</p>
      </div>
    </div>
  );
};

// Internal icon fix for snippet
const Sparkles = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    <path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/>
  </svg>
);

export default PrivacyPolicy;
