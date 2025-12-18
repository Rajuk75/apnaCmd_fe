import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import { Smartphone, Zap, Code2 } from 'lucide-react';

const AppDevelopment = () => {
  const platforms = [
    { name: "iOS", icon: Smartphone, desc: "Native Swift apps for iPhone & iPad" },
    { name: "Android", icon: Smartphone, desc: "Kotlin-based apps for the Android ecosystem" },
    { name: "React Native", icon: Code2, desc: "Cross-platform efficiency with native performance" },
    { name: "Flutter", icon: Zap, desc: "Beautiful UI compiled for all platforms" }
  ];

  return (
    <PageLayout 
      title="App Development" 
      subtitle="Native and cross-platform mobile experiences for iOS and Android."
    >
      <div className="space-y-24">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-8">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
              Your Business, <br/>
              <span className="text-gradient-blue">In Everyone's Pocket.</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Mobile usage has surpassed desktop. If you aren't mobile-first, you're last. We design and build polished, high-performance mobile applications that users love to open.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-full hover:shadow-blue-glow-lg transition-all hover:scale-105">
                Start a Project
              </button>
              <button className="px-8 py-3 border border-slate-200 text-slate-700 font-bold rounded-full hover:bg-blue-50 hover:border-blue-300 transition-all shadow-soft">
                View Portfolio
              </button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative z-10 w-full max-w-[400px] mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600" 
                alt="Mobile App" 
                className="rounded-[3rem] border-8 border-slate-200 shadow-soft-lg"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/50 blur-[100px] -z-10 rounded-full"></div>
          </div>
        </div>

        {/* Platforms Grid */}
        <div>
          <h3 className="text-2xl font-display font-bold text-slate-900 mb-8 text-center">Platforms We Master</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((p, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 text-center hover:-translate-y-1 transition-transform duration-300 shadow-soft hover:shadow-soft-lg group">
                <div className="w-12 h-12 mx-auto bg-blue-50 border border-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-500 group-hover:border-blue-500 transition-all">
                  <p.icon className="w-6 h-6 text-blue-500 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-slate-900 font-bold text-lg mb-2">{p.name}</h4>
                <p className="text-slate-500 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200 rounded-2xl p-6 md:p-12">
          <h3 className="text-2xl font-display font-bold text-slate-900 mb-12 text-center">Our Mobile Lifecycle</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center relative">
              <div className="w-16 h-16 mx-auto bg-blue-500 text-white rounded-2xl flex items-center justify-center text-xl font-bold mb-4 shadow-blue-glow">1</div>
              <h4 className="text-slate-900 font-bold mb-2">Strategy</h4>
              <p className="text-slate-500 text-sm">Validating ideas and user journeys.</p>
            </div>
            <div className="text-center relative">
              <div className="w-16 h-16 mx-auto bg-blue-500 text-white rounded-2xl flex items-center justify-center text-xl font-bold mb-4 shadow-blue-glow">2</div>
              <h4 className="text-slate-900 font-bold mb-2">Design</h4>
              <p className="text-slate-500 text-sm">Crafting intuitive, stunning UIs.</p>
            </div>
            <div className="text-center relative">
              <div className="w-16 h-16 mx-auto bg-blue-500 text-white rounded-2xl flex items-center justify-center text-xl font-bold mb-4 shadow-blue-glow">3</div>
              <h4 className="text-slate-900 font-bold mb-2">Dev</h4>
              <p className="text-slate-500 text-sm">Clean, robust, and scalable code.</p>
            </div>
            <div className="text-center relative">
              <div className="w-16 h-16 mx-auto bg-blue-500 text-white rounded-2xl flex items-center justify-center text-xl font-bold mb-4 shadow-blue-glow">4</div>
              <h4 className="text-slate-900 font-bold mb-2">Launch</h4>
              <p className="text-slate-500 text-sm">App Store optimization & release.</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AppDevelopment;
