import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLanguage } from '../../context/LanguageContext';

const Layout = ({ children }) => {
  const { getText, text } = useLanguage();

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-slate-900">
      <Navbar />

      <main className="flex-grow pt-24">
        {children}
      </main>

      <Footer className="relative z-50" />
    </div>
  );
};

export default Layout;
