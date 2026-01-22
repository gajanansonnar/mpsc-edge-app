
import React from 'react';
import { ChevronLeft, Download, ExternalLink, Loader2 } from 'lucide-react';

interface PDFViewerProps {
  url: string;
  title: string;
  onBack: () => void;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ url, title, onBack }) => {
  const [isLoading, setIsLoading] = React.useState(true);

  // Convert Drive view link to preview link for embedding
  const getEmbedUrl = (link: string) => {
    if (link.includes('drive.google.com')) {
      return link.replace(/\/view.*$/, '/preview');
    }
    return link;
  };

  const embedUrl = getEmbedUrl(url);

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] animate-fade-in bg-white dark:bg-gray-800 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm">
      {/* Viewer Header */}
      <div className="bg-white dark:bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-100 dark:border-gray-700">
        <div className="flex items-center space-x-3 overflow-hidden">
          <button 
            onClick={onBack}
            className="p-2 -ml-2 text-gray-500 hover:text-brand-600 hover:bg-brand-50 dark:text-gray-400 dark:hover:bg-gray-700 rounded-xl transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="overflow-hidden">
            <h2 className="text-sm font-bold text-gray-800 dark:text-white truncate">{title}</h2>
            <p className="text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-widest">In-App Viewer</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
            <button 
                onClick={() => window.open(url, '_blank')}
                className="p-2 text-gray-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
                title="Open in new tab"
            >
                <ExternalLink className="w-4 h-4" />
            </button>
        </div>
      </div>

      {/* PDF Container */}
      <div className="flex-1 relative bg-gray-50 dark:bg-gray-900">
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3 z-0">
            <Loader2 className="w-8 h-8 text-brand-500 animate-spin" />
            <p className="text-xs font-bold text-gray-400 animate-pulse">Loading Document...</p>
          </div>
        )}
        
        <iframe
          src={embedUrl}
          className="w-full h-full border-none relative z-10"
          onLoad={() => setIsLoading(false)}
          allow="autoplay"
        ></iframe>
      </div>
      
      {/* Simple Footer Control */}
      <div className="p-3 bg-gray-50 dark:bg-gray-900 flex items-center justify-center border-t border-gray-100 dark:border-gray-700">
         <button 
            onClick={() => window.open(url, '_blank')}
            className="flex items-center space-x-2 px-6 py-2 bg-brand-500 text-white rounded-full text-xs font-bold shadow-lg shadow-brand-100 dark:shadow-none active:scale-95 transition-all"
         >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
         </button>
      </div>
    </div>
  );
};

export default PDFViewer;
