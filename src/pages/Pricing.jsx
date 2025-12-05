import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import { Check, Sparkles, Zap } from 'lucide-react';
import Button from '../components/common/Button';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$0',
      period: '/month',
      description: 'Perfect for exploring and personal projects.',
      features: ['5 Projects', 'Community Support', 'Basic Analytics', '1GB Storage'],
      highlight: false,
    },
    {
      name: 'Pro',
      price: '$29',
      period: '/month',
      description: 'For professionals requiring more power.',
      features: ['Unlimited Projects', 'Priority Support', 'Advanced Analytics', '100GB Storage', 'Custom Domain'],
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large teams.',
      features: ['Dedicated Account Manager', '24/7 Support', 'SSO & Security', 'Unlimited Storage', 'SLA Guarantee'],
      highlight: false,
    },
  ];

  return (
    <PageLayout 
      title="Pricing Plans" 
      subtitle="Choose the perfect plan for your needs. Upgrade anytime."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div 
            key={index}
            className={`relative rounded-3xl p-8 border flex flex-col ${
              plan.highlight 
                ? 'bg-[#111] border-purple-500 shadow-2xl shadow-purple-900/20' 
                : 'bg-white/5 border-white/10 hover:border-white/20'
            }`}
          >
            {plan.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1 shadow-lg">
                <Sparkles className="w-3 h-3" /> Most Popular
              </div>
            )}
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-400">{plan.period}</span>
              </div>
              <p className="text-gray-400 mt-4 text-sm leading-relaxed">{plan.description}</p>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                  <div className={`p-1 rounded-full ${plan.highlight ? 'bg-purple-500/20 text-purple-400' : 'bg-white/10 text-gray-400'}`}>
                    <Check className="w-3 h-3" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <button className={`w-full py-4 rounded-xl font-bold text-sm transition-all duration-200 ${
              plan.highlight 
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-purple-500/25' 
                : 'bg-white text-black hover:bg-gray-200'
            }`}>
              Get Started
            </button>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Pricing;
