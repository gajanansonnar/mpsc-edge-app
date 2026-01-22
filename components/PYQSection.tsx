
import React, { useState, useMemo } from 'react';
import { MOCK_PYQ_PDFS, PYQ_DRIVE_LINK } from '../constants';
import { PYQPdf } from '../types';
import { FileText, Download, Search, Filter, Calendar, ChevronDown, ChevronRight, X } from 'lucide-react';

interface PYQSectionProps {
  onOpenPdf: (url: string, title: string) => void;
}

const PYQSection: React.FC<PYQSectionProps> = ({ onOpenPdf }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExam, setSelectedExam] = useState<string>('All');
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const [expandedYear, setExpandedYear] = useState<number | null>(2025);

  const examTypes = ['All', 'Rajyaseva', 'Combined'];
  
  const availableYears = useMemo(() => {
    const years = Array.from(new Set(MOCK_PYQ_PDFS.map(pdf => pdf.year))).sort((a, b) => b - a);
    return ['All', ...years.map(String)];
  }, []);

  const filteredPDFs = MOCK_PYQ_PDFS.filter(pdf => {
    const matchesSearch = pdf.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          pdf.year.toString().includes(searchTerm);
    const matchesExam = selectedExam === 'All' || pdf.examType === selectedExam;
    const matchesYear = selectedYear === 'All' || pdf.year.toString() === selectedYear;
    return matchesSearch && matchesExam && matchesYear;
  });

  const groupedByYear = filteredPDFs.reduce((acc, pdf) => {
    if (!acc[pdf.year]) acc[pdf.year] = [];
    acc[pdf.year].push(pdf);
    return acc;
  }, {} as Record<number, typeof filteredPDFs>);

  const sortedYears = Object.keys(groupedByYear).map(Number).sort((a, b) => b - a);

  const toggleYear = (year: number) => {
    setExpandedYear(expandedYear === year ? null : year);
  };

  const clearFilters = () => {
    setSelectedExam('All');
    setSelectedYear('All');
    setSearchTerm('');
  };

  const handleDownloadAction = (pdf: PYQPdf) => {
    const targetUrl = pdf.downloadUrl || PYQ_DRIVE_LINK;
    
    // Save to LocalStorage for "My Downloads" history
    const downloadRecord = {
        id: Date.now().toString(),
        name: pdf.fileName,
        displayTitle: pdf.title,
        size: 'PDF', 
        date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
        type: 'PYQ',
        url: targetUrl
    };

    try {
        const existingDownloads = JSON.parse(localStorage.getItem('mpsc_downloads') || '[]');
        if (!existingDownloads.some((d: any) => d.displayTitle === pdf.title)) {
            const updatedDownloads = [downloadRecord, ...existingDownloads];
            localStorage.setItem('mpsc_downloads', JSON.stringify(updatedDownloads));
        }
    } catch (e) {
        console.error("Failed to save download history", e);
    }

    // Now open the PDF in the viewer
    onOpenPdf(targetUrl, pdf.title);
  };

  return (
    <div className="space-y-6 pb-24 animate-fade-in">
      <div className="flex flex-col space-y-1">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">PYQ PDF Bank</h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm">Official MPSC question papers from 2011 to 2025.</p>
      </div>
      
      {/* Search and Filters */}
      <div className="sticky top-0 bg-gray-50/95 dark:bg-gray-900/95 backdrop-blur-sm z-10 py-2 space-y-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input 
            type="text"
            placeholder="Search papers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl py-3 pl-10 pr-4 text-sm text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-sm transition-all"
          />
        </div>

        <div className="space-y-2">
          {/* Exam Type Filter */}
          <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar pb-1">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-tighter shrink-0 mr-1">Exam:</span>
            {examTypes.map(type => (
              <button
                key={type}
                onClick={() => setSelectedExam(type)}
                className={`px-3 py-1.5 rounded-full text-[11px] font-bold whitespace-nowrap border transition-all ${
                  selectedExam === type 
                  ? 'bg-brand-500 border-brand-500 text-white shadow-sm' 
                  : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Year Filter */}
          <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar pb-1">
             <span className="text-[10px] font-black text-gray-400 uppercase tracking-tighter shrink-0 mr-1">Year:</span>
             {availableYears.map(year => (
              <button
                key={year}
                onClick={() => {
                  setSelectedYear(year);
                  if (year !== 'All') setExpandedYear(parseInt(year));
                }}
                className={`px-3 py-1.5 rounded-full text-[11px] font-bold whitespace-nowrap border transition-all ${
                  selectedYear === year 
                  ? 'bg-brand-500 border-brand-500 text-white shadow-sm' 
                  : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {(selectedExam !== 'All' || selectedYear !== 'All' || searchTerm !== '') && (
          <button 
            onClick={clearFilters}
            className="flex items-center text-[10px] font-bold text-brand-600 dark:text-brand-400 hover:text-brand-700 bg-brand-50 dark:bg-brand-900/20 px-2 py-1 rounded-md"
          >
            <X className="w-3 h-3 mr-1" /> Clear All Filters
          </button>
        )}
      </div>

      {/* Accordion Style Year List */}
      <div className="space-y-4">
        {sortedYears.length === 0 ? (
          <div className="text-center py-20 bg-white dark:bg-gray-800 rounded-3xl border border-dashed border-gray-200 dark:border-gray-700">
            <div className="bg-gray-50 dark:bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Filter className="w-8 h-8 text-gray-200 dark:text-gray-500" />
            </div>
            <p className="text-gray-400 font-medium">No papers match your filters.</p>
            <button onClick={clearFilters} className="text-brand-500 text-sm font-bold mt-2">Reset filters</button>
          </div>
        ) : (
          sortedYears.map(year => (
            <div key={year} className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden transition-all">
              <button 
                onClick={() => toggleYear(year)}
                className={`w-full p-4 flex items-center justify-between text-left transition-colors ${expandedYear === year ? 'bg-brand-50 dark:bg-brand-900/10' : 'hover:bg-gray-50 dark:hover:bg-gray-700'}`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${expandedYear === year ? 'bg-brand-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-400'}`}>
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-lg font-black text-gray-800 dark:text-white tracking-tight">{year} Exam Papers</span>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400 font-medium uppercase tracking-widest">{groupedByYear[year].length} Documents Available</p>
                  </div>
                </div>
                {expandedYear === year ? <ChevronDown className="w-5 h-5 text-brand-600" /> : <ChevronRight className="w-5 h-5 text-gray-300 dark:text-gray-600" />}
              </button>

              {expandedYear === year && (
                <div className="p-4 bg-white dark:bg-gray-800 space-y-4 divide-y divide-gray-50 dark:divide-gray-700">
                  {['Prelims', 'Mains'].map(paperType => {
                    const papers = groupedByYear[year].filter(p => p.paperType === paperType);
                    if (papers.length === 0) return null;
                    
                    return (
                      <div key={paperType} className="pt-3 first:pt-0">
                        <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">{paperType} Papers</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {papers.map(pdf => (
                            <div 
                              key={pdf.id}
                              className="group flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-brand-50 dark:hover:bg-brand-900/20 border border-transparent hover:border-brand-100 dark:hover:border-brand-900/30 transition-all"
                            >
                              <div className="flex items-center space-x-3">
                                <div className="text-brand-500 group-hover:scale-110 transition-transform">
                                  <FileText className="w-5 h-5" />
                                </div>
                                <div>
                                  <div className="text-sm font-bold text-gray-800 dark:text-gray-200">{pdf.examType}</div>
                                  <div className="text-[11px] text-gray-500 dark:text-gray-400 line-clamp-1">{pdf.title}</div>
                                </div>
                              </div>
                              <div className="flex space-x-1">
                                <button 
                                    onClick={() => handleDownloadAction(pdf)}
                                    title="Download and View"
                                    className="p-2 bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 rounded-xl shadow-sm hover:bg-brand-500 hover:text-white dark:hover:text-white transition-all active:scale-90 flex items-center space-x-1"
                                >
                                    <Download className="w-4 h-4" />
                                    <span className="text-[10px] font-bold px-1">Download</span>
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PYQSection;
