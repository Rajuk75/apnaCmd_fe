import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Menu, X, Sparkles } from 'lucide-react';
import purpleFluidBg from '../../assets/purple_fluid_bg.png';
import { useLanguage } from '../../context/LanguageContext';
import { ROUTES } from '../../constants/routes';

const Navbar = () => {
  const { language, toggleLanguage, getText, text } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Restore Original Links
  const navLinks = [
    { name: 'Solutions', path: ROUTES.SOLUTIONS },
    { name: 'Case Studies', path: ROUTES.CASE_STUDIES },
    { name: 'Services', path: ROUTES.SERVICES },
    { name: 'Insights', path: ROUTES.INSIGHTS },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full pt-4">
      <nav className="bg-transparent px-8 py-4 flex items-center justify-between w-full">
        {/* Logo */}
        <Link to={ROUTES.HOME} className="flex items-center gap-3 group">
          <div className="p-1.5 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-white font-bold text-xl tracking-tight">
            {getText(text.app.APP_NAME)}
          </span>
        </Link>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex items-center gap-8 bg-black/40 backdrop-blur-md px-12 py-3 rounded-full border-x border-white/5 border-t-2 border-t-red-500 border-b-2 border-b-cyan-500 shadow-[0_-6px_25px_-5px_rgba(239,68,68,0.5),0_6px_25px_-5px_rgba(6,182,212,0.5)]">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="text-gray-400 hover:text-white text-xs font-bold tracking-wider transition-colors duration-200 flex items-center gap-1 uppercase relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Selector (Restored) */}
          <button
            onClick={() => toggleLanguage()}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 text-gray-300 hover:text-white hover:bg-white/5 transition-all text-xs font-bold tracking-wider"
          >
            <Globe className="w-4 h-4" />
            <span className="uppercase">{language}</span>
          </button>

          {/* Login Button (Restored & Styled) */}
          <Link to={ROUTES.LOGIN} className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white px-6 py-2.5 rounded-sm text-xs font-bold tracking-wider uppercase transition-all duration-200 shadow-lg shadow-indigo-500/20 flex items-center gap-2">
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
        <div className="absolute top-24 left-4 right-4 bg-[#111]/95 backdrop-blur-xl border border-white/10 rounded-lg p-6 shadow-2xl md:hidden flex flex-col gap-4 animate-in slide-in-from-top-4 duration-200 z-50">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="text-gray-300 hover:text-white py-3 px-4 hover:bg-white/5 rounded-md transition-colors text-sm font-bold tracking-wider uppercase"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-px bg-white/10 my-2" />
          <div className="flex items-center justify-between px-4">
             <span className="text-gray-400 text-sm font-bold uppercase">Language</span>
             <button
              onClick={() => toggleLanguage()}
              className="flex items-center gap-2 text-white font-medium"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase">{language}</span>
            </button>
          </div>
          <Link to={ROUTES.LOGIN} className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-3 rounded-sm font-bold uppercase tracking-wider mt-4 text-center block">
            {getText(text.button.LOGIN)}
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
