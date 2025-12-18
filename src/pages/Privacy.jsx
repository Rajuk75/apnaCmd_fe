import React from 'react';
import PageLayout from '../components/layout/PageLayout';

const Privacy = () => {
  return (
    <PageLayout title="Privacy Policy" subtitle="Last updated: December 6, 2025">
      <div className="max-w-4xl mx-auto space-y-12 text-slate-600 leading-relaxed text-lg">
        <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-soft">
          <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">1. Introduction</h2>
          <p>
            Welcome to the Privacy Policy of Sagar Tech. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
          </p>
        </section>
        
        <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-soft">
          <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">2. Data We Collect</h2>
          <p className="mb-4">
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-500">
            <li><strong className="text-slate-700">Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong className="text-slate-700">Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
            <li><strong className="text-slate-700">Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
          </ul>
        </section>

        <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-soft">
          <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">3. How We Use Your Data</h2>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4 text-slate-500">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
          </ul>
        </section>

        <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-soft">
          <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">4. Data Security</h2>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
          </p>
        </section>
      </div>
    </PageLayout>
  );
};

export default Privacy;
