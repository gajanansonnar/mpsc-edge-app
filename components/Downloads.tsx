
import React, { useEffect, useState } from 'react';
import { FileText, Trash2, ExternalLink, Download as DownloadIcon, FolderOpen, Eye } from 'lucide-react';

interface DownloadsProps {
  onOpenPdf: (url: string, title: string) => void;
}

const Downloads: React.FC<DownloadsProps> = ({ onOpenPdf }) => {
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
      if (file.url) {
        onOpenPdf(file.url, file.displayTitle || file.name);
      }
  };

  return (
    <div className="space-y-6 pb-24 animate-fade-in">
      <div className="flex flex-col space-y-1">
        <div className="flex justify-between items-start">
            <div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">My Downloads</h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Access your saved papers and notes.</p>
            </div>
            {downloadedFiles.length > 0 && (
                <button 
                    onClick={clearDownloads}
                    className="text-xs font-bold text-red-500 bg-red-50 dark:bg-red-900/20 px-3 py-1.5 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
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
              className="bg-white dark:bg-gray-800 p-4 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-between group hover:border-brand-200 dark:hover:border-brand-800 transition-colors"
            >
              <div className="flex items-center space-x-4 overflow-hidden">
                <div className={`p-3 rounded-xl flex-shrink-0 ${file.type === 'PYQ' ? 'bg-orange-50 dark:bg-orange-900/20 text-orange-500 dark:text-orange-400' : 'bg-blue-50 dark:bg-blue-900/20 text-blue-500 dark:text-blue-400'}`}>
                  <FileText className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-bold text-gray-800 dark:text-gray-200 truncate pr-2">
                    {file.displayTitle || file.name}
                  </h4>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">{file.type}</span>
                    <span className="text-[10px] text-gray-300 dark:text-gray-600">•</span>
                    <span className="text-[10px] text-gray-400 dark:text-gray-500">{file.size}</span>
                    <span className="text-[10px] text-gray-300 dark:text-gray-600">•</span>
                    <span className="text-[10px] text-gray-400 dark:text-gray-500">{file.date}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-1 pl-2">
                <button 
                    onClick={() => handleOpenFile(file)}
                    className="p-2 text-gray-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
                    title="View PDF"
                >
                  <Eye className="w-5 h-5" />
                </button>
                <button 
                    onClick={() => removeDownload(file.id)}
                    className="p-2 text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
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
          <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-300 dark:text-gray-600 mb-4">
            <DownloadIcon className="w-10 h-10" />
          </div>
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">No downloads yet</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-[200px] mt-1">Files you view from the PYQ Bank will appear here.</p>
        </div>
      )}

      <div className="bg-brand-50 dark:bg-brand-900/10 rounded-2xl p-4 flex items-center space-x-3 border border-brand-100 dark:border-brand-900/20">
        <FolderOpen className="w-5 h-5 text-brand-600 dark:text-brand-400" />
        <p className="text-xs text-brand-700 dark:text-brand-300 font-medium leading-relaxed">
          Storage used: <span className="font-bold text-brand-900 dark:text-brand-100">{(downloadedFiles.length * 0.1).toFixed(1)} MB</span> (Links only)
        </p>
      </div>
    </div>
  );
};

export default Downloads;
