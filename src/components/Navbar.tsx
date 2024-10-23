import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, User, BookmarkIcon, ListIcon } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-white/10 backdrop-blur-lg border-b border-white/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="w-8 h-8 text-white" />
            <span className="text-xl font-bold text-white">寻书</span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link
              to="/bookshelf"
              className="text-white hover:bg-white/10 px-3 py-2 rounded-lg transition flex items-center space-x-2"
            >
              <BookmarkIcon className="w-5 h-5" />
              <span>书架</span>
            </Link>
            <Link
              to="/reading-list"
              className="text-white hover:bg-white/10 px-3 py-2 rounded-lg transition flex items-center space-x-2"
            >
              <ListIcon className="w-5 h-5" />
              <span>书单</span>
            </Link>
            <Link
              to="/profile"
              className="text-white hover:bg-white/10 px-3 py-2 rounded-lg transition flex items-center space-x-2"
            >
              <User className="w-5 h-5" />
              <span>我的</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;