import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Menu, X, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { ROUTES } from '../../constants/routes';

const Navbar = () => {
  const { language, toggleLanguage, getText, text } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Solutions', path: ROUTES.SOLUTIONS },
    { name: 'Case Studies', path: ROUTES.CASE_STUDIES },
    { name: 'Services', path: ROUTES.SERVICES },
    { name: 'Insights', path: ROUTES.INSIGHTS },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav className={`mx-auto max-w-7xl transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-soft border border-slate-200/50' 
          : 'bg-transparent border border-transparent'
      } rounded-full px-6 py-3 flex items-center justify-between`}>
        
        {/* Logo */}
        <Link to={ROUTES.HOME} className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-blue-glow">
              <span className="text-white font-display font-bold text-xl">S</span>
            </div>
          </div>
          <span className="text-slate-900 font-display font-semibold text-xl tracking-tight hidden sm:block">
            {getText(text.app.APP_NAME)}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group rounded-full ${
                location.pathname === link.path 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50/50'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language Selector */}
          <button
            onClick={() => toggleLanguage()}
            className="flex items-center gap-2 px-3 py-2 rounded-full text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-all text-sm font-medium"
          >
            <Globe className="w-4 h-4" />
            <span className="uppercase font-mono text-xs">{language}</span>
          </button>

          {/* Login Button */}
          <Link 
            to={ROUTES.LOGIN} 
            className="group flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 hover:shadow-blue-glow hover:scale-105"
          >
            {getText(text.button.LOGIN)}
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 text-slate-700 hover:bg-blue-50 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div className={`absolute top-20 left-4 right-4 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-soft-lg md:hidden transition-all duration-300 ${
        isMobileMenuOpen 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="p-4 space-y-1">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`flex items-center justify-between py-3 px-4 rounded-xl transition-colors ${
                location.pathname === link.path 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="font-medium">{link.name}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          ))}
        </div>
        
        <div className="border-t border-slate-100 p-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-slate-400 text-sm">Language</span>
            <button
              onClick={() => toggleLanguage()}
              className="flex items-center gap-2 text-slate-700 font-mono text-sm px-3 py-1.5 rounded-full border border-slate-200 hover:bg-blue-50"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase">{language}</span>
            </button>
          </div>
          <Link 
            to={ROUTES.LOGIN} 
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl font-bold transition-all hover:shadow-blue-glow"
          >
            {getText(text.button.LOGIN)}
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
