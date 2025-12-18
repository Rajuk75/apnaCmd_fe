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
    },
    {
      id: 2,
      title: "Startup MVP Development",
      subtitle: "From idea to market in weeks",
      description: "Validating your idea? We build rapid, scalable Minimum Viable Products to help you hit the market fast and secure funding. Our agile process ensures you focus on features that matter.",
      features: ["Rapid Prototyping", "Scalable Tech Stack", "User-Centric Design", "Post-Launch Support"],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      title: "E-Commerce Experience",
      subtitle: "Drive sales with intelligent retail",
      description: "Boost your sales with high-conversion e-commerce platforms. From headless CMS to custom checkout flows, we engineer growth using data-driven insights and AI personalization.",
      features: ["Headless Commerce", "AI Personalization", "Omnichannel Integration", "Payment Gateway Solutions"],
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 4,
      title: "SaaS Platform Engineering",
      subtitle: "Scalable multi-tenant architectures",
      description: "Building the next big SaaS? We architect multi-tenant, secure, and subscription-ready platforms designed to scale globally with 99.99% uptime guarantees.",
      features: ["Multi-tenant Architecture", "Subscription Billing", "Role-Based Access", "API-First Design"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    }
  ];

  const icons = [Globe, Rocket, Monitor, Layers];

  return (
    <PageLayout 
      title="Strategic Solutions" 
      subtitle="Tailored approaches for every business scale. We turn complex challenges into competitive advantages."
    >
      <div className="space-y-24">
        {solutions.map((item, index) => {
          const Icon = icons[index];
          return (
            <div 
              key={item.id} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center group`}
            >
              {/* Image Side */}
              <div className="flex-1 w-full">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-soft-lg group-hover:shadow-blue-glow transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent z-10"></div>
                  
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-[300px] lg:h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700" 
                  />
                  
                  {/* Floating Badge */}
                  <div className="absolute bottom-6 left-6 z-30">
                    <span className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500 text-white shadow-blue-glow">
                      {item.subtitle}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="flex-1 space-y-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-blue-50 border border-blue-100 group-hover:bg-blue-500 group-hover:border-blue-500 transition-all">
                  <Icon className="w-6 h-6 text-blue-500 group-hover:text-white transition-colors" />
                </div>

                <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 leading-tight">
                  {item.title}
                </h2>
                
                <p className="text-slate-500 text-lg leading-relaxed">
                  {item.description}
                </p>

                {/* Feature List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                  {item.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-500" />
                      <span className="text-slate-600 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-blue-600 font-semibold group/btn hover:text-blue-700 transition-colors pt-4">
                  Explore Solution <ArrowRight className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          );
        })}
        
        {/* CTA Section */}
        <div className="mt-20 p-6 md:p-12 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-3xl font-display font-bold text-slate-900 mb-4">Ready to transform your business?</h3>
            <p className="text-slate-500 mb-8">Let's discuss how our strategic solutions can help you achieve your goals.</p>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-bold hover:shadow-blue-glow-lg transition-all duration-300 hover:scale-105">
              Get a Proposal
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Solutions;
