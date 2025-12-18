import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import { BookOpen, Video, FileText, Download, Code2 } from 'lucide-react';

const Library = () => {
  const resources = [
    { title: 'Getting Started Guide', type: 'Documentation', icon: BookOpen, size: '2.4 MB' },
    { title: 'API Integration Tutorial', type: 'Video', icon: Video, size: '15 Min' },
    { title: 'Best Practices 2024', type: 'PDF', icon: FileText, size: '1.2 MB' },
    { title: 'UI Kit Assets', type: 'Asset', icon: Download, size: '45 MB' },
    { title: 'Developer Tools', type: 'Tools', icon: Code2, size: '12 MB' },
    { title: 'Community Guidelines', type: 'PDF', icon: FileText, size: '850 KB' },
  ];

  return (
    <PageLayout 
      title="Library" 
      subtitle="Access a vast collection of resources, tutorials, and assets."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((item, index) => (
          <div 
            key={index} 
            className="group relative bg-white rounded-2xl border border-slate-200 hover:border-blue-300 transition-all duration-300 overflow-hidden hover:-translate-y-1 shadow-soft hover:shadow-soft-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="p-6 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-500 group-hover:border-blue-500 transition-all">
                <item.icon className="w-6 h-6 text-blue-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
              <div className="flex items-center justify-between mt-4">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600 border border-blue-100">
                  {item.type}
                </span>
                <span className="text-slate-400 text-sm">{item.size}</span>
              </div>
            </div>
            
            <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex justify-between items-center group-hover:bg-blue-50/50 transition-colors">
              <span className="text-slate-500 text-sm group-hover:text-blue-600 transition-colors">Download Resource</span>
              <Download className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Library;
