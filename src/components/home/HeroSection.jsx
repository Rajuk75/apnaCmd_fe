import React, { useCallback, useState } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { ArrowRight, Star, Sparkles, Play, X } from 'lucide-react';
import purpleFluidBg from '../../assets/purple_fluid_bg.png';
import ShowcaseCarousel from './ShowcaseCarousel';
import ServicesSection from './ServicesSection';
import HomeInsights from './HomeInsights';
import FAQSection from './FAQSection';
import { useLanguage } from '../../context/LanguageContext';

const HeroSection = () => {
  const { getText, text } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = text.app.SERVICES?.WHATSAPP?.NUMBER || '6290301341';
    // Construct message with form details
    const msg = `*New Inquiry via Website*\n\nName: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    handleCloseModal();
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col items-center pt-32 pb-0 font-sans tracking-wide">
      {/* 3D Smoke Pattern Background (Matches Delivered Projects) */}
      {/* 3D Smoke Pattern Background - Top Right Focus */}
      <div className="fixed inset-0 z-0 select-none pointer-events-none bg-black">
          <img 
            src={purpleFluidBg} 
            alt="Smoke Pattern" 
            className="w-full h-full object-cover object-right-top opacity-90 scale-125"
            style={{ filter: 'hue-rotate(130deg) saturate(1.4)' }} // Shift Purple to Green
          />
          {/* Radial Mask to focus Top-Right */}
          <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-black/60 to-black"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent"></div>
      </div>
      {/* Particles Background - Full Hero */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0 pointer-events-none"
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: { enable: false, mode: "push" },
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              push: { quantity: 4 },
              repulse: { distance: 200, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#ffffff" },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              outModes: "bounce",
            },
            number: {
              density: { enable: true, area: 800 },
              value: 60,
            },
            opacity: { value: 0.3 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="flex flex-col items-center justify-center">
          
          {/* Text Content */}
          <div className="text-left space-y-8 animate-fade-in-up relative max-w-4xl w-full flex flex-col justify-center min-h-[500px]">
             {/* Subtitle / Tag */}
             <div className="relative pl-4 border-l-2 border-red-500/50">
                <span className="text-sm md:text-base text-gray-400 tracking-widest uppercase">
                  {getText(text.app.HERO_BADGE)}
                </span>
                <div className="absolute top-1/2 left-full w-16 h-[1px] bg-red-500/30 ml-4 hidden md:block"></div>
             </div>

            {/* Main Title */}
             <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
               {getText(text.app.HERO_TITLE)} <br />
               <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                 {getText(text.app.HERO_SUBTITLE)}
               </span>
             </h1>

             {/* Description */}
             <p className="text-gray-400 text-base md:text-lg max-w-md leading-relaxed border-l-2 border-orange-500/50 pl-4">
                {getText(text.app.HERO_DESCRIPTION)}
             </p>

             {/* Buttons and Features */}
             <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-8">
                {/* Gradient Button */}
                <button 
                  onClick={handleOpenModal}
                  className="group relative px-8 py-3 bg-gradient-to-r from-orange-400 to-indigo-600 rounded-sm overflow-hidden"
                >
                  <span className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors duration-300"></span>
                  <div className="relative flex items-center gap-2 text-white font-semibold text-sm tracking-wider uppercase">
                    {getText(text.button.GET_STARTED)}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>

                {/* Features (Restored from Original) */}
                <div className="flex flex-col gap-2 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span>{getText(text.app.FEATURE_1)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                       <span>{getText(text.app.FEATURE_2)}</span>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Embedded Delivered Projects Section */}
      <div className="w-full z-10 mt-12 mb-10 relative">
        <ShowcaseCarousel />
      </div>

      {/* Embedded Services Section - Fades Smoke to Black */}
      <div className="w-full z-10 relative bg-gradient-to-b from-transparent via-black/90 to-[#0a0a0a]">
        <ServicesSection />
      </div>

      {/* Embedded Insights Section - Solid Black */}
      <div className="w-full z-10 relative bg-[#0a0a0a]">
        <HomeInsights />
      </div>

      {/* Embedded FAQ Section - Solid Black */}
      <div className="w-full z-10 mb-0 relative bg-[#0a0a0a]">
        <FAQSection />
      </div>

      {/* Hero Modal (Square Shape) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-fade-in text-left">
           <div className="relative w-full max-w-md aspect-square bg-[#0a0a0a] border border-white/10 shadow-2xl flex flex-col p-8 animate-scale-in">
              {/* Close Button */}
              <button 
                 onClick={handleCloseModal}
                 className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                 aria-label="Close Modal"
              >
                 <X className="w-6 h-6" />
              </button>

              {/* Modal Content */}
              <div className="flex-1 flex flex-col justify-center space-y-6">
                 <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white tracking-tight">Let's Connect</h3>
                    <p className="text-gray-400 text-sm">Fill in your details to start the conversation.</p>
                 </div>

                 <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="space-y-2">
                       <label className="text-xs text-gray-500 uppercase tracking-widest">Name</label>
                       <input 
                          type="text" 
                          name="name"
                          placeholder="Your Name" 
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 transition-colors rounded-none"
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs text-gray-500 uppercase tracking-widest">Phone</label>
                       <input 
                          type="tel" 
                          name="phone"
                          placeholder="Phone Number" 
                          pattern="[0-9]*"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 transition-colors rounded-none"
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs text-gray-500 uppercase tracking-widest">Message</label>
                       <textarea 
                          name="message"
                          placeholder="How can we help?" 
                          rows="3"
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 transition-colors resize-none rounded-none"
                       ></textarea>
                    </div>
                    
                    <button 
                       type="submit"
                       className="w-full bg-gradient-to-r from-orange-400 to-indigo-600 text-white font-bold py-3 uppercase tracking-wider hover:opacity-90 transition-opacity rounded-none mt-2"
                    >
                       Start Chat
                    </button>
                 </form>
              </div>
           </div>
        </div>
      )}

    </div>
  );
};
export default HeroSection;
