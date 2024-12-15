import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Home, Image, MessageCircle, Music, UtensilsCrossed, Search } from 'lucide-react';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center px-2 py-2 text-gray-900 hover:text-blue-600">
                <Home className="h-6 w-6" />
                <span className="ml-2 font-semibold">SuperApp</span>
              </Link>
            </div>
            <div className="flex space-x-8">
              <Link to="/remove-bg" className="flex items-center px-2 py-2 text-gray-600 hover:text-blue-600">
                <Image className="h-5 w-5" />
                <span className="ml-1">Remove BG</span>
              </Link>
              <Link to="/chat" className="flex items-center px-2 py-2 text-gray-600 hover:text-blue-600">
                <MessageCircle className="h-5 w-5" />
                <span className="ml-1">Chat</span>
              </Link>
              <Link to="/music" className="flex items-center px-2 py-2 text-gray-600 hover:text-blue-600">
                <Music className="h-5 w-5" />
                <span className="ml-1">Music</span>
              </Link>
              <Link to="/food" className="flex items-center px-2 py-2 text-gray-600 hover:text-blue-600">
                <UtensilsCrossed className="h-5 w-5" />
                <span className="ml-1">Food</span>
              </Link>
              <Link to="/visual-search" className="flex items-center px-2 py-2 text-gray-600 hover:text-blue-600">
                <Search className="h-5 w-5" />
                <span className="ml-1">Visual Search</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
}