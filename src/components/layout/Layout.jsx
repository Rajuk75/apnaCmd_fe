import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLanguage } from '../../context/LanguageContext';

const Layout = ({ children }) => {
  const { getText, text } = useLanguage();

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col font-sans text-slate-900">
      <Navbar />

      <main className="flex-grow">
        {children}
      </main>

      <div className="relative z-50 bg-[#0a0a0a]">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
