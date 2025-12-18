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
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600" alt="Cloud" className="rounded-2xl border border-slate-200 shadow-soft-lg" />
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-3xl font-display font-bold text-slate-900">Move Faster, Scale Smarter</h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Legacy infrastructure holds you back. We migrate, modernize, and manage your applications on leading cloud platforms like AWS, Azure, and Google Cloud.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-600">
                <div className="w-8 h-8 rounded-full bg-green-50 border border-green-100 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-green-500" />
                </div>
                Enterprise-Grade Security
              </li>
              <li className="flex items-center gap-3 text-slate-600">
                <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center">
                  <Database className="w-4 h-4 text-blue-500" />
                </div>
                Automated Backups & DR
              </li>
              <li className="flex items-center gap-3 text-slate-600">
                <div className="w-8 h-8 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center">
                  <Network className="w-4 h-4 text-purple-500" />
                </div>
                Global Content Delivery
              </li>
            </ul>
          </div>
        </div>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-300 transition-colors shadow-soft hover:shadow-soft-lg group">
            <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500 group-hover:border-blue-500 transition-all">
              <Cloud className="w-6 h-6 text-blue-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Cloud Migration</h3>
            <p className="text-slate-500">Seamlessly move your on-premise workloads to the cloud with zero downtime strategies.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-300 transition-colors shadow-soft hover:shadow-soft-lg group">
            <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500 group-hover:border-blue-500 transition-all">
              <Server className="w-6 h-6 text-blue-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">DevOps & CI/CD</h3>
            <p className="text-slate-500">Automate your deployment pipelines to release features faster and more reliably.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-300 transition-colors shadow-soft hover:shadow-soft-lg group">
            <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500 group-hover:border-blue-500 transition-all">
              <Lock className="w-6 h-6 text-blue-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Cloud Security</h3>
            <p className="text-slate-500">Implement Zero Trust architecture, IAM policies, and continuous compliance monitoring.</p>
          </div>
        </div>

        {/* Partners/Tech */}
        <div className="text-center pt-12 border-t border-slate-200">
          <p className="text-slate-400 mb-8 uppercase tracking-widest text-sm font-mono">Certified Partners</p>
          <div className="flex justify-center gap-12">
            <span className="text-2xl font-bold text-blue-500">AWS</span>
            <span className="text-2xl font-bold text-blue-400">Azure</span>
            <span className="text-2xl font-bold text-blue-600">Google Cloud</span>
            <span className="text-2xl font-bold text-blue-300">DigitalOcean</span>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default CloudServices;
