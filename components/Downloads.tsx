import React, { useEffect, useState } from 'react';
import { FileText, Trash2, ExternalLink, Download as DownloadIcon, FolderOpen, RefreshCcw } from 'lucide-react';
import { PYQ_DRIVE_LINK } from '../constants';

const Downloads: React.FC = () => {
  const [downloadedFiles, setDownloadedFiles] = useState<any[]>([]);

  useEffect(() => {
    loadDownloads();
  }, []);

  const loadDownloads = () => {
    try {
        const saved = JSON.parse(localStorage.getItem('mpsc_downloads') || '[]');
        setDownloadedFiles(saved);
    } catch (e) {
        console.error("Failed to load downloads", e);
    }
  };

  const clearDownloads = () => {
    if(window.confirm("Are you sure you want to clear your download history?")) {
        localStorage.removeItem('mpsc_downloads');
        setDownloadedFiles([]);
    }
  };

  const removeDownload = (id: string) => {
    const updated = downloadedFiles.filter(f => f.id !== id);
    setDownloadedFiles(updated);
    localStorage.setItem('mpsc_downloads', JSON.stringify(updated));
  };

  const handleOpenFile = (file: any) => {
      // If the saved record has a URL (e.g. Drive Link), open it.
      if (file.url) {
        window.open(file.url, '_blank');
        return;
      }
      
      // Fallback for older records or strictly local files (if any in future)
      const pdfUrl = `/pdfs/${file.name}`;
      window.open(pdfUrl, '_blank');
  };

  return (
    <div className="space-y-6 pb-24 animate-fade-in">
      <div className="flex flex-col space-y-1">
        <div className="flex justify-between items-start">
            <div>
                <h2 className="text-2xl font-bold text-gray-800">My Downloads</h2>
                <p className="text-gray-500 text-sm">Access your saved papers and notes.</p>
            </div>
            {downloadedFiles.length > 0 && (
                <button 
                    onClick={clearDownloads}
                    className="text-xs font-bold text-red-500 bg-red-50 px-3 py-1.5 rounded-lg hover:bg-red-100 transition-colors"
                >
                    Clear All
                </button>
            )}
        </div>
      </div>

      {downloadedFiles.length > 0 ? (
        <div className="space-y-3">
          {downloadedFiles.map((file) => (
            <div 
              key={file.id} 
              className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between group hover:border-brand-200 transition-colors"
            >
              <div className="flex items-center space-x-4 overflow-hidden">
                <div className={`p-3 rounded-xl flex-shrink-0 ${file.type === 'PYQ' ? 'bg-orange-50 text-orange-500' : 'bg-blue-50 text-blue-500'}`}>
                  <FileText className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-bold text-gray-800 truncate pr-2">
                    {file.displayTitle || file.name}
                  </h4>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{file.type}</span>
                    <span className="text-[10px] text-gray-300">•</span>
                    <span className="text-[10px] text-gray-400">{file.size}</span>
                    <span className="text-[10px] text-gray-300">•</span>
                    <span className="text-[10px] text-gray-400">{file.date}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-1 pl-2">
                <button 
                    onClick={() => handleOpenFile(file)}
                    className="p-2 text-gray-400 hover:text-brand-500 transition-colors"
                    title="Open File"
                >
                  <ExternalLink className="w-5 h-5" />
                </button>
                <button 
                    onClick={() => removeDownload(file.id)}
                    className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                    title="Remove from list"
                >
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
          <p className="text-sm text-gray-500 max-w-[200px] mt-1">Files you download from the PYQ Bank will appear here.</p>
        </div>
      )}

      <div className="bg-brand-50 rounded-2xl p-4 flex items-center space-x-3 border border-brand-100">
        <FolderOpen className="w-5 h-5 text-brand-600" />
        <p className="text-xs text-brand-700 font-medium leading-relaxed">
          Storage used: <span className="font-bold text-brand-900">{(downloadedFiles.length * 0.1).toFixed(1)} MB</span> (Links only)
        </p>
      </div>
    </div>
  );
};

export default Downloads;