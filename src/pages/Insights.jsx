import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import { ArrowRight, Tag, Clock } from 'lucide-react';

const Insights = () => {
  const posts = [
    {
      id: 1,
      title: 'The Future of Web Development: 2025 Outlook',
      excerpt: 'Exploring the latest trends in React, AI-driven UIs, and edge computing. How the landscape is shifting towards server-driven state.',
      author: 'Alex Morgan',
      role: 'CTO',
      date: 'Dec 05, 2025',
      readTime: '5 min read',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80'
    },
    {
      id: 2,
      title: 'Mastering Dark Mode Design',
      excerpt: 'Tips and tricks for creating stunning dark interfaces that reduce eye strain and look premium. Why contrast ratios matter more than ever.',
      author: 'Sarah Lee',
      role: 'Lead Designer',
      date: 'Dec 02, 2025',
      readTime: '4 min read',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80'
    },
    {
      id: 3,
      title: 'Scaling Node.js Microservices',
      excerpt: 'A comprehensive guide to backend architecture, message queues with RabbitMQ, and managing distributed states in high-load systems.',
      author: 'David Chen',
      role: 'Snr. Engineer',
      date: 'Nov 28, 2025',
      readTime: '8 min read',
      category: 'Engineering',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80'
    },
    {
      id: 4,
      title: 'AI in Modern Apps: Beyond Chatbots',
      excerpt: 'How to integrate LLMs, vector databases, and semantic search into your everyday applications to create truly intelligent user flows.',
      author: 'Emily White',
      role: 'AI Researcher',
      date: 'Nov 25, 2025',
      readTime: '6 min read',
      category: 'AI',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80'
    },
  ];

  return (
    <PageLayout 
      title="Latest Insights" 
      subtitle="Thoughts, tutorials, and trends from our engineering team."
    >
      {/* Featured Post (First one) */}
      <div className="mb-16">
        <div className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-300 hover:shadow-soft-lg transition-all cursor-pointer">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="h-64 md:h-auto overflow-hidden">
              <img src={posts[0].image} alt={posts[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider">
                  Featured
                </span>
                <span className="text-slate-400 text-sm flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {posts[0].readTime}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                {posts[0].title}
              </h2>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                {posts[0].excerpt}
              </p>
              <div className="flex items-center gap-4">
                <img src={posts[0].avatar} alt={posts[0].author} className="w-10 h-10 rounded-full border border-slate-200" />
                <div>
                  <p className="text-slate-900 font-bold text-sm">{posts[0].author}</p>
                  <p className="text-slate-400 text-xs">{posts[0].role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid for other posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.slice(1).map((post) => (
          <div 
            key={post.id}
            className="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-300 hover:shadow-soft-lg transition-all duration-300"
          >
            {/* Image */}
            <div className="h-56 relative overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-xs font-bold text-white bg-blue-500 rounded-full shadow-blue-glow">
                  {post.category}
                </span>
              </div>
            </div>

            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                <span className="flex items-center gap-1">
                  <Tag className="w-3 h-3" /> {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {post.readTime}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <img src={post.avatar} alt={post.author} className="w-8 h-8 rounded-full border border-slate-200" />
                  <span className="text-slate-600 text-xs font-medium">{post.author}</span>
                </div>
                <button className="text-blue-500 hover:text-blue-600 transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Insights;
