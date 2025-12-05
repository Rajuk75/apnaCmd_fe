import React from 'react';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

const HomeInsights = () => {
  const posts = [
    {
      id: 1,
      title: 'The Future of Web Development: 2025 Outlook',
      excerpt: 'Exploring the latest trends in React, AI-driven UIs, and edge computing.',
      date: 'Dec 05, 2025',
      readTime: '5 min read',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 2,
      title: 'Mastering Dark Mode Design',
      excerpt: 'Tips and tricks for creating stunning dark interfaces that reduce eye strain.',
      date: 'Dec 02, 2025',
      readTime: '4 min read',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
    },
    {
       id: 3,
       title: 'AI in Modern Apps',
       excerpt: 'How to integrate LLMs and semantic search into your everyday applications.',
       date: 'Nov 25, 2025',
       readTime: '6 min read',
       category: 'AI',
       image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Latest Insights</h2>
            <p className="text-gray-400">Thoughts and trends from our engineering team.</p>
          </div>
          <Link to={ROUTES.INSIGHTS} className="hidden md:flex items-center gap-2 text-white hover:text-purple-400 transition-colors font-medium">
             View All <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div 
              key={post.id}
              className="group flex flex-col bg-[#111] border border-white/5 rounded-3xl overflow-hidden hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-900/10 transition-all duration-300"
            >
              <div className="h-48 relative overflow-hidden">
                 <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-bold text-black bg-white backdrop-blur-md rounded-full shadow-lg">
                      {post.category}
                    </span>
                 </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Tag className="w-3 h-3" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {post.readTime}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                  {post.excerpt}
                </p>

                <div className="pt-4 border-t border-white/5">
                   <Link to={ROUTES.INSIGHTS} className="flex items-center gap-2 text-sm text-white hover:text-purple-400 transition-colors">
                      Read Article <ArrowRight className="w-4 h-4" />
                   </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
             <Link to={ROUTES.INSIGHTS} className="inline-flex items-center gap-2 text-white hover:text-purple-400 transition-colors font-medium">
                 View All Insights <ArrowRight className="w-5 h-5" />
             </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeInsights;
