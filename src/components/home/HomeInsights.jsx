import React from 'react';
import { ArrowRight, ArrowUpRight, Clock, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

const HomeInsights = () => {
  const posts = [
    {
      id: 1,
      title: 'The Future of Web Development: 2025 Outlook',
      excerpt: 'Exploring the latest trends in React, AI-driven UIs, and edge computing.',
      date: 'Dec 05, 2025',
      readTime: '5 min',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 2,
      title: 'Mastering Dark Mode Design',
      excerpt: 'Tips and tricks for creating stunning dark interfaces that reduce eye strain.',
      date: 'Dec 02, 2025',
      readTime: '4 min',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
    },
    {
       id: 3,
       title: 'AI in Modern Apps',
       excerpt: 'How to integrate LLMs and semantic search into your everyday applications.',
       date: 'Nov 25, 2025',
       readTime: '6 min',
       category: 'AI',
       image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    }
  ];

  return (
    <section className="py-32 bg-white border-t border-slate-100 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern-blue opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div>
            <span className="inline-block px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-xs font-mono tracking-widest text-blue-600 uppercase mb-6">
              Blog
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-4">
              Latest Insights
            </h2>
            <p className="text-slate-500 text-lg max-w-xl">
              Thoughts and trends from our engineering team.
            </p>
          </div>
          <Link 
            to={ROUTES.INSIGHTS} 
            className="group hidden md:flex items-center gap-2 text-slate-700 font-medium border border-slate-200 px-6 py-3 rounded-full hover:bg-blue-500 hover:border-blue-500 hover:text-white transition-all duration-300 shadow-soft"
          >
            View All
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article 
              key={post.id}
              className="group relative flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-200 hover:shadow-soft-lg transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                
                {/* Category Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 text-xs font-mono font-bold text-white bg-blue-500 rounded-full uppercase tracking-wider shadow-blue-glow">
                    {post.category}
                  </span>
                </div>

                {/* Number */}
                <div className="absolute bottom-4 right-4">
                  <span className="text-6xl font-display font-bold text-white/20">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-slate-400 font-mono mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                {/* Excerpt */}
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Link */}
                <Link 
                  to={ROUTES.INSIGHTS} 
                  className="inline-flex items-center gap-2 text-sm text-blue-600 font-medium group/link"
                >
                  <span className="border-b border-transparent group-hover/link:border-blue-600 transition-colors">
                    Read Article
                  </span>
                  <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        {/* Mobile CTA */}
        <div className="mt-12 text-center md:hidden">
          <Link 
            to={ROUTES.INSIGHTS} 
            className="inline-flex items-center gap-2 text-slate-700 font-medium border border-slate-200 px-6 py-3 rounded-full hover:bg-blue-500 hover:border-blue-500 hover:text-white transition-all duration-300"
          >
            View All Insights
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeInsights;
