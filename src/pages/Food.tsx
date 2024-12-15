import React, { useState } from 'react';
import { Search, Star } from 'lucide-react';
import { Restaurant } from '../types';

export default function Food() {
  const [searchQuery, setSearchQuery] = useState('');
  const [restaurants] = useState<Restaurant[]>([
    {
      id: '1',
      name: 'Tasty Burger Joint',
      cuisine: 'American',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop',
      deliveryTime: '20-30 min',
    },
    {
      id: '2',
      name: 'Pizza Paradise',
      cuisine: 'Italian',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=200&fit=crop',
      deliveryTime: '25-35 min',
    },
  ]);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">Food Delivery</h1>
        <p className="mt-2 text-gray-600">Order from your favorite restaurants</p>
      </div>

      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for restaurants or cuisines..."
          className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">{restaurant.name}</h3>
                  <p className="text-gray-600">{restaurant.cuisine}</p>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-medium">{restaurant.rating}</span>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-600">{restaurant.deliveryTime}</span>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}