import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import { ExternalLink, ArrowRight, TrendingUp, Users, Clock, Trophy } from 'lucide-react';

const CaseStudies = () => {
  const cases = [
    {
      id: 1,
      client: "FinTech Corp",
      project: "Mobile Banking Revolution",
      category: "FinTech",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1600",
      logo: "FC",
      color: "blue",
      challenge: "FinTech Corp faced high user churn due to a sluggish, outdated mobile app that couldn't handle peak transaction loads.",
      solution: "We rebuilt the app from the ground up using React Native, implementing biometric security and a microservices backend.",
      outcome: "Login times dropped by 80%, and transaction capability scaled to 50k/sec.",
      stats: [
        { label: "Retention", value: "+40%", icon: Users },
        { label: "Uptime", value: "99.99%", icon: Clock },
        { label: "Rating", value: "4.9/5", icon: TrendingUp }
      ]
    },
    {
      id: 2,
      client: "HealthPlus",
      project: "Telemedicine Platform",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1600",
      logo: "H+",
      color: "teal",
      challenge: "Doctors struggled with disconnected patient data and poor video call quality during remote consultations.",
      solution: "Integrated a WebRTC video engine with a secure EHR dashboard, allowing real-time data syncing during calls.",
      outcome: "Consultation efficiency improved by 60%, enabling doctors to see 5 more patients daily.",
      stats: [
        { label: "Daily Calls", value: "500+", icon: Users },
        { label: "Latency", value: "<100ms", icon: Clock },
        { label: "Security", value: "HIPAA", icon: Trophy }
      ]
    },
    {
      id: 3,
      client: "Urban Retail",
      project: "Omnichannel Commerce",
      category: "Retail",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1600",
      logo: "UR",
      color: "orange",
      challenge: "Managing inventory across 500+ physical stores and the online shop was a logistical nightmare.",
      solution: "Developed a headless commerce architecture connecting POS systems with a unified inventory cloud.",
      outcome: "Stock discrepancies reduced to near zero, and online sales grew by 150% in the first quarter.",
      stats: [
        { label: "Growth", value: "150%", icon: TrendingUp },
        { label: "Stores", value: "520", icon: Users },
        { label: "Sync", value: "Real-time", icon: Clock }
      ]
    }
  ];

  return (
    <PageLayout 
      title="Success Stories" 
      subtitle="Deep dives into how we solve complex problems."
    >
      <div className="space-y-32">
        {cases.map((study, index) => (
          <div key={study.id} className="group">
            {/* Header / Project Name */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
              <div>
                <span className={`text-${study.color}-400 font-bold tracking-widest uppercase text-sm mb-2 block`}>
                  / {study.category} Case Study
                </span>
                <h2 className="text-3xl md:text-6xl font-black text-white">{study.project}</h2>
              </div>
              <div className="hidden md:block">
                 <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all font-medium">
                  Read Full Story <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Main Visual */}
            <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden mb-12 border border-white/10 group-hover:border-white/20 transition-colors">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10"></div>
              <img 
                src={study.image} 
                alt={study.project} 
                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              {/* Overlay Content */}
              <div className="absolute top-8 left-8 z-20">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white font-bold text-xl">
                  {study.logo}
                </div>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left: Challenge & Solution */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">The Challenge</h3>
                  <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-white/10 pl-6">
                    {study.challenge}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Our Solution</h3>
                  <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-purple-500 pl-6">
                     {study.solution}
                  </p>
                </div>
                <div className="md:hidden">
                   <button className="mt-4 flex items-center gap-2 text-purple-400 font-bold">
                     Read Full Story <ArrowRight className="w-4 h-4" />
                   </button>
                </div>
              </div>

              {/* Right: Stats & Outcome */}
              <div className="bg-[#111] p-8 rounded-3xl border border-white/10 hover:border-purple-500/30 transition-colors">
                <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-500" /> Key Outcomes
                </h3>
                <p className="text-gray-300 mb-8 text-sm">
                  {study.outcome}
                </p>
                <div className="space-y-6">
                  {study.stats.map((stat, i) => (
                    <div key={i} className="flex items-center justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0">
                      <div className="flex items-center gap-3 text-gray-400">
                        <stat.icon className="w-4 h-4" />
                        <span className="text-sm">{stat.label}</span>
                      </div>
                      <span className="text-xl font-bold text-white font-mono">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Divider */}
            {index !== cases.length - 1 && <div className="h-px bg-white/5 mt-32"></div>}
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default CaseStudies;
