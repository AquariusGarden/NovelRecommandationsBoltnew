import React, { useState } from 'react';
import { Send, BookOpen } from 'lucide-react';

interface Message {
  id: number;
  type: 'user' | 'ai';
  content: string;
  books?: {
    title: string;
    author: string;
    cover: string;
    description: string;
  }[];
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'ai',
      content: '你好！我是你的智能书友，告诉我你想看什么类型的小说，我来为你推荐。',
    }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      content: input,
    };

    // Simulate AI response with book recommendations
    const aiResponse: Message = {
      id: messages.length + 2,
      type: 'ai',
      content: '根据你的喜好，我为你推荐以下几本小说：',
      books: [
        {
          title: '仙途有你',
          author: '月下清风',
          cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          description: '一个关于修仙之路上邂逅真爱的故事，情节跌宕起伏，感情描写细腻动人。'
        },
        {
          title: '医妃难求',
          author: '紫菱',
          cover: 'https://images.unsplash.com/photo-1535666669445-e8c15cd2e7d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          description: '女主重生为医女，凭借精湛医术和智慧在后宫中步步为营，既有医术情节又有感情戏份。'
        }
      ]
    };

    setMessages([...messages, userMessage, aiResponse]);
    setInput('');
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl h-[80vh] flex flex-col">
        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] ${
                  message.type === 'user'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white/10 text-white'
                } rounded-2xl p-4`}
              >
                <p>{message.content}</p>
                {message.books && (
                  <div className="mt-4 space-y-4">
                    {message.books.map((book) => (
                      <div
                        key={book.title}
                        className="flex space-x-4 bg-white/5 rounded-xl p-3"
                      >
                        <img
                          src={book.cover}
                          alt={book.title}
                          className="w-24 h-32 object-cover rounded-lg"
                        />
                        <div>
                          <h3 className="font-bold text-lg">{book.title}</h3>
                          <p className="text-white/80 text-sm mb-2">作者：{book.author}</p>
                          <p className="text-white/70 text-sm">{book.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="border-t border-white/10 p-4">
          <form onSubmit={handleSend} className="flex space-x-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="描述你想看的小说类型..."
              className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded-xl hover:bg-indigo-700 transition flex items-center space-x-2"
            >
              <Send className="w-5 h-5" />
              <span>发送</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;