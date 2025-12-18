import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import { Activity, Users, TrendingUp, DollarSign } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: 'Total Users', value: '12,345', icon: Users, change: '+12%' },
    { label: 'Active Sessions', value: '843', icon: Activity, change: '+5.4%' },
    { label: 'Revenue', value: '$45,231', icon: DollarSign, change: '+18%' },
    { label: 'Growth', value: '24.5%', icon: TrendingUp, change: '+2.1%' },
  ];

  return (
    <PageLayout 
      title="Dashboard" 
      subtitle="Overview of your application performance and analytics."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="bg-white border border-slate-200 p-6 rounded-2xl hover:border-blue-300 transition-all duration-300 group shadow-soft hover:shadow-soft-lg"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-500 group-hover:border-blue-500 transition-all">
                <stat.icon className="w-6 h-6 text-blue-500 group-hover:text-white transition-colors" />
              </div>
              <span className="text-green-600 text-xs font-bold bg-green-50 border border-green-100 px-2 py-1 rounded-full">
                {stat.change}
              </span>
            </div>
            <h3 className="text-3xl font-display font-bold text-slate-900 mb-1">{stat.value}</h3>
            <p className="text-slate-500 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">Recent Activity</h2>
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-soft">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="p-4 border-b border-slate-100 hover:bg-blue-50/50 transition-colors flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold shadow-blue-glow">
                  JS
                </div>
                <div>
                  <p className="text-slate-900 font-medium">New user registration</p>
                  <p className="text-slate-400 text-xs">2 minutes ago</p>
                </div>
              </div>
              <button className="text-blue-600 text-sm hover:text-blue-700 font-medium">View</button>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Dashboard;
