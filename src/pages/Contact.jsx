import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <PageLayout 
      title="Contact Us" 
      subtitle="Let's start a conversation about your next project."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-soft">
            <h3 className="text-2xl font-display font-bold text-slate-900 mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-slate-600 group">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-blue-500 group-hover:border-blue-500 transition-all">
                  <Mail className="w-5 h-5 text-blue-500 group-hover:text-white transition-colors" />
                </div>
                <span>support@plusDotAi.com</span>
              </div>
              <div className="flex items-center gap-4 text-slate-600 group">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-blue-500 group-hover:border-blue-500 transition-all">
                  <Phone className="w-5 h-5 text-blue-500 group-hover:text-white transition-colors" />
                </div>
                <span>+91 9568259784</span>
              </div>
              <div className="flex items-center gap-4 text-slate-600 group">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-blue-500 group-hover:border-blue-500 transition-all">
                  <MapPin className="w-5 h-5 text-blue-500 group-hover:text-white transition-colors" />
                </div>
                <span>Noida, UP, India</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-8 rounded-2xl border border-blue-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Support Hours</h3>
            <p className="text-slate-600">Monday - Friday: 9am - 6pm EST</p>
            <p className="text-slate-600">Weekend: Closed</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-soft">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-600">First Name</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" placeholder="John" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-600">Last Name</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" placeholder="Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-600">Email</label>
              <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-600">Message</label>
              <textarea rows="4" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none" placeholder="Tell us about your project..."></textarea>
            </div>
            <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-4 rounded-xl hover:shadow-blue-glow-lg transition-all duration-300 hover:scale-[1.02]">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
