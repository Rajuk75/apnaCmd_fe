import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import { Activity, Users, TrendingUp, DollarSign } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: 'Total Users', value: '12,345', icon: Users, change: '+12%', color: 'blue' },
    { label: 'Active Sessions', value: '843', icon: Activity, change: '+5.4%', color: 'green' },
    { label: 'Revenue', value: '$45,231', icon: DollarSign, change: '+18%', color: 'yellow' },
    { label: 'Growth', value: '24.5%', icon: TrendingUp, change: '+2.1%', color: 'purple' },
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
            className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:border-purple-500/30 transition-all duration-300 group"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl bg-${stat.color}-500/10 text-${stat.color}-500`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <span className="text-green-400 text-xs font-bold bg-green-500/10 px-2 py-1 rounded-full">
                {stat.change}
              </span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
            <p className="text-gray-400 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-white mb-6">Recent Activity</h2>
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="p-4 border-b border-white/5 hover:bg-white/5 transition-colors flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold">
                  JS
                </div>
                <div>
                  <p className="text-white font-medium">New user registration</p>
                  <p className="text-gray-500 text-xs">2 minutes ago</p>
                </div>
              </div>
              <button className="text-purple-400 text-sm hover:text-purple-300">View</button>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Dashboard;
