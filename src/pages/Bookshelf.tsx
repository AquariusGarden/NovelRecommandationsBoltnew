import React from 'react';
import { Book } from 'lucide-react';

const Bookshelf = () => {
  const books = [
    {
      title: '重生之医妃锦绣',
      progress: '已读完',
      lastRead: '2小时前',
      cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    },
    {
      title: '我在仙界种田',
      progress: '第86章',
      lastRead: '昨天',
      cover: 'https://images.unsplash.com/photo-1535666669445-e8c15cd2e7d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    },
    {
      title: '霸总的心尖宠',
      progress: '第23章',
      lastRead: '3天前',
      cover: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    }
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-2 mb-6">
          <Book className="w-6 h-6 text-white" />
          <h1 className="text-2xl font-bold text-white">我的书架</h1>
        </div>

        <div className="grid gap-4">
          {books.map((book) => (
            <div
              key={book.title}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-4 flex items-center space-x-4"
            >
              <img
                src={book.cover}
                alt={book.title}
                className="w-20 h-28 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white">{book.title}</h3>
                <p className="text-white/80">{book.progress}</p>
                <p className="text-white/60 text-sm">上次阅读：{book.lastRead}</p>
              </div>
              <button className="px-4 py-2 bg-white/10 rounded-lg text-white hover:bg-white/20 transition">
                继续阅读
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Bookshelf;