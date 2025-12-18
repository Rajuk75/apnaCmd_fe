import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import { Check, Sparkles } from 'lucide-react';

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
            className={`relative rounded-2xl p-8 border flex flex-col ${
              plan.highlight 
                ? 'bg-white border-blue-500 shadow-blue-glow-lg' 
                : 'bg-white border-slate-200 hover:border-blue-300 shadow-soft'
            }`}
          >
            {plan.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1 shadow-blue-glow">
                <Sparkles className="w-3 h-3" /> Most Popular
              </div>
            )}
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-display font-bold text-slate-900">{plan.price}</span>
                <span className="text-slate-400">{plan.period}</span>
              </div>
              <p className="text-slate-500 mt-4 text-sm leading-relaxed">{plan.description}</p>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-slate-600">
                  <div className={`p-1 rounded-full ${plan.highlight ? 'bg-blue-50 text-blue-500' : 'bg-slate-100 text-slate-400'}`}>
                    <Check className="w-3 h-3" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <button className={`w-full py-4 rounded-xl font-bold text-sm transition-all duration-200 ${
              plan.highlight 
                ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-blue-glow-lg hover:scale-105' 
                : 'bg-slate-900 text-white hover:bg-slate-800'
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
