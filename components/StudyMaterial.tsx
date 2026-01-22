
import React, { useState } from 'react';
import { MOCK_NOTES } from '../constants';
import { StudyNote } from '../types';
import { FileText, Clock, ChevronLeft, Download, Filter, Eye } from 'lucide-react';

interface StudyMaterialProps {
  onOpenPdf: (url: string, title: string) => void;
}

const StudyMaterial: React.FC<StudyMaterialProps> = ({ onOpenPdf }) => {
  const [activeNote, setActiveNote] = useState<StudyNote | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string>('All');

  const subjects = [
    'All',
    'History',
    'Geography',
    'Polity',
    'Economics',
    'Science',
    'Mathematics',
    'Reasoning',
    'Current Affairs'
  ];

  const filteredNotes = selectedSubject === 'All' 
    ? MOCK_NOTES 
    : MOCK_NOTES.filter(note => note.subject === selectedSubject);

  const handleDownloadNote = (note: StudyNote) => {
    // Generate a simple text file representing the note content
    const fileContent = `MPSC EDGE NOTE\n\nTitle: ${note.title}\nSubject: ${note.subject}\nRead Time: ${note.readTime}\n\n${note.content}`;
    const blob = new Blob([fileContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${note.title.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  if (activeNote) {
    return (
      <div className="h-full flex flex-col pb-20 animate-fade-in">
        <div className="sticky top-0 bg-white dark:bg-gray-900 z-10 border-b border-gray-100 dark:border-gray-800 pb-2 mb-4">
            <button 
                onClick={() => setActiveNote(null)} 
                className="flex items-center text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 py-2"
            >
                <ChevronLeft className="w-5 h-5 mr-1" /> Back to Library
            </button>
            <h2 className="text-xl font-bold text-gray-800 dark:text-white leading-tight">{activeNote.title}</h2>
            <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-1 space-x-3">
                <span className="bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 px-2 py-0.5 rounded">{activeNote.subject}</span>
                <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {activeNote.readTime}</span>
            </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 prose prose-sm max-w-none dark:prose-invert">
            {activeNote.content.split('\n').map((line, i) => {
                if(line.startsWith('# ')) return <h1 key={i} className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{line.replace('# ', '')}</h1>
                if(line.startsWith('## ')) return <h2 key={i} className="text-xl font-semibold mt-6 mb-3 text-gray-800 dark:text-gray-200">{line.replace('## ', '')}</h2>
                if(line.startsWith('- ')) return <li key={i} className="ml-4 list-disc text-gray-700 dark:text-gray-300 mb-1">{line.replace('- ', '')}</li>
                if(line.trim() === '') return <br key={i}/>
                return <p key={i} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">{line}</p>
            })}
        </div>
        
        <div className="grid grid-cols-2 gap-3 mt-6">
            <button 
                onClick={() => handleDownloadNote(activeNote)}
                className="flex items-center justify-center py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-medium shadow-lg active:scale-95 transition-transform"
            >
                <Download className="w-4 h-4 mr-2" /> Download
            </button>
            <button 
                onClick={() => {
                  alert("PDF View for notes will be available in the next update. Using in-app viewer for PYQs currently!");
                }}
                className="flex items-center justify-center py-3 bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-brand-800 rounded-xl font-medium active:scale-95 transition-transform"
            >
                <Eye className="w-4 h-4 mr-2" /> PDF Mode
            </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 pb-20">
      <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Study Material</h2>
          <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-500">
            <Filter className="w-5 h-5" />
          </div>
      </div>
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">Curated notes for your preparation across all subjects.</p>

      {/* Horizontal Subject Filter */}
      <div className="flex overflow-x-auto pb-2 gap-2 no-scrollbar mb-2">
        {subjects.map((subject) => (
            <button
                key={subject}
                onClick={() => setSelectedSubject(subject)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedSubject === subject 
                    ? 'bg-brand-500 text-white shadow-md' 
                    : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
            >
                {subject}
            </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filteredNotes.length === 0 ? (
            <div className="text-center py-10 text-gray-400">
                <p>No notes available for {selectedSubject} yet.</p>
            </div>
        ) : (
            filteredNotes.map((note) => (
            <button 
                key={note.id}
                onClick={() => setActiveNote(note)}
                className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-start space-x-4 hover:shadow-md transition-all active:scale-[0.99] text-left w-full"
            >
                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-lg text-indigo-600 dark:text-indigo-400">
                    <FileText className="w-6 h-6" />
                </div>
                <div className="flex-1">
                    <h3 className="font-bold text-gray-800 dark:text-gray-100 line-clamp-1">{note.title}</h3>
                    <div className="flex items-center mt-2 space-x-3">
                        <span className="text-xs font-medium px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-gray-600 dark:text-gray-300">{note.subject}</span>
                        <span className="text-xs text-gray-400 flex items-center"><Clock className="w-3 h-3 mr-1" /> {note.readTime}</span>
                    </div>
                </div>
            </button>
            ))
        )}
      </div>
    </div>
  );
};

export default StudyMaterial;
