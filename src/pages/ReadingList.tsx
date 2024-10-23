import React from 'react';
import { ListPlus } from 'lucide-react';

const ReadingList = () => {
  const readingLists = [
    {
      title: '必看仙侠推荐',
      description: '精选十本仙侠小说，每一本都是经典',
      bookCount: 10,
      likes: 128
    },
    {
      title: '甜宠文合集',
      description: '收录各类甜宠文，温馨治愈不狗血',
      bookCount: 15,
      likes: 256
    },
    {
      title: '种田文推荐',
      description: '喜欢悠闲种田文的看过来',
      bookCount: 8,
      likes: 96
    }
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <ListPlus className="w-6 h-6 text-white" />
            <h1 className="text-2xl font-bold text-white">我的书单</h1>
          </div>
          <button className="px-4 py-2 bg-white text-indigo-600 rounded-lg hover:bg-white/90 transition">
            创建书单
          </button>
        </div>

        <div className="grid gap-4">
          {readingLists.map((list) => (
            <div
              key={list.title}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-white mb-2">{list.title}</h3>
              <p className="text-white/80 mb-4">{list.description}</p>
              <div className="flex items-center space-x-4 text-white/60">
                <span>{list.bookCount} 本书</span>
                <span>·</span>
                <span>{list.likes} 人赞过</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ReadingList;