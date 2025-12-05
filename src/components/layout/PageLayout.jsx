import React from 'react';
import Layout from './Layout';
import WaveBackground from '../home/WaveBackground';

const PageLayout = ({ children, title, subtitle }) => {
  return (
    <Layout>
      <div className="relative min-h-[calc(100vh-6rem)] bg-[#0a0a0a] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <WaveBackground />
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 pointer-events-auto">
          {/* Header */}
          {(title || subtitle) && (
            <div className="text-center mb-16 animate-fade-in-up">
              {title && (
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                  {title}
                </h1>
              )}
              {subtitle && (
                <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                  {subtitle}
                </p>
              )}
            </div>
          )}
          
          {/* Page Content */}
          <div className="animate-fade-in-up delay-100">
            {children}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PageLayout;
