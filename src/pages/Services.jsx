import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import { Zap, Globe, Smartphone, Cpu, Shield, Code, Terminal, Server, Database, Layout, Rocket, Cloud, Check } from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: "Custom Web Development",
            description: "High-performance websites tailored to your brand.",
            icon: Globe,
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
            features: ["React/Next.js", "SEO Optimized", "Performance First"]
        },
        {
            title: "Mobile App Development",
            description: "Native and cross-platform apps for iOS and Android.",
            icon: Smartphone,
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
            features: ["React Native", "iOS & Android", "Offline Capable"]
        },
        {
            title: "AI & Machine Learning",
            description: "Intelligent solutions to automate and predict.",
            icon: Cpu,
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
            features: ["LLM Integration", "Predictive Analytics", "Chatbots"]
        },
        {
            title: "Cloud Infrastructure",
            description: "Scalable, secure, and reliable backend systems.",
            icon: Cloud,
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
            features: ["AWS / Azure", "Docker / K8s", "CI/CD Pipelines"]
        }
    ];

  return (
    <PageLayout 
      title="Our Expertise" 
      subtitle="Comprehensive technical services to build your future."
    >
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
                <div key={index} className="group relative rounded-3xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 bg-[#111]">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <img src={service.image} alt={service.title} className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                    </div>

                    <div className="relative p-8 h-full flex flex-col justify-end min-h-[300px]">
                        <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-4 backdrop-blur-md border border-purple-500/30">
                            <service.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                        <p className="text-gray-400 mb-6">{service.description}</p>
                        
                        <div className="flex flex-wrap gap-2">
                            {service.features.map((feature, i) => (
                                <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 flex items-center gap-1">
                                    <Check className="w-3 h-3 text-green-500" /> {feature}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* Tech Stack Marquee (Static Representation) */}
        <div className="border-t border-white/10 pt-16">
            <h3 className="text-center text-gray-500 font-medium mb-12 tracking-widest uppercase text-sm">Technologies We Master</h3>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Just using Lucide icons as placeholders for logos to avoid external SVG mess */}
                <div className="flex flex-col items-center gap-2 group">
                    <Code className="w-12 h-12 text-blue-400" />
                    <span className="text-xs text-gray-500 group-hover:text-blue-400">React</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                    <Server className="w-12 h-12 text-green-400" />
                    <span className="text-xs text-gray-500 group-hover:text-green-400">Node.js</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                    <Database className="w-12 h-12 text-yellow-400" />
                    <span className="text-xs text-gray-500 group-hover:text-yellow-400">SQL</span>
                </div>
                 <div className="flex flex-col items-center gap-2 group">
                    <Layout className="w-12 h-12 text-cyan-400" />
                    <span className="text-xs text-gray-500 group-hover:text-cyan-400">Tailwind</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                    <Smartphone className="w-12 h-12 text-purple-400" />
                    <span className="text-xs text-gray-500 group-hover:text-purple-400">Native</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                    <Cloud className="w-12 h-12 text-orange-400" />
                    <span className="text-xs text-gray-500 group-hover:text-orange-400">AWS</span>
                </div>
            </div>
        </div>
    </PageLayout>
  );
};

export default Services;
