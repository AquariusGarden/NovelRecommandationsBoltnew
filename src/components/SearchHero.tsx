import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SearchHero = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate('/chat', { state: { initialQuery: query } });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
        发现你的下一本心动小说
      </h1>
      <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl">
        智能AI推荐，为你找到最适合的小说
      </p>
      
      <form onSubmit={handleSearch} className="w-full max-w-2xl">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="试试输入：想看男主是狐妖的大女主小说"
            className="w-full px-6 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl 
                     text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30
                     shadow-lg text-lg"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white rounded-xl
                     text-indigo-600 hover:bg-white/90 transition"
          >
            <Search className="w-6 h-6" />
          </button>
        </div>
      </form>

      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {[
          '仙侠', '现代言情', '穿越重生', '玄幻', '古言',
          '甜宠', '种田文', '灵异'
        ].map((tag) => (
          <button
            key={tag}
            onClick={() => {
              setQuery(`想看${tag}类型的小说`);
              navigate('/chat', { state: { initialQuery: `想看${tag}类型的小说` } });
            }}
            className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white
                     hover:bg-white/20 transition border border-white/20"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchHero;