import React from 'react';
import { Zap, Globe, Smartphone, Cpu, Shield, Code, Terminal, Play, Phone, Server, Database, Layout, Rocket } from 'lucide-react';

const FeatureCard = ({ title, description, children, className = "" }) => (
  <div className={`bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 flex flex-col hover:border-zinc-700 transition-colors duration-300 ${className}`}>
    <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
    <p className="text-zinc-400 text-sm leading-relaxed mb-6">{description}</p>
    <div className="mt-auto">
      {children}
    </div>
  </div>
);

const StatItem = ({ value, label }) => (
  <div className="flex flex-col">
    <span className="text-white font-bold text-xl">{value}</span>
    <span className="text-zinc-500 text-xs">{label}</span>
  </div>
);

const ListItem = ({ icon: Icon, text }) => (
  <div className="flex items-center gap-3 py-1">
    <div className="w-0.5 h-4 bg-zinc-700"></div>
    {Icon && <Icon size={16} className="text-white" />}
    <span className="text-zinc-300 text-sm font-medium">{text}</span>
  </div>
);

const Insights = () => {
  return (
    <section id="insights" className="py-24 bg-[#0a0a0a] text-white font-sans selection:bg-white/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <span className="text-xs font-bold tracking-widest text-zinc-400 uppercase">OUR EXPERTISE</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight max-w-4xl leading-[1.1]">
            Building the most advanced software solutions for your business
          </h1>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Web Development */}
          <FeatureCard 
            title="Custom Web Development" 
            description="We build high-performance, scalable, and visually stunning websites tailored to your brand. Using the latest technologies to ensure speed and SEO optimization."
          >
            <div className="space-y-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-white font-medium text-sm"><Zap size={14} /> High Performance</div>
                <p className="text-zinc-500 text-xs pl-6">Blazing fast load times</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-white font-medium text-sm"><Layout size={14} /> Modern UI/UX</div>
                <p className="text-zinc-500 text-xs pl-6">Intuitive and engaging designs</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-white font-medium text-sm"><Globe size={14} /> SEO Optimized</div>
                <p className="text-zinc-500 text-xs pl-6">Rank higher on search engines</p>
              </div>
            </div>
          </FeatureCard>

          {/* Card 2: Mobile App Development */}
          <FeatureCard 
            title="Mobile App Development" 
            description="Native and cross-platform mobile applications that provide seamless user experiences on iOS and Android devices."
          >
            <div className="flex gap-8 mb-8">
              <StatItem value="4.8+" label="App Store Rating" />
              <StatItem value="100%" label="Client Satisfaction" />
            </div>
            
            <div className="bg-zinc-950 rounded-xl p-4 border border-zinc-800 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-zinc-400">iOS (Swift/SwiftUI)</span>
                <div className="h-1.5 w-16 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-blue-500 rounded-full"></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-zinc-400">Android (Kotlin/Jetpack)</span>
                <div className="h-1.5 w-16 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full w-1/2 bg-purple-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </FeatureCard>

          {/* Card 3: AI & ML */}
          <FeatureCard 
            title="AI & Machine Learning" 
            description="Integrate cutting-edge AI models into your business processes. From chatbots to predictive analytics, we help you leverage the power of AI."
          >
            <div className="flex gap-8 mb-12">
              <StatItem value="24/7" label="Automation" />
              <StatItem value="Smart" label="Insights" />
            </div>
            
            <div className="flex items-center justify-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center">
                <Cpu size={20} fill="currentColor" />
              </div>
              <div className="px-3 py-1 bg-zinc-800 rounded-full text-xs font-mono text-zinc-400">DATA</div>
              <div className="px-3 py-1 bg-zinc-800 rounded-full text-xs font-mono text-zinc-400">MODEL</div>
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20"></div>
              </div>
            </div>
          </FeatureCard>

          {/* Card 4: Full Stack Solutions (Wide) */}
          <FeatureCard 
            title="Full Stack Solutions" 
            description="End-to-end software development services. We handle everything from frontend design to backend architecture and database management."
            className="md:col-span-2 relative overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-2">
                <ListItem icon={Server} text="Scalable Architecture" />
                <ListItem icon={Database} text="Database Management" />
                <ListItem icon={Shield} text="Security First" />
                <ListItem icon={Code} text="API Integration" />
                <ListItem icon={Rocket} text="Cloud Deployment" />
                <ListItem icon={Terminal} text="DevOps & CI/CD" />
              </div>
              
              <div className="relative h-48 md:h-full min-h-[200px] flex items-center justify-center">
                 {/* Abstract visual for the tech sphere */}
                 <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-400/20 via-indigo-500/20 to-purple-600/20 blur-xl absolute"></div>
                 <div className="w-32 h-32 rounded-full border border-zinc-700 flex items-center justify-center relative z-10 bg-black/50 backdrop-blur-sm">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-blue-100 to-indigo-200 opacity-80 animate-pulse"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Code size={24} className="text-black mix-blend-overlay" />
                    </div>
                 </div>
              </div>
            </div>
          </FeatureCard>

          {/* Card 5: Cloud & DevOps */}
          <FeatureCard 
            title="Cloud & DevOps" 
            description="Robust cloud infrastructure and DevOps practices to ensure your applications are always up, secure, and scalable."
          >
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-white font-medium text-sm">AWS, Azure & GCP</div>
                  <p className="text-zinc-500 text-xs">Multi-cloud expertise</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-white font-medium text-sm">Docker & Kubernetes</div>
                  <p className="text-zinc-500 text-xs">Containerization & Orchestration</p>
                </div>
              </div>
              
              <button className="bg-white text-black text-xs font-bold py-3 px-6 rounded-full hover:bg-zinc-200 transition-colors w-fit mt-4">
                CONTACT US
              </button>
            </div>
          </FeatureCard>

        </div>
      </div>
    </section>
  );
};

export default Insights;
