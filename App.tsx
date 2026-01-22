
import React, { useState } from 'react';
import { Home, Book, Sparkles, FileText, Menu, Settings as SettingsIcon, Info, Download } from 'lucide-react';
import Dashboard from './components/Dashboard';
import PYQSection from './components/PYQSection';
import StudyMaterial from './components/StudyMaterial';
import TestSeries from './components/TestSeries';
import DailyUpdates from './components/DailyUpdates';
import DoubtSolver from './components/DoubtSolver';
import Settings from './components/Settings';
import About from './components/About';
import Downloads from './components/Downloads';
import PrivacyPolicy from './components/PrivacyPolicy';
import { AppView } from './types';

function App() {
  const [currentView, setCurrentView] = useState<AppView>(AppView.DASHBOARD);
  const [showMenu, setShowMenu] = useState(false);

  // Helper to render current view
  const renderView = () => {
    switch (currentView) {
      case AppView.DASHBOARD: return <Dashboard onChangeView={setCurrentView} />;
      case AppView.PYQ: return <PYQSection />;
      case AppView.STUDY_MATERIAL: return <StudyMaterial />;
      case AppView.TEST_SERIES: return <TestSeries />;
      case AppView.UPDATES: return <DailyUpdates />;
      case AppView.DOUBT_SOLVER: return <DoubtSolver />;
      case AppView.SETTINGS: return <Settings onChangeView={setCurrentView} />;
      case AppView.ABOUT: return <About />;
      case AppView.DOWNLOADS: return <Downloads />;
      case AppView.PRIVACY_POLICY: return <PrivacyPolicy onBack={() => setCurrentView(AppView.SETTINGS)} />;
      default: return <Dashboard onChangeView={setCurrentView} />;
    }
  };

  const getHeaderTitle = () => {
    switch (currentView) {
        case AppView.DASHBOARD: return 'MPSC Edge';
        case AppView.PYQ: return 'PYQ Bank';
        case AppView.STUDY_MATERIAL: return 'Study Material';
        case AppView.TEST_SERIES: return 'Test Series';
        case AppView.UPDATES: return 'Daily Updates';
        case AppView.DOUBT_SOLVER: return 'Doubt Solver';
        case AppView.SETTINGS: return 'Settings';
        case AppView.ABOUT: return 'About Us';
        case AppView.DOWNLOADS: return 'My Downloads';
        case AppView.PRIVACY_POLICY: return 'Privacy Policy';
        default: return 'MPSC Edge';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans flex justify-center">
      {/* Mobile Container Simulation */}
      <div className="w-full max-w-md bg-gray-50 min-h-screen flex flex-col relative shadow-2xl">
        
        {/* Header */}
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
             {currentView !== AppView.DASHBOARD && (
                 <button onClick={() => setCurrentView(AppView.DASHBOARD)} className="text-gray-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                 </button>
             )}
            <h1 className="text-xl font-black bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-brand-500">
                {getHeaderTitle()}
            </h1>
          </div>
          <button onClick={() => setShowMenu(!showMenu)} className="p-2 text-gray-600 rounded-lg hover:bg-gray-100">
            <Menu className="w-6 h-6" />
          </button>
        </header>

        {/* Side Menu Drawer (Simple Overlay) */}
        {showMenu && (
            <div className="absolute inset-0 z-50 bg-black/50" onClick={() => setShowMenu(false)}>
                <div className="absolute top-0 right-0 w-64 h-full bg-white shadow-xl p-6 flex flex-col animate-slide-in-right" onClick={e => e.stopPropagation()}>
                    <div className="flex items-center space-x-3 mb-8">
                      <div className="w-12 h-12 bg-brand-500 rounded-2xl flex items-center justify-center shadow-lg shadow-brand-100">
                        <Sparkles className="w-7 h-7 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-800 tracking-tight">MPSC Edge</h2>
                    </div>
                    
                    <nav className="space-y-2">
                        <button 
                          onClick={() => { setCurrentView(AppView.DASHBOARD); setShowMenu(false); }} 
                          className="flex items-center space-x-3 w-full text-left font-bold text-gray-700 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                        >
                          <Home className="w-5 h-5 text-brand-500" />
                          <span>Home</span>
                        </button>

                        <button 
                          onClick={() => { setCurrentView(AppView.DOWNLOADS); setShowMenu(false); }}
                          className="flex items-center space-x-3 w-full text-left font-bold text-gray-700 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                        >
                          <Download className="w-5 h-5 text-orange-500" />
                          <span>Downloads</span>
                        </button>

                        <button 
                          onClick={() => { setCurrentView(AppView.SETTINGS); setShowMenu(false); }}
                          className="flex items-center space-x-3 w-full text-left font-bold text-gray-700 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                        >
                          <SettingsIcon className="w-5 h-5 text-gray-400" />
                          <span>Settings</span>
                        </button>

                        <button 
                          onClick={() => { setCurrentView(AppView.ABOUT); setShowMenu(false); }}
                          className="flex items-center space-x-3 w-full text-left font-bold text-gray-700 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                        >
                          <Info className="w-5 h-5 text-emerald-500" />
                          <span>About Us</span>
                        </button>
                    </nav>

                    <div className="mt-auto pt-6 border-t border-gray-100">
                        <p className="text-xs text-gray-400">Version 1.2.4 (Stable)</p>
                        <p className="text-[10px] text-gray-300 mt-1">Made with ❤️ for MPSC Aspirants</p>
                    </div>
                </div>
            </div>
        )}

        {/* Main Content Area */}
        <main className="flex-1 p-4 overflow-y-auto no-scrollbar">
          {renderView()}
        </main>

        {/* Bottom Navigation */}
        <nav className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-3 flex justify-between items-center z-20">
          <button 
            onClick={() => setCurrentView(AppView.DASHBOARD)} 
            className={`flex flex-col items-center space-y-1 ${currentView === AppView.DASHBOARD ? 'text-brand-600' : 'text-gray-400'}`}
          >
            <Home className="w-6 h-6" />
            <span className="text-[10px] font-medium">Home</span>
          </button>
          
          <button 
            onClick={() => setCurrentView(AppView.STUDY_MATERIAL)} 
            className={`flex flex-col items-center space-y-1 ${currentView === AppView.STUDY_MATERIAL ? 'text-brand-600' : 'text-gray-400'}`}
          >
            <Book className="w-6 h-6" />
            <span className="text-[10px] font-medium">Learn</span>
          </button>

          {/* Floating Action Button for Doubt Solver */}
          <div className="relative -top-6">
            <button 
                onClick={() => setCurrentView(AppView.DOUBT_SOLVER)}
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transform transition-transform active:scale-95 ${
                    currentView === AppView.DOUBT_SOLVER 
                    ? 'bg-sky-500 text-white ring-4 ring-sky-100' 
                    : 'bg-brand-500 text-white ring-4 ring-white'
                }`}
            >
                <Sparkles className="w-7 h-7" />
            </button>
          </div>

          <button 
            onClick={() => setCurrentView(AppView.TEST_SERIES)} 
            className={`flex flex-col items-center space-y-1 ${currentView === AppView.TEST_SERIES ? 'text-brand-600' : 'text-gray-400'}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span className="text-[10px] font-medium">Tests</span>
          </button>

          <button 
            onClick={() => setCurrentView(AppView.PYQ)} 
            className={`flex flex-col items-center space-y-1 ${currentView === AppView.PYQ ? 'text-brand-600' : 'text-gray-400'}`}
          >
            <FileText className="w-6 h-6" />
            <span className="text-[10px] font-medium">PYQ</span>
          </button>
        </nav>
      </div>
    </div>
  );
}

export default App;
