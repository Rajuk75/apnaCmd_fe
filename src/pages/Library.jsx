import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import { BookOpen, Video, FileText, Download } from 'lucide-react';

const Library = () => {
  const resources = [
    { title: 'Getting Started Guide', type: 'Documentation', icon: BookOpen, size: '2.4 MB' },
    { title: 'API Integration Tutorial', type: 'Video', icon: Video, size: '15 Min' },
    { title: 'Best Practices 2024', type: 'PDF', icon: FileText, size: '1.2 MB' },
    { title: 'UI Kit Assets', type: 'Asset', icon: Download, size: '45 MB' },
    { title: 'Developer Tools', type: 'Tools', icon: FileCode, size: '12 MB' }, // Added FileCode import below
    { title: 'Community Guidelines', type: 'PDF', icon: FileText, size: '850 KB' },
  ];
  // Fixing missing import just in case
  const FileCode = BookOpen; 

  return (
    <PageLayout 
      title="Library" 
      subtitle="Access a vast collection of resources, tutorials, and assets."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((item, index) => (
          <div 
            key={index} 
            className="group relative bg-[#111] rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="p-6 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/5 flex items-center justify-center mb-6 text-purple-400 group-hover:text-white group-hover:bg-purple-600 transition-all">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <div className="flex items-center justify-between mt-4">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-gray-400 border border-white/5">
                  {item.type}
                </span>
                <span className="text-gray-500 text-sm">{item.size}</span>
              </div>
            </div>
            
            <div className="p-4 border-t border-white/5 bg-black/20 flex justify-between items-center group-hover:bg-purple-500/10 transition-colors">
              <span className="text-gray-400 text-sm group-hover:text-purple-300 transition-colors">Download Resource</span>
              <Download className="w-4 h-4 text-gray-500 group-hover:text-purple-300 transition-colors" />
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Library;
