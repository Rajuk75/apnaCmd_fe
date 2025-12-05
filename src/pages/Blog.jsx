import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: 'The Future of Web Development',
      excerpt: 'Exploring the latest trends in React, AI, and performance optimization for 2025.',
      author: 'Alex Morgan',
      date: 'Dec 05, 2025',
      category: 'Technology'
    },
    {
      title: 'Mastering UI/UX Design',
      excerpt: 'Tips and tricks for creating stunning user interfaces that drive engagement.',
      author: 'Sarah Lee',
      date: 'Dec 02, 2025',
      category: 'Design'
    },
    {
      title: 'Scaling Your Application',
      excerpt: 'A comprehensive guide to backend architecture and cloud solutions for growth.',
      author: 'David Chen',
      date: 'Nov 28, 2025',
      category: 'Engineering'
    },
     { // Duplicate for grid fill
      title: 'AI in Modern Apps',
      excerpt: 'How to integrate LLMs and machine learning into your everyday applications.',
      author: 'Emily White',
      date: 'Nov 25, 2025',
      category: 'AI'
    },
  ];

  return (
    <PageLayout 
      title="Latest Insights" 
      subtitle="Thoughts, tutorials, and trends from our team."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post, index) => (
          <div 
            key={index}
            className="group flex flex-col bg-[#111] border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-300"
          >
            {/* Image Placeholder */}
            <div className="h-48 bg-gray-900 relative overflow-hidden">
               <div className={`absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 group-hover:scale-110 transition-transform duration-700`}></div>
               <div className="absolute inset-0 flex items-center justify-center">
                 <BookOpen className="w-12 h-12 text-white/10 group-hover:text-white/20 transition-colors" />
               </div>
               <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-bold text-white bg-white/10 backdrop-blur-md rounded-full border border-white/10">
                    {post.category}
                  </span>
               </div>
            </div>

            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <User className="w-3 h-3" /> {post.author}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6 flex-1">
                {post.excerpt}
              </p>

              <button className="flex items-center gap-2 text-white font-medium hover:gap-4 transition-all duration-300 self-start group/btn">
                Read Article <ArrowRight className="w-4 h-4 text-purple-500" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Blog;
