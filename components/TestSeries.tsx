import React, { useState, useEffect } from 'react';
import { TEST_SERIES_QUESTIONS, TEST_PAPERS } from '../constants';
import { TestCategory, TestPaper } from '../types';
import { 
  Timer, 
  CheckCircle, 
  RefreshCw, 
  Trophy, 
  ChevronLeft, 
  Play, 
  Target, 
  History, 
  Zap, 
  Clock, 
  ChevronRight,
  BookOpen,
  ScrollText
} from 'lucide-react';

const TestSeries: React.FC = () => {
  const [view, setView] = useState<'HUB' | 'LIST' | 'RUNNER' | 'RESULT'>('HUB');
  const [selectedCategory, setSelectedCategory] = useState<TestCategory | null>(null);
  const [activePaper, setActivePaper] = useState<TestPaper | null>(null);
  
  // Test Runner State
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState(300);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (view !== 'RUNNER') return;
    if (timeLeft <= 0) {
        handleFinish();
        return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, view]);

  const handleSelectCategory = (cat: TestCategory) => {
    setSelectedCategory(cat);
    setView('LIST');
  };

  const handleStartTest = (paper: TestPaper) => {
    setActivePaper(paper);
    setActiveQuestion(0);
    setSelectedAnswers({});
    setTimeLeft(paper.durationMinutes * 60);
    setView('RUNNER');
  };

  const handleFinish = () => {
    let calculatedScore = 0;
    // For demo purposes, we reuse the same 5 questions for all papers
    TEST_SERIES_QUESTIONS.forEach((q, idx) => {
        if (selectedAnswers[idx] === q.correctIndex) {
            calculatedScore++;
        }
    });
    setScore(calculatedScore);
    setView('RESULT');
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const getCategoryTitle = (cat: TestCategory | null) => {
    switch (cat) {
      case 'MOCK': return 'Mock Tests';
      case 'PYQ': return 'PYQ Tests';
      case 'QUIZ': return 'Daily Quizzes';
      case 'LONG': return 'Long Tests';
      default: return 'Tests';
    }
  };

  // --- Views ---

  if (view === 'HUB') {
    const categories = [
      { id: 'MOCK', title: 'Mock Tests', icon: Target, desc: 'Subject-wise expert papers', color: 'bg-emerald-500' },
      { id: 'LONG', title: 'Long Tests', icon: ScrollText, desc: 'Full-length GS & CSAT papers', color: 'bg-purple-500' },
      { id: 'PYQ', title: 'PYQ Tests', icon: History, desc: 'Previous years in test format', color: 'bg-orange-500' },
      { id: 'QUIZ', title: 'Daily Quizzes', icon: Zap, desc: 'Short subject-wise practice', color: 'bg-sky-500' },
    ];

    return (
      <div className="space-y-6 pb-24 animate-fade-in">
        <div className="flex flex-col space-y-1">
          <h2 className="text-2xl font-bold text-gray-800">Test Series</h2>
          <p className="text-gray-500 text-sm">Challenge yourself with various paper patterns.</p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleSelectCategory(cat.id as TestCategory)}
              className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm flex items-center space-x-5 hover:shadow-md transition-all active:scale-[0.98] text-left group"
            >
              <div className={`p-4 rounded-2xl ${cat.color} text-white shadow-lg shadow-${cat.color.split('-')[1]}-100`}>
                <cat.icon className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-black text-gray-800">{cat.title}</h3>
                <p className="text-xs text-gray-500 mt-1">{cat.desc}</p>
              </div>
              <ChevronRight className="text-gray-300 group-hover:text-brand-500 transition-colors" />
            </button>
          ))}
        </div>

        {/* Feature Banner */}
        <div className="bg-emerald-900 rounded-[2.5rem] p-6 text-white relative overflow-hidden">
            <div className="relative z-10">
                <h4 className="font-bold text-lg mb-2">Practice makes perfect</h4>
                <p className="text-xs text-emerald-100/80 leading-relaxed mb-4">Our mock tests are designed based on the latest MPSC syllabus pattern. Get detailed analysis after every attempt.</p>
                <div className="flex items-center space-x-4">
                   <div className="flex -space-x-2">
                      {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full border-2 border-emerald-800 bg-emerald-700" />)}
                   </div>
                   <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-widest">Join 5k+ Aspirants</span>
                </div>
            </div>
            <BookOpen className="absolute -bottom-4 -right-4 w-32 h-32 text-white/5 rotate-12" />
        </div>
      </div>
    );
  }

  if (view === 'LIST') {
    const papers = TEST_PAPERS.filter(p => p.category === selectedCategory);
    return (
      <div className="space-y-6 pb-24 animate-fade-in">
        <button onClick={() => setView('HUB')} className="flex items-center text-sm font-bold text-gray-500 hover:text-gray-800 transition-colors mb-2">
            <ChevronLeft className="w-4 h-4 mr-1" /> Back to Categories
        </button>

        <div className="flex flex-col space-y-1">
          <h2 className="text-2xl font-bold text-gray-800">{getCategoryTitle(selectedCategory)}</h2>
          <p className="text-gray-500 text-sm">{papers.length} Papers available for practice.</p>
        </div>

        <div className="space-y-3">
          {papers.map((paper) => (
            <div key={paper.id} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between group">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 group-hover:text-brand-500 transition-colors">
                  <Play className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-800">{paper.title}</h4>
                  <div className="flex items-center space-x-3 mt-1 text-[10px] text-gray-400 font-medium uppercase tracking-widest">
                    <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {paper.durationMinutes}m</span>
                    <span>•</span>
                    <span>{paper.questionsCount} Questions</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => handleStartTest(paper)}
                className="px-4 py-2 bg-brand-50 text-brand-600 rounded-xl text-xs font-bold hover:bg-brand-500 hover:text-white transition-all active:scale-95"
              >
                Start
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (view === 'RESULT') {
    const percentage = Math.round((score / TEST_SERIES_QUESTIONS.length) * 100);
    return (
      <div className="flex flex-col items-center justify-center h-full py-10 pb-20 animate-fade-in">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-gray-100 w-full max-w-sm text-center">
            <div className="mx-auto bg-yellow-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                <Trophy className="w-10 h-10 text-yellow-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Test Completed!</h2>
            <p className="text-gray-500 mb-6 font-medium">Results for {activePaper?.title}</p>
            <div className="text-6xl font-black text-brand-600 mb-2">{percentage}%</div>
            <p className="text-sm text-gray-400 mb-8 font-bold tracking-widest uppercase">{score} / {TEST_SERIES_QUESTIONS.length} Correct</p>
            
            <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="bg-gray-50 p-4 rounded-2xl">
                 <div className="text-xs text-gray-400 font-bold uppercase mb-1">Time Spent</div>
                 <div className="text-lg font-black text-gray-700">{formatTime((activePaper?.durationMinutes || 0) * 60 - timeLeft)}</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-2xl">
                 <div className="text-xs text-gray-400 font-bold uppercase mb-1">Accuracy</div>
                 <div className="text-lg font-black text-emerald-600">{percentage}%</div>
              </div>
            </div>

            <div className="space-y-3">
              <button 
                  onClick={() => handleStartTest(activePaper!)}
                  className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold flex items-center justify-center transition-all hover:bg-black active:scale-[0.98]"
              >
                  <RefreshCw className="w-4 h-4 mr-2" /> Retake Test
              </button>
              <button 
                  onClick={() => setView('HUB')}
                  className="w-full py-4 bg-gray-50 text-gray-500 rounded-2xl font-bold transition-all hover:bg-gray-100 active:scale-[0.98]"
              >
                  Back to Hub
              </button>
            </div>
        </div>
      </div>
    );
  }

  // --- Runner View ---
  const question = TEST_SERIES_QUESTIONS[activeQuestion];

  return (
    <div className="h-full flex flex-col pb-24 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
            <h2 className="text-lg font-bold text-gray-800 line-clamp-1">{activePaper?.title}</h2>
            <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Question {activeQuestion + 1} of {TEST_SERIES_QUESTIONS.length}</p>
        </div>
        <div className={`px-4 py-2 rounded-2xl flex items-center text-sm font-black shadow-sm ${timeLeft < 60 ? 'bg-red-50 text-red-600 animate-pulse' : 'bg-brand-50 text-brand-600'}`}>
            <Timer className="w-4 h-4 mr-1.5" />
            {formatTime(timeLeft)}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 h-2 rounded-full mb-8">
        <div 
            className="bg-brand-500 h-2 rounded-full transition-all duration-300 shadow-[0_0_10px_rgba(249,115,22,0.3)]" 
            style={{ width: `${((activeQuestion + 1) / TEST_SERIES_QUESTIONS.length) * 100}%` }}
        ></div>
      </div>

      {/* Question Card */}
      <div className="flex-1 overflow-y-auto no-scrollbar">
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 mb-6">
            <h3 className="text-xl font-bold text-gray-800 leading-tight mb-8">
                {question.text}
            </h3>

            <div className="space-y-4">
                {question.options.map((opt, idx) => (
                    <button
                        key={idx}
                        onClick={() => setSelectedAnswers({ ...selectedAnswers, [activeQuestion]: idx })}
                        className={`w-full p-5 rounded-2xl text-left border-2 transition-all flex items-center justify-between group ${
                            selectedAnswers[activeQuestion] === idx 
                            ? 'border-brand-500 bg-brand-50 text-brand-700 font-bold' 
                            : 'border-transparent bg-gray-50 text-gray-600 hover:bg-gray-100'
                        }`}
                    >
                        <div className="flex items-center space-x-4">
                           <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black transition-colors ${
                             selectedAnswers[activeQuestion] === idx ? 'bg-brand-500 text-white' : 'bg-white text-gray-400 group-hover:bg-gray-200 group-hover:text-gray-600'
                           }`}>
                             {String.fromCharCode(65 + idx)}
                           </div>
                           <span className="text-sm">{opt}</span>
                        </div>
                        {selectedAnswers[activeQuestion] === idx && <CheckCircle className="w-5 h-5 text-brand-500" />}
                    </button>
                ))}
            </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="flex space-x-3 mt-4">
        <button 
            disabled={activeQuestion === 0}
            onClick={() => setActiveQuestion(prev => prev - 1)}
            className="flex-1 py-4 bg-white border border-gray-200 text-gray-700 rounded-2xl font-bold disabled:opacity-50 transition-all active:scale-95"
        >
            Previous
        </button>
        {activeQuestion === TEST_SERIES_QUESTIONS.length - 1 ? (
            <button 
                onClick={handleFinish}
                className="flex-1 py-4 bg-emerald-600 text-white rounded-2xl font-bold shadow-lg shadow-emerald-100 transition-all active:scale-95"
            >
                Submit Test
            </button>
        ) : (
            <button 
                onClick={() => setActiveQuestion(prev => prev + 1)}
                className="flex-1 py-4 bg-brand-500 text-white rounded-2xl font-bold shadow-lg shadow-brand-100 transition-all active:scale-95"
            >
                Next
            </button>
        )}
      </div>
    </div>
  );
};

export default TestSeries;