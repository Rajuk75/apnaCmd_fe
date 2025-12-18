import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import { Users, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <PageLayout 
      title="About Us" 
      subtitle="Driven by innovation, united by purpose."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Who We Are</h2>
          <p className="text-slate-500 text-lg leading-relaxed mb-6">
            We are a team of passionate engineers, designers, and strategists dedicated to transforming ideas into digital reality. Founded in 2020, we have grown from a small garage startup to a global agency serving Fortune 500 clients.
          </p>
          <p className="text-slate-500 text-lg leading-relaxed">
            Our mission is simple: to democratize access to world-class software technology. We believe that every business, regardless of size, deserves tools that are secure, scalable, and stunning.
          </p>
        </div>
        <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-soft-lg">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Team" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-soft hover:shadow-soft-lg hover:border-blue-200 transition-all duration-300 group">
          <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500 group-hover:border-blue-500 transition-all">
            <Target className="w-6 h-6 text-blue-500 group-hover:text-white transition-colors" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">Our Vision</h3>
          <p className="text-slate-500">To be the world's most trusted partner for digital innovation.</p>
        </div>
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-soft hover:shadow-soft-lg hover:border-blue-200 transition-all duration-300 group">
          <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500 group-hover:border-blue-500 transition-all">
            <Users className="w-6 h-6 text-blue-500 group-hover:text-white transition-colors" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">Our Team</h3>
          <p className="text-slate-500">A diverse collective of thinkers and doers from 10+ countries.</p>
        </div>
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-soft hover:shadow-soft-lg hover:border-blue-200 transition-all duration-300 group">
          <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500 group-hover:border-blue-500 transition-all">
            <Heart className="w-6 h-6 text-blue-500 group-hover:text-white transition-colors" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">Our Values</h3>
          <p className="text-slate-500">Integrity, Excellence, and User-Centricity drive everything we do.</p>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
