import React from 'react';
import PageLayout from '../components/layout/PageLayout';

const Privacy = () => {
    return (
        <PageLayout title="Privacy Policy" subtitle="Last updated: December 6, 2025">
            <div className="max-w-4xl mx-auto space-y-12 text-gray-300 leading-relaxed text-lg">
                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                    <p>
                        Welcome to the Privacy Policy of Sagar Tech. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                    </p>
                </section>
                
                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">2. Data We Collect</h2>
                    <p className="mb-4">
                        We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-400">
                        <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                        <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                        <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Data</h2>
                    <p>
                        We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-400">
                        <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                        <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
                    <p>
                        We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
                    </p>
                </section>
            </div>
        </PageLayout>
    );
};

export default Privacy;
