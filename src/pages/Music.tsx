import React, { useState } from 'react';
import { Mic, Search, Play, Pause } from 'lucide-react';
import { Song } from '../types';

export default function Music() {
  const [isListening, setIsListening] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [songs, setSongs] = useState<Song[]>([
    {
      id: '1',
      title: 'Sample Song 1',
      artist: 'Artist 1',
      albumArt: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
    },
    {
      id: '2',
      title: 'Sample Song 2',
      artist: 'Artist 2',
      albumArt: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop',
    },
  ]);

  const toggleListening = () => {
    setIsListening(!isListening);
    // Implement music recognition logic
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">Music Search</h1>
        <p className="mt-2 text-gray-600">Search for songs by name or by listening</p>
      </div>

      <div className="flex space-x-4">
        <div className="flex-1">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for songs..."
              className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        <button
          onClick={toggleListening}
          className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
            isListening
              ? 'bg-red-600 text-white'
              : 'bg-blue-600 text-white'
          } hover:opacity-90 transition-colors`}
        >
          <Mic className="h-5 w-5" />
          <span>{isListening ? 'Listening...' : 'Listen'}</span>
        </button>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {songs.map((song) => (
          <div
            key={song.id}
            className="flex space-x-4 bg-white p-4 rounded-lg shadow-sm"
          >
            <img
              src={song.albumArt}
              alt={song.title}
              className="w-24 h-24 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{song.title}</h3>
              <p className="text-gray-600">{song.artist}</p>
              <button className="mt-2 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                <Play className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}