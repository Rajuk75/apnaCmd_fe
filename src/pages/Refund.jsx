import React from 'react';
import PageLayout from '../components/layout/PageLayout';

const Refund = () => {
  return (
    <PageLayout title="Refund Policy" subtitle="Last updated: December 6, 2025">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-soft">
          <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">1. General Policy</h2>
          <p className="text-slate-600 leading-relaxed">
            At Sagar Tech, we strive to ensure that you are 100% satisfied with our services. If you are not satisfied with the work provided, we are here to help.
          </p>
        </section>
        
        <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-soft">
          <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">2. Eligibility for Refunds</h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-500">
            <li>Refund requests must be made within 30 days of the service delivery date.</li>
            <li>The service must not have been fully completed and approved by the client.</li>
            <li>Refunds are not applicable for "Change of Mind" after work has significantly commenced.</li>
          </ul>
        </section>

        <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-soft">
          <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">3. Processing Time</h2>
          <p className="text-slate-600 leading-relaxed">
            Once your return is received and inspected, we will send you an email to notify you that we have received your request. We will also notify you of the approval or rejection of your refund. If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.
          </p>
        </section>
      </div>
    </PageLayout>
  );
};

export default Refund;
