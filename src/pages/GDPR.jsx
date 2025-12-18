import React from 'react';
import PageLayout from '../components/layout/PageLayout';

const GDPR = () => {
  return (
    <PageLayout title="GDPR Policy" subtitle="Commitment to Data Privacy">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-soft">
          <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">Data Protection Principles</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            We are committed to processing data in accordance with its responsibilities under the GDPR. 
            Article 5 of the GDPR requires that personal data shall be:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-500">
            <li>Processed lawfully, fairly and in a transparent manner in relation to individuals.</li>
            <li>Collected for specified, explicit and legitimate purposes and not further processed in a manner that is incompatible with those purposes.</li>
            <li>Adequate, relevant and limited to what is necessary in relation to the purposes for which they are processed.</li>
            <li>Accurate and, where necessary, kept up to date.</li>
            <li>Kept for no longer than is necessary.</li>
            <li>Processed in a manner that ensures appropriate security of the personal data.</li>
          </ul>
        </section>
        
        <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-soft">
          <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">Your Rights</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Under the GDPR, you have the following rights:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-500">
            <li>The right to access personal data we hold on you.</li>
            <li>The right to correct and update the personal data we hold on you.</li>
            <li>The right to have your personal data erased.</li>
            <li>The right to object to processing of your personal data.</li>
            <li>The right to data portability.</li>
          </ul>
        </section>
      </div>
    </PageLayout>
  );
};

export default GDPR;
