import React, { lazy, Suspense, useCallback, memo } from 'react';
import { ArrowRight, Sparkles, ShieldCheck, HeadphonesIcon } from 'lucide-react';
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
      <div className="relative overflow-hidden bg-[#0a0a0a] min-h-[calc(100vh-6rem)] flex items-center justify-center">
        {/* 3D Wave Background */}
        <div className="absolute inset-0 pointer-events-none">
          <WaveBackground />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-xs font-bold tracking-widest text-yellow-400 uppercase">
              {getText(text.app.HERO_BADGE)}
            </span>
          </div>

          {/* Hero Title */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            {getText(text.app.HERO_TITLE)} <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              {getText(text.app.HERO_SUBTITLE)}
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-400 mb-10 leading-relaxed">
            {getText(text.app.HERO_DESCRIPTION)}
          </p>

          {/* CTA Button */}
          <div className="flex flex-col items-center gap-6">
            <div className="relative group cursor-pointer" onClick={handleWhatsAppClick}>
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-200"></div>
              <button className="relative px-8 py-4 bg-black rounded-full leading-none flex items-center divide-x divide-gray-600">
                <span className="flex items-center space-x-5">
                  <span className="pr-6 text-gray-100 text-lg font-medium">{getText(text.button.GET_STARTED)}</span>
                </span>
                <span className="pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200">
                  <ArrowRight className="w-5 h-5" />
                </span>
              </button>
            </div>

            {/* Features */}
            <div className="flex items-center gap-6 text-sm text-gray-500 mt-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span>{getText(text.app.FEATURE_1)}</span>
              </div>
              <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
              <div className="flex items-center gap-2">
                <HeadphonesIcon className="w-4 h-4" />
                <span>{getText(text.app.FEATURE_2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
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
