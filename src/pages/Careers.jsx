import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';

const Careers = () => {
    const jobs = [
        {
            title: "Senior Frontend Engineer",
            department: "Engineering",
            location: "Remote",
            type: "Full-time",
            description: "We are looking for an experienced React developer to lead our frontend initiatives."
        },
        {
            title: "Product Designer",
            department: "Design",
            location: "New York, NY",
            type: "Full-time",
            description: "Join our award-winning design team and craft beautiful user experiences."
        },
        {
            title: "DevOps Specialist",
            department: "Operations",
            location: "Remote",
            type: "Contract",
            description: "Help us scale our cloud infrastructure and improve deployment pipelines."
        }
    ];

  return (
    <PageLayout 
      title="Careers" 
      subtitle="Join us in building the future of software."
    >
      <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
         {jobs.map((job, index) => (
             <div key={index} className="bg-[#111] p-8 rounded-3xl border border-white/10 hover:border-purple-500/50 transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group">
                 <div className="space-y-2">
                     <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">{job.title}</h3>
                     <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                         <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {job.department}</span>
                         <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                         <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {job.type}</span>
                     </div>
                     <p className="text-gray-400 mt-2">{job.description}</p>
                 </div>
                 <button className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all font-medium whitespace-nowrap">
                     Apply Now
                 </button>
             </div>
         ))}
      </div>
      
      <div className="mt-20 text-center">
          <p className="text-gray-400 mb-6">Don't see a role that fits? We are always looking for talent.</p>
          <a href="mailto:careers@plusDotAi.com" className="text-purple-400 hover:text-purple-300 font-bold border-b border-purple-500/50 hover:border-purple-300 pb-1 transition-colors">
              Send us your Resume
          </a>
      </div>
    </PageLayout>
  );
};

export default Careers;
