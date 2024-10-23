import React from 'react';
import { TrendingUp, Heart, Star } from 'lucide-react';

const PopularSection = () => {
  const popularBooks = [
    {
      title: '重生之医妃锦绣',
      author: '木芙蓉',
      tags: ['古言', '重生', '医术'],
      cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    },
    {
      title: '我在仙界种田',
      author: '青莲居士',
      tags: ['仙侠', '种田', '悠闲'],
      cover: 'https://images.unsplash.com/photo-1535666669445-e8c15cd2e7d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    },
    {
      title: '霸总的心尖宠',
      author: '夜语甜',
      tags: ['现代', '总裁', '甜宠'],
      cover: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    }
  ];

  return (
    <section className="mt-12 bg-white/10 backdrop-blur-lg rounded-2xl p-6">
      <div className="flex items-center space-x-2 mb-6">
        <TrendingUp className="w-6 h-6 text-white" />
        <h2 className="text-2xl font-bold text-white">热门推荐</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {popularBooks.map((book) => (
          <div key={book.title} className="bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/10">
            <div className="relative aspect-[2/3] mb-4">
              <img
                src={book.cover}
                alt={book.title}
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{book.title}</h3>
            <p className="text-white/80 text-sm mb-3">{book.author}</p>
            <div className="flex flex-wrap gap-2">
              {book.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-white/10 rounded-full text-white/90"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularSection;