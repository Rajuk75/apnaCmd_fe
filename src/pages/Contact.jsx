import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import { Mail, MapPin, Phone, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <PageLayout 
      title="Contact Us" 
      subtitle="Let's start a conversation about your next project."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="bg-[#111] p-8 rounded-3xl border border-white/10">
             <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
             <div className="space-y-6">
                <div className="flex items-center gap-4 text-gray-400">
                   <Mail className="w-6 h-6 text-purple-500" />
                   <span>support@plusDotAi.com</span>
                </div>
                <div className="flex items-center gap-4 text-gray-400">
                   <Phone className="w-6 h-6 text-purple-500" />
                   <span>+91 9568259784</span>
                </div>
                <div className="flex items-center gap-4 text-gray-400">
                   <MapPin className="w-6 h-6 text-purple-500" />
                   <span>Noida, UP, India</span>
                </div>
             </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 p-8 rounded-3xl border border-purple-500/20">
             <h3 className="text-xl font-bold text-white mb-4">Support Hours</h3>
             <p className="text-gray-400">Monday - Friday: 9am - 6pm EST</p>
             <p className="text-gray-400">Weekend: Closed</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#111] p-8 rounded-3xl border border-white/10">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">First Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500 outline-none transition-colors" placeholder="John" />
               </div>
               <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Last Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500 outline-none transition-colors" placeholder="Doe" />
               </div>
            </div>
            <div className="space-y-2">
               <label className="text-sm font-medium text-gray-400">Email</label>
               <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500 outline-none transition-colors" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
               <label className="text-sm font-medium text-gray-400">Message</label>
               <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500 outline-none transition-colors" placeholder="Tell us about your project..."></textarea>
            </div>
            <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all">
               Send Message
            </button>
          </form>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
