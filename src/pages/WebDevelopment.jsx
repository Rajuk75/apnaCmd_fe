import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import { Monitor, Code, Layout, Globe, Server, Smartphone } from 'lucide-react';

const WebDevelopment = () => {
  const features = [
    {
      title: "Frontend Engineering",
      description: "Pixel-perfect, responsive UIs built with React, Next.js, and Tailwind CSS. We prioritize performance and accessibility.",
      icon: Layout
    },
    {
      title: "Backend Architecture",
      description: "Robust, scalable server-side systems using Node.js, Python, and Go. We build APIs that can handle millions of requests.",
      icon: Server
    },
    {
      title: "Progressive Web Apps",
      description: "Web apps that feel like native apps. Offline capabilities, push notifications, and home screen installation.",
      icon: Smartphone
    },
    {
      title: "E-Commerce Solutions",
      description: "Custom storefronts and headless commerce integrations that drive conversion and streamline operations.",
      icon: Globe
    }
  ];

  return (
    <PageLayout 
      title="Web Development" 
      subtitle="Crafting digital experiences that engage and convert."
    >
      <div className="space-y-20">
        {/* Hero Image */}
        <div className="relative rounded-3xl overflow-hidden h-[400px] border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1600" 
            alt="Web Development" 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-8 left-8 z-20">
             <div className="flex gap-4">
                <span className="px-4 py-2 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full text-sm font-bold backdrop-blur-md">React</span>
                <span className="px-4 py-2 bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 rounded-full text-sm font-bold backdrop-blur-md">Node.js</span>
                <span className="px-4 py-2 bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-full text-sm font-bold backdrop-blur-md">Next.js</span>
             </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl font-bold text-white mb-6">Building the Future of the Web</h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                    In today's digital-first world, your website is often the first point of contact for your customers. We don't just build websites; we build comprehensive digital platforms that drive business growth.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed">
                    From complex enterprise dashboards to immersive marketing sites, our team leverages the latest web technologies to deliver speed, security, and scalability.
                </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#111] p-6 rounded-2xl border border-white/10 text-center">
                    <h3 className="text-4xl font-bold text-white mb-2">200+</h3>
                    <p className="text-gray-500 text-sm">Projects Delivered</p>
                </div>
                <div className="bg-[#111] p-6 rounded-2xl border border-white/10 text-center">
                    <h3 className="text-4xl font-bold text-white mb-2">99%</h3>
                    <p className="text-gray-500 text-sm">Client Satisfaction</p>
                </div>
                <div className="bg-[#111] p-6 rounded-2xl border border-white/10 text-center">
                    <h3 className="text-4xl font-bold text-white mb-2">50+</h3>
                    <p className="text-gray-500 text-sm">Expert Developers</p>
                </div>
                <div className="bg-[#111] p-6 rounded-2xl border border-white/10 text-center">
                    <h3 className="text-4xl font-bold text-white mb-2">5Yr</h3>
                    <p className="text-gray-500 text-sm">Avg. Engagement</p>
                </div>
            </div>
        </div>

        {/* Key Features Grid */}
        <div>
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="bg-[#111] p-8 rounded-3xl border border-white/10 hover:border-purple-500/30 transition-colors group">
                        <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                            <feature.icon className="w-7 h-7 text-white group-hover:text-purple-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default WebDevelopment;
