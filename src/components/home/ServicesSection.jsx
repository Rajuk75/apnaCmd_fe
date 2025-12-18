import React from 'react';
import { ArrowRight, ArrowUpRight, Code2, Smartphone, BarChart3, Shield, Cpu, Cloud } from 'lucide-react';
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

  const icons = [Code2, Smartphone, BarChart3, Shield, Cpu, Cloud];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern-blue opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section 1: What We Do */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-40">
          {/* Left: Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-xs font-mono tracking-widest text-blue-600 uppercase mb-6">
                {getText(content.LABEL)}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-[1.1] mb-6">
                {getText(content.TITLE)}
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                {getText(content.SUBTITLE)}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {content.FEATURES?.map((feature, index) => (
                <div key={index} className="flex gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500 group-hover:border-blue-500 transition-all duration-300">
                    {index === 0 ? (
                      <Code2 className="w-5 h-5 text-blue-500 group-hover:text-white transition-colors" />
                    ) : (
                      <Smartphone className="w-5 h-5 text-blue-500 group-hover:text-white transition-colors" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-bold text-xl mb-2">{getText(feature.title)}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{getText(feature.description)}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="primary" onClick={handleWhatsAppClick}>
                {getText(content.CTA_PRIMARY)}
              </Button>
              <Button variant="secondary" onClick={handleViewServices}>
                {getText(content.CTA_SECONDARY)}
              </Button>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-100/50 rounded-3xl blur-3xl"></div>
            <div className="relative border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-soft-lg">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 bg-slate-50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <span className="text-xs font-mono text-slate-400">~/sagar-tech</span>
                <div className="w-12"></div>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm space-y-3 bg-slate-900 text-slate-100">
                <div className="flex items-center gap-2">
                  <span className="text-blue-400">$</span>
                  <span>npx create-project my-app</span>
                </div>
                <div className="text-slate-400 pl-4">
                  <p>Creating a new project...</p>
                  <p className="text-green-400 mt-2">✓ Dependencies installed</p>
                  <p className="text-green-400">✓ Configuration complete</p>
                  <p className="text-green-400">✓ Project ready</p>
                </div>
                <div className="flex items-center gap-2 pt-4">
                  <span className="text-blue-400">$</span>
                  <span>npm run dev</span>
                  <span className="inline-block w-2 h-4 bg-blue-400 animate-pulse"></span>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-blue-glow flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                Deployed
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Infrastructure */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-40">
          {/* Left: Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-blue-100/50 rounded-3xl blur-3xl"></div>
            <div className="relative border border-slate-200 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-white aspect-square flex items-center justify-center shadow-soft-lg">
              {/* Grid Background */}
              <div className="absolute inset-0 grid-pattern-blue"></div>
              
              {/* Central Element */}
              <div className="relative z-10">
                <div className="w-32 h-32 rounded-full border-2 border-blue-200 bg-white flex items-center justify-center animate-pulse-slow shadow-soft-lg">
                  <div className="w-24 h-24 rounded-full border border-blue-300 bg-blue-50 flex items-center justify-center">
                    <Shield className="w-10 h-10 text-blue-500" />
                  </div>
                </div>
                
                {/* Orbiting Elements */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 animate-float shadow-blue-glow"></div>
                <div className="absolute top-1/2 -right-8 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-300 animate-float-delayed"></div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-blue-400 animate-float"></div>
              </div>

              {/* Corner Labels */}
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg border border-blue-100 bg-white/90 backdrop-blur-sm shadow-soft">
                <span className="text-xs font-mono text-blue-600 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  Secure
                </span>
              </div>
              <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg border border-blue-100 bg-white/90 backdrop-blur-sm shadow-soft">
                <span className="text-xs font-mono text-blue-600 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  Encrypted
                </span>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <span className="inline-block px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-xs font-mono tracking-widest text-blue-600 uppercase mb-6">
                {getText(text.app.SERVICES?.SEC2?.LABEL)}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-[1.1] mb-6">
                {getText(text.app.SERVICES?.SEC2?.TITLE)}
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                {getText(text.app.SERVICES?.SEC2?.SUBTITLE)}
              </p>
            </div>

            <div className="space-y-6">
              {text.app.SERVICES?.SEC2?.FEATURES?.map((feature, index) => (
                <div key={index} className="flex gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500 group-hover:border-blue-500 transition-all duration-300">
                    <Shield className="w-5 h-5 text-blue-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-bold text-xl mb-2">{getText(feature.title)}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{getText(feature.description)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button variant="primary">
                {getText(content.CTA_PRIMARY)}
              </Button>
            </div>
          </div>
        </div>

        {/* Section 3: Intelligence */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-40">
          {/* Left: Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-xs font-mono tracking-widest text-blue-600 uppercase mb-6">
                {getText(text.app.SERVICES?.SEC3?.LABEL)}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-[1.1] mb-6">
                {getText(text.app.SERVICES?.SEC3?.TITLE)}
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                {getText(text.app.SERVICES?.SEC3?.SUBTITLE)}
              </p>
            </div>

            <div className="space-y-6">
              {text.app.SERVICES?.SEC3?.FEATURES?.map((feature, index) => (
                <div key={index} className="flex gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500 group-hover:border-blue-500 transition-all duration-300">
                    <BarChart3 className="w-5 h-5 text-blue-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-bold text-xl mb-2">{getText(feature.title)}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{getText(feature.description)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button variant="primary">
                {getText(content.CTA_PRIMARY)}
              </Button>
            </div>
          </div>

          {/* Right: Chart Visual */}
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-100/50 rounded-3xl blur-3xl"></div>
            <div className="relative border border-slate-200 rounded-2xl overflow-hidden bg-white p-8 shadow-soft-lg">
              {/* Chart Header */}
              <div className="flex items-center justify-between mb-8">
                <h4 className="text-slate-900 font-bold">Analytics Overview</h4>
                <div className="flex gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span className="w-2 h-2 rounded-full bg-blue-200"></span>
                </div>
              </div>

              {/* Bar Chart */}
              <div className="h-48 flex items-end justify-between gap-3 mb-8">
                {[40, 65, 45, 80, 55, 90, 60].map((height, i) => (
                  <div 
                    key={i} 
                    className="w-full bg-blue-50 rounded-t-lg relative group overflow-hidden"
                    style={{ height: '100%' }}
                  >
                    <div 
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg transition-all duration-1000 group-hover:from-blue-600 group-hover:to-blue-500"
                      style={{ height: `${height}%` }}
                    ></div>
                  </div>
                ))}
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-xl bg-blue-50 border border-blue-100">
                  <p className="text-2xl font-bold text-blue-600 mb-1">+124%</p>
                  <p className="text-xs text-slate-500 font-mono uppercase">Growth</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-blue-50 border border-blue-100">
                  <p className="text-2xl font-bold text-blue-600 mb-1">98.5%</p>
                  <p className="text-xs text-slate-500 font-mono uppercase">Uptime</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-blue-50 border border-blue-100">
                  <p className="text-2xl font-bold text-blue-600 mb-1">2.3s</p>
                  <p className="text-xs text-slate-500 font-mono uppercase">Load Time</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="pt-20 border-t border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-xs font-mono tracking-widest text-blue-600 uppercase mb-6">
              Technology
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
              {getText(content.TECH_STACK?.TITLE)}
            </h2>
            <p className="text-slate-500 text-lg">
              {getText(content.TECH_STACK?.SUBTITLE)}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.TECH_STACK?.ITEMS?.map((item, index) => {
              const Icon = icons[index % icons.length];
              return (
                <div 
                  key={index} 
                  className="bg-white border border-slate-200 p-8 rounded-2xl group hover:border-blue-200 hover:shadow-soft-lg transition-all duration-300 relative"
                >
                  <div className="mb-6 w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-blue-500 group-hover:border-blue-500 transition-all duration-300">
                    <Icon className="w-6 h-6 text-blue-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{getText(item.title)}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{getText(item.description)}</p>
                  
                  <ArrowUpRight className="absolute top-8 right-8 w-5 h-5 text-transparent group-hover:text-blue-400 transition-all duration-300" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
