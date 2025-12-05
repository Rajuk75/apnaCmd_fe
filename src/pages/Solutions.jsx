import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import { Layers, Rocket, Monitor, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      id: 1,
      title: "Enterprise Digital Transformation",
      subtitle: "Future-proof your organization",
      description: "Modernize your legacy systems with cloud-native architectures and microservices. We help large organizations stay agile in a digital-first world reducing operational costs by up to 40%.",
      features: ["Legacy System Migration", "Cloud-Native Architecture", "Microservices Implementation", "Process Automation"],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
      color: "blue"
    },
    {
      id: 2,
      title: "Startup MVP Development",
      subtitle: "From idea to market in weeks",
      description: "Validating your idea? We build rapid, scalable Minimum Viable Products to help you hit the market fast and secure funding. Our agile process ensures you focus on features that matter.",
      features: ["Rapid Prototyping", "Scalable Tech Stack", "User-Centric Design", "Post-Launch Support"],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
      color: "purple"
    },
    {
      id: 3,
      title: "E-Commerce Experience",
      subtitle: "Drive sales with intelligent retail",
      description: "Boost your sales with high-conversion e-commerce platforms. From headless CMS to custom checkout flows, we engineer growth using data-driven insights and AI personalization.",
      features: ["Headless Commerce", "AI Personalization", "Omnichannel Integration", "Payment Gateway Solutions"],
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
      color: "green"
    },
    {
      id: 4,
      title: "SaaS Platform Engineering",
      subtitle: "Scalable multi-tenant architectures",
      description: "Building the next big SaaS? We architect multi-tenant, secure, and subscription-ready platforms designed to scale globally with 99.99% uptime guarantees.",
      features: ["Multi-tenant Architecture", "Subscription Billing", "Role-Based Access", "API-First Design"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
      color: "orange"
    }
  ];

  return (
    <PageLayout 
      title="Strategic Solutions" 
      subtitle="Tailored approaches for every business scale. We turn complex challenges into competitive advantages."
    >
      <div className="space-y-24">
        {solutions.map((item, index) => (
          <div 
            key={item.id} 
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center group`}
          >
            {/* Image Side */}
            <div className="flex-1 w-full">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-900/10">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                {/* Hover Effect Reveal */}
                <div className={`absolute inset-0 bg-${item.color}-500/20 mix-blend-color opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20`}></div>
                
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-[300px] lg:h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 z-30">
                  <span className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg`}>
                    {item.subtitle}
                  </span>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="flex-1 space-y-6">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-${item.color}-500/10 text-${item.color}-500 border border-${item.color}-500/20`}>
                {index === 0 && <Globe className="w-6 h-6" />}
                {index === 1 && <Rocket className="w-6 h-6" />}
                {index === 2 && <Monitor className="w-6 h-6" />}
                {index === 3 && <Layers className="w-6 h-6" />}
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                {item.title}
              </h2>
              
              <p className="text-gray-400 text-lg leading-relaxed">
                {item.description}
              </p>

              {/* Feature List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                {item.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className={`w-5 h-5 text-${item.color}-500`} />
                    <span className="text-gray-300 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="flex items-center gap-2 text-white font-semibold group/btn hover:text-purple-400 transition-colors pt-4">
                Explore Solution <ArrowRight className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
        
        {/* CTA Section */}
        <div className="mt-20 p-12 rounded-3xl bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-purple-500/20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to transform your business?</h3>
            <p className="text-gray-400 mb-8">Let's discuss how our strategic solutions can help you achieve your goals.</p>
            <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors shadow-lg shadow-white/10">
              Get a Proposal
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Solutions;
