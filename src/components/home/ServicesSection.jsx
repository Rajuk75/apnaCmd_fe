import React from 'react';
import { ArrowRight, CheckCircle2, Code2, Smartphone, BarChart3 } from 'lucide-react';
import Button from '../common/Button';
import { useLanguage } from '../../context/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

const ServicesSection = () => {
  const { getText, text } = useLanguage();
  const content = text.app.SERVICES || {};
  const navigate = useNavigate();

  const handleViewServices = () => {
    navigate(ROUTES.LOGIN);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = content.WHATSAPP?.NUMBER || "6290301341";
    const message = getText(content.WHATSAPP?.MESSAGE) || 'Hi, I would like to enquire about your services.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div id="solutions" className="w-full py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#111] rounded-3xl border border-white/5 shadow-2xl p-8 md:p-12 space-y-32">
          {/* Section 1: WHAT WE DO */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Text Content */}
            <div className="space-y-8 relative z-10">
              <div>
                <span className="text-yellow-500 font-bold tracking-wider text-sm uppercase mb-2 block">
                  {getText(content.LABEL)}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                  {getText(content.TITLE)}
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {getText(content.SUBTITLE)}
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-6">
                {content.FEATURES?.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="mt-1">
                      <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20">
                        {index === 0 ? <Code2 className="w-5 h-5 text-yellow-500" /> : <Smartphone className="w-5 h-5 text-yellow-500" />}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-xl mb-2">{getText(feature.title)}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{getText(feature.description)}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button variant="primary" className="flex items-center gap-2" onClick={handleWhatsAppClick}>
                  {getText(content.CTA_PRIMARY)}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="secondary" onClick={handleViewServices}>
                  {getText(content.CTA_SECONDARY)}
                </Button>
              </div>
            </div>

            {/* Right Column: Image/Visual */}
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[100px] -z-10"></div>
              
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#111] group">
                {/* Placeholder for Dashboard/Software Image */}
                <div className="aspect-[4/3] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] relative p-8 flex flex-col">
                  {/* Mock UI Header */}
                  <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                    </div>
                    <div className="h-2 w-20 bg-white/10 rounded-full"></div>
                  </div>
                  
                  {/* Mock UI Content */}
                  <div className="flex-1 grid grid-cols-3 gap-4">
                    <div className="col-span-2 space-y-4">
                      <div className="h-32 bg-white/5 rounded-xl border border-white/5 p-4">
                         <div className="h-2 w-1/3 bg-yellow-500/50 rounded-full mb-4"></div>
                         <div className="space-y-2">
                           <div className="h-2 w-full bg-white/10 rounded-full"></div>
                           <div className="h-2 w-5/6 bg-white/10 rounded-full"></div>
                         </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                         <div className="h-24 bg-white/5 rounded-xl border border-white/5"></div>
                         <div className="h-24 bg-white/5 rounded-xl border border-white/5"></div>
                      </div>
                    </div>
                    <div className="col-span-1 bg-white/5 rounded-xl border border-white/5 p-4 space-y-3">
                       {[...Array(5)].map((_, i) => (
                         <div key={i} className="flex items-center gap-2">
                           <div className="w-6 h-6 rounded-full bg-white/10"></div>
                           <div className="h-2 w-full bg-white/10 rounded-full"></div>
                         </div>
                       ))}
                    </div>
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-[#1a1a1a] border border-yellow-500/20 p-3 md:p-4 rounded-xl shadow-xl flex items-center gap-2 md:gap-3 animate-bounce-slow max-w-[calc(100%-2rem)]">
                    <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">Project Status</div>
                      <div className="text-white font-bold">Delivered</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: INFRASTRUCTURE */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Image/Visual */}
            <div className="relative order-2 lg:order-1">
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -z-10"></div>
              
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#111] group">
                {/* Placeholder for Cloud/Security Image */}
                <div className="aspect-[4/3] bg-gradient-to-br from-[#0f172a] to-[#0a0a0a] relative p-8 flex flex-col items-center justify-center overflow-hidden">
                  
                  {/* Animated Grid Background */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>

                  {/* Central Shield Icon */}
                  <div className="relative z-10 w-32 h-32 bg-blue-500/10 rounded-full flex items-center justify-center border border-blue-500/20 shadow-[0_0_40px_rgba(59,130,246,0.2)] animate-pulse-slow">
                    <div className="w-24 h-24 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-500/30">
                       <CheckCircle2 className="w-12 h-12 text-blue-500" />
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute top-12 left-12 bg-[#1e293b] p-3 rounded-lg border border-blue-500/20 shadow-lg animate-float">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-xs text-blue-200 font-mono">System Secure</span>
                    </div>
                  </div>

                  <div className="absolute bottom-12 right-12 bg-[#1e293b] p-3 rounded-lg border border-blue-500/20 shadow-lg animate-float-delayed">
                    <div className="flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-blue-400" />
                      <span className="text-xs text-blue-200 font-mono">Encrypted</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="space-y-8 relative z-10 order-1 lg:order-2">
              <div>
                <span className="text-blue-500 font-bold tracking-wider text-sm uppercase mb-2 block">
                  {getText(text.app.SERVICES?.SEC2?.LABEL)}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                  {getText(text.app.SERVICES?.SEC2?.TITLE)}
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {getText(text.app.SERVICES?.SEC2?.SUBTITLE)}
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-6">
                {text.app.SERVICES?.SEC2?.FEATURES?.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="mt-1">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                        <CheckCircle2 className="w-5 h-5 text-blue-500" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-xl mb-2">{getText(feature.title)}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{getText(feature.description)}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button variant="primary" className="flex items-center gap-2">
                  {getText(content.CTA_PRIMARY)}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

          </div>

          {/* Section 3: INTELLIGENCE */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Text Content */}
            <div className="space-y-8 relative z-10">
              <div>
                <span className="text-purple-500 font-bold tracking-wider text-sm uppercase mb-2 block">
                  {getText(text.app.SERVICES?.SEC3?.LABEL)}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                  {getText(text.app.SERVICES?.SEC3?.TITLE)}
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {getText(text.app.SERVICES?.SEC3?.SUBTITLE)}
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-6">
                {text.app.SERVICES?.SEC3?.FEATURES?.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="mt-1">
                      <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                        <BarChart3 className="w-5 h-5 text-purple-500" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-xl mb-2">{getText(feature.title)}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{getText(feature.description)}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button variant="primary" className="flex items-center gap-2">
                  {getText(content.CTA_PRIMARY)}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Right Column: Image/Visual */}
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] -z-10"></div>
              
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#111] group">
                {/* Placeholder for Analytics Image */}
                <div className="aspect-[4/3] bg-gradient-to-br from-[#2e1065] to-[#0a0a0a] relative p-8 flex flex-col">
                  
                  {/* Mock Chart Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-xs font-bold text-purple-200 uppercase tracking-wider">Analytics Overview</div>
                    <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                      <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                    </div>
                  </div>

                  {/* Mock Charts */}
                  <div className="flex-1 flex flex-col gap-4">
                    {/* Bar Chart Area */}
                    <div className="flex-1 flex items-end justify-between gap-2 px-4 pb-4 border-b border-white/10">
                      {[40, 70, 45, 90, 60, 80, 50].map((h, i) => (
                        <div key={i} className="w-full bg-purple-500/30 rounded-t-sm relative group/bar">
                          <div 
                            className="absolute bottom-0 left-0 right-0 bg-purple-500 rounded-t-sm transition-all duration-1000"
                            style={{ height: `${h}%` }}
                          ></div>
                        </div>
                      ))}
                    </div>

                    {/* Line Chart Area */}
                    <div className="h-1/3 relative">
                       <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                         <path d="M0 50 Q 25 20 50 50 T 100 30" fill="none" stroke="url(#gradient)" strokeWidth="3" />
                         <defs>
                           <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                             <stop offset="0%" stopColor="#a855f7" />
                             <stop offset="100%" stopColor="#ec4899" />
                           </linearGradient>
                         </defs>
                       </svg>
                       
                       {/* Floating Data Point */}
                       <div className="absolute top-0 right-0 bg-white text-black text-[10px] font-bold px-2 py-1 rounded shadow-lg animate-bounce">
                         +124% Growth
                       </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>

          {/* Section 4: Technologies We Use */}
          <div className="pt-20 border-t border-white/5">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {getText(content.TECH_STACK?.TITLE)}
              </h2>
              <p className="text-gray-400 text-lg">
                {getText(content.TECH_STACK?.SUBTITLE)}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              {content.TECH_STACK?.ITEMS?.map((item, index) => (
                <div key={index} className="bg-[#111] p-8 hover:bg-[#161616] transition-colors group">
                  <div className="mb-6 w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-yellow-500/10 transition-colors">
                    {index === 0 && <Code2 className="w-6 h-6 text-yellow-500" />}
                    {index === 1 && <Smartphone className="w-6 h-6 text-yellow-500" />}
                    {index === 2 && <BarChart3 className="w-6 h-6 text-yellow-500" />}
                    {index === 3 && <CheckCircle2 className="w-6 h-6 text-yellow-500" />}
                    {index === 4 && <Smartphone className="w-6 h-6 text-yellow-500" />}
                    {index === 5 && <Code2 className="w-6 h-6 text-yellow-500" />}
                    {index === 6 && <Code2 className="w-6 h-6 text-yellow-500" />}
                    {index === 7 && <CheckCircle2 className="w-6 h-6 text-yellow-500" />}
                    {index === 8 && <BarChart3 className="w-6 h-6 text-yellow-500" />}
                    {index === 9 && <Smartphone className="w-6 h-6 text-yellow-500" />}
                    {index === 10 && <BarChart3 className="w-6 h-6 text-yellow-500" />}
                    {index === 11 && <Code2 className="w-6 h-6 text-yellow-500" />}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{getText(item.title)}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{getText(item.description)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
