import React, { lazy, Suspense, useCallback, memo } from 'react';
import { ArrowRight, ArrowUpRight, Shield, Zap, Star } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Button from '../components/common/Button';
import WaveBackground from '../components/home/WaveBackground';
import SectionLoader from '../components/common/SectionLoader';
import { useLanguage } from '../context/LanguageContext';

const ShowcaseCarousel = lazy(() => 
  import(/* webpackPrefetch: true */ '../components/home/ShowcaseCarousel')
);
const ServicesSection = lazy(() => 
  import(/* webpackPrefetch: true */ '../components/home/ServicesSection')
);
const HomeInsights = lazy(() => 
  import(/* webpackPrefetch: true */ '../components/home/HomeInsights')
);
const FAQSection = lazy(() => 
  import(/* webpackPrefetch: true */ '../components/home/FAQSection')
);

const Home = () => {
  const { getText, text } = useLanguage();

  const handleWhatsAppClick = useCallback(() => {
    const phoneNumber = text.app.SERVICES?.WHATSAPP?.NUMBER || '6290301341';
    const message = getText(text.app.SERVICES?.WHATSAPP?.MESSAGE) || 'Hi, I would like to enquire about your services.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }, [text, getText]);

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
        {/* 3D Wave Background */}
        <div className="absolute inset-0 pointer-events-none">
          <WaveBackground />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8 animate-fade-in">
            <Star className="w-4 h-4 text-blue-500 fill-blue-500" />
            <span className="text-xs font-mono tracking-widest text-blue-600 uppercase font-medium">
              {getText(text.app.HERO_BADGE)}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 animate-fade-in-up">
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-slate-900 leading-[1.1] tracking-tight">
              {getText(text.app.HERO_TITLE)}
            </span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold mt-2 leading-[1.1] tracking-tight text-gradient-blue">
              {getText(text.app.HERO_SUBTITLE)}
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-500 mb-12 leading-relaxed animate-fade-in-up animation-delay-200">
            {getText(text.app.HERO_DESCRIPTION)}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up animation-delay-400">
            <button 
              onClick={handleWhatsAppClick}
              className="group flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-blue-glow-lg hover:scale-105"
            >
              {getText(text.button.GET_STARTED)}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group flex items-center gap-3 bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 shadow-soft">
              Watch Demo
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Features Strip */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-400 animate-fade-in-up animation-delay-600">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-blue-500" />
              <span>{getText(text.app.FEATURE_1)}</span>
            </div>
            <div className="w-px h-4 bg-slate-200 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-blue-500" />
              <span>{getText(text.app.FEATURE_2)}</span>
            </div>
            <div className="w-px h-4 bg-slate-200 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-blue-500" />
              <span>Premium Quality</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-slate-400 font-mono tracking-widest">SCROLL</span>
          <div className="w-px h-8 bg-gradient-to-b from-blue-400 to-transparent"></div>
        </div>
      </div>
      
      {/* Sections */}
      <Suspense fallback={<SectionLoader />}>
        <ShowcaseCarousel />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <ServicesSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <HomeInsights />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <FAQSection />
      </Suspense>
    </Layout>
  );
};

export default Home;
