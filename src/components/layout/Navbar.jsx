import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Menu, X, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { ROUTES } from '../../constants/routes';

const Navbar = () => {
  const { language, toggleLanguage, getText, text } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: getText(text.app.NAV_DASHBOARD), path: '#solutions' },
    { name: getText(text.app.NAV_LIBRARY), path: '#' },
    { name: getText(text.app.NAV_PRICING), path: '#' },
    { name: getText(text.app.NAV_BLOG), path: '#' },
  ];

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center justify-between w-full max-w-7xl shadow-2xl shadow-purple-500/10">
        {/* Logo */}
        <Link to={ROUTES.HOME} className="flex items-center gap-2 group">
          <div className="p-1.5 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg group-hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-white font-bold text-lg tracking-tight">
            {getText(text.app.APP_NAME)}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.path}
              className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Selector */}
          <button
            onClick={() => toggleLanguage()}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 text-gray-300 hover:text-white hover:bg-white/5 transition-all text-sm font-medium"
          >
            <Globe className="w-4 h-4" />
            <span className="uppercase">{language}</span>
          </button>

          {/* Login Button */}
          <Link to={ROUTES.LOGIN} className="bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border border-white/5">
            {getText(text.button.LOGIN)}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 left-4 right-4 bg-[#0a0a0a] border border-white/10 rounded-2xl p-4 shadow-2xl md:hidden flex flex-col gap-4 animate-in slide-in-from-top-4 duration-200">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.path}
              className="text-gray-300 hover:text-white py-2 px-4 hover:bg-white/5 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="h-px bg-white/10 my-2" />
          <div className="flex items-center justify-between px-4">
            <span className="text-gray-400 text-sm">Language</span>
            <button
              onClick={() => toggleLanguage()}
              className="flex items-center gap-2 text-white font-medium"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase">{language}</span>
            </button>
          </div>
          <Link to={ROUTES.LOGIN} className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2.5 rounded-xl font-medium mt-2 text-center block">
            {getText(text.button.LOGIN)}
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
