import React from 'react';
import Layout from './Layout';

const PageLayout = ({ children, title, subtitle }) => {
  return (
    <Layout>
      <div className="relative min-h-[calc(100vh-6rem)] bg-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 dots-pattern opacity-30"></div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-[100px]"></div>
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 pointer-events-auto">
          {/* Header */}
          {(title || subtitle) && (
            <div className="text-center mb-16 animate-fade-in-up">
              {title && (
                <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6 tracking-tight">
                  {title}
                </h1>
              )}
              {subtitle && (
                <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                  {subtitle}
                </p>
              )}
            </div>
          )}
          
          {/* Page Content */}
          <div className="animate-fade-in-up animation-delay-100">
            {children}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PageLayout;
