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
          <div key={index} className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-300 transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group shadow-soft hover:shadow-soft-lg">
            <div className="space-y-2">
              <h3 className="text-2xl font-display font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{job.title}</h3>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {job.department}</span>
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {job.type}</span>
              </div>
              <p className="text-slate-500 mt-2">{job.description}</p>
            </div>
            <button className="px-6 py-3 rounded-full border border-slate-200 text-slate-700 hover:bg-blue-500 hover:border-blue-500 hover:text-white transition-all font-medium whitespace-nowrap shadow-soft">
              Apply Now
            </button>
          </div>
        ))}
      </div>
      
      <div className="mt-20 text-center">
        <p className="text-slate-500 mb-6">Don't see a role that fits? We are always looking for talent.</p>
        <a href="mailto:careers@plusDotAi.com" className="text-blue-600 hover:text-blue-700 font-bold border-b border-blue-500/50 hover:border-blue-600 pb-1 transition-colors">
          Send us your Resume
        </a>
      </div>
    </PageLayout>
  );
};

export default Careers;
