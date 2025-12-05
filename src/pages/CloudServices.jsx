import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import { Cloud, Shield, Database, Lock, Server, Network } from 'lucide-react';

const CloudServices = () => {
  return (
    <PageLayout 
      title="Cloud Services" 
      subtitle="Scalable infrastructure that grows with your business."
    >
      <div className="space-y-20">
         {/* Introduction */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="order-2 md:order-1">
                 <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600" alt="Cloud" className="rounded-3xl border border-white/10 shadow-2xl shadow-blue-900/20" />
             </div>
             <div className="order-1 md:order-2 space-y-6">
                 <h2 className="text-3xl font-bold text-white">Move Faster, Scale Smarter</h2>
                 <p className="text-gray-400 text-lg leading-relaxed">
                     Legacy infrastructure holds you back. We migrate, modernize, and manage your applications on leading cloud platforms like AWS, Azure, and Google Cloud.
                 </p>
                 <ul className="space-y-3">
                     <li className="flex items-center gap-3 text-gray-300">
                         <Shield className="w-5 h-5 text-green-400" /> Enterprise-Grade Security
                     </li>
                     <li className="flex items-center gap-3 text-gray-300">
                         <Database className="w-5 h-5 text-blue-400" /> Automated Backups & DR
                     </li>
                     <li className="flex items-center gap-3 text-gray-300">
                         <Network className="w-5 h-5 text-purple-400" /> Global Content Delivery
                     </li>
                 </ul>
             </div>
         </div>

         {/* Services List */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="bg-[#111] p-8 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-colors">
                 <Cloud className="w-10 h-10 text-blue-400 mb-6" />
                 <h3 className="text-xl font-bold text-white mb-3">Cloud Migration</h3>
                 <p className="text-gray-400">Seamlessly move your on-premise workloads to the cloud with zero downtime strategies.</p>
             </div>
             <div className="bg-[#111] p-8 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-colors">
                 <Server className="w-10 h-10 text-blue-400 mb-6" />
                 <h3 className="text-xl font-bold text-white mb-3">DevOps & CI/CD</h3>
                 <p className="text-gray-400">Automate your deployment pipelines to release features faster and more reliably.</p>
             </div>
             <div className="bg-[#111] p-8 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-colors">
                 <Lock className="w-10 h-10 text-blue-400 mb-6" />
                 <h3 className="text-xl font-bold text-white mb-3">Cloud Security</h3>
                 <p className="text-gray-400">Implement Zero Trust architecture, IAM policies, and continuous compliance monitoring.</p>
             </div>
         </div>

         {/* Partners/Tech */}
         <div className="text-center pt-12 border-t border-white/5">
             <p className="text-gray-500 mb-8 uppercase tracking-widest text-sm">Certified Partners</p>
             <div className="flex justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all">
                 <span className="text-2xl font-bold text-white">AWS</span>
                 <span className="text-2xl font-bold text-white">Azure</span>
                 <span className="text-2xl font-bold text-white">Google Cloud</span>
                 <span className="text-2xl font-bold text-white">DigitalOcean</span>
             </div>
         </div>
      </div>
    </PageLayout>
  );
};

export default CloudServices;
