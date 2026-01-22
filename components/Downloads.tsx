import React from 'react';
import { FileText, Trash2, ExternalLink, Download as DownloadIcon, FolderOpen } from 'lucide-react';

const Downloads: React.FC = () => {
  // Mock data for downloaded files
  const downloadedFiles = [
    { id: '1', name: 'MPSC_Rajyaseva_Prelims_2023.pdf', size: '2.4 MB', date: 'Oct 12, 2023', type: 'PYQ' },
    { id: '2', name: 'History_Notes_Maratha_Empire.pdf', size: '1.1 MB', date: 'Nov 05, 2023', type: 'Notes' },
    { id: '3', name: 'Combined_Group_B_Mains_2022.pdf', size: '3.8 MB', date: 'Jan 20, 2024', type: 'PYQ' },
  ];

  return (
    <div className="space-y-6 pb-24 animate-fade-in">
      <div className="flex flex-col space-y-1">
        <h2 className="text-2xl font-bold text-gray-800">My Downloads</h2>
        <p className="text-gray-500 text-sm">Access your saved papers and notes offline.</p>
      </div>

      {downloadedFiles.length > 0 ? (
        <div className="space-y-3">
          {downloadedFiles.map((file) => (
            <div 
              key={file.id} 
              className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between group hover:border-brand-200 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-xl ${file.type === 'PYQ' ? 'bg-orange-50 text-orange-500' : 'bg-blue-50 text-blue-500'}`}>
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-800 line-clamp-1">{file.name}</h4>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{file.type}</span>
                    <span className="text-[10px] text-gray-300">•</span>
                    <span className="text-[10px] text-gray-400">{file.size}</span>
                    <span className="text-[10px] text-gray-300">•</span>
                    <span className="text-[10px] text-gray-400">{file.date}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 text-gray-400 hover:text-brand-500 transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-gray-300 mb-4">
            <DownloadIcon className="w-10 h-10" />
          </div>
          <h3 className="text-lg font-bold text-gray-800">No downloads yet</h3>
          <p className="text-sm text-gray-500 max-w-[200px] mt-1">Papers you download from the PYQ bank will appear here.</p>
        </div>
      )}

      <div className="bg-brand-50 rounded-2xl p-4 flex items-center space-x-3 border border-brand-100">
        <FolderOpen className="w-5 h-5 text-brand-600" />
        <p className="text-xs text-brand-700 font-medium leading-relaxed">
          Storage used: <span className="font-bold text-brand-900">7.3 MB</span> / 500 MB (Free Tier)
        </p>
      </div>
    </div>
  );
};

export default Downloads;