import React from 'react';
import PageLayout from '../components/layout/PageLayout';

const Terms = () => {
  return (
    <PageLayout title="Terms of Service" subtitle="Last updated: December 6, 2025">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-soft">
          <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">1. Agreement to Terms</h2>
          <p className="text-slate-600 leading-relaxed">
            By accessing or using our services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our services.
          </p>
        </section>
        
        <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-soft">
          <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">2. Intellectual Property</h2>
          <p className="text-slate-600 leading-relaxed">
            The Service and its original content, features, and functionality are and will remain the exclusive property of Sagar Tech and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
          </p>
        </section>

        <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-soft">
          <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">3. User Responsibilities</h2>
          <p className="text-slate-600 leading-relaxed">
            You are responsible for your use of the Service and for any consequences thereof. You agree not to use the Service for any unlawful purposes or in furtherance of illegal activities.
          </p>
        </section>

        <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-soft">
          <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">4. Limitation of Liability</h2>
          <p className="text-slate-600 leading-relaxed">
            In no event shall Sagar Tech, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
          </p>
        </section>

        <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-soft">
          <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">5. Governing Law</h2>
          <p className="text-slate-600 leading-relaxed">
            These Terms shall be governed and construed in accordance with the laws, without regard to its conflict of law provisions.
          </p>
        </section>
      </div>
    </PageLayout>
  );
};

export default Terms;
