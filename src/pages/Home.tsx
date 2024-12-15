import React from 'react';
import { Link } from 'react-router-dom';
import { Image, MessageCircle, Music, UtensilsCrossed, Search } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">Welcome to SuperApp</h1>
        <p className="mt-4 text-xl text-gray-600">Your all-in-one solution for everyday tasks</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard
          to="/remove-bg"
          icon={<Image className="h-8 w-8" />}
          title="Remove Background"
          description="Remove background from any image instantly"
        />
        <FeatureCard
          to="/chat"
          icon={<MessageCircle className="h-8 w-8" />}
          title="Real-time Chat"
          description="Connect with others instantly"
        />
        <FeatureCard
          to="/music"
          icon={<Music className="h-8 w-8" />}
          title="Music Search"
          description="Find songs by listening or searching"
        />
        <FeatureCard
          to="/food"
          icon={<UtensilsCrossed className="h-8 w-8" />}
          title="Food Delivery"
          description="Order from your favorite restaurants"
        />
        <FeatureCard
          to="/visual-search"
          icon={<Search className="h-8 w-8" />}
          title="Visual Search"
          description="Search by drawing circles on images"
        />
      </div>
    </div>
  );
}

function FeatureCard({ to, icon, title, description }: {
  to: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Link
      to={to}
      className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0 p-3 bg-blue-50 rounded-full">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="mt-1 text-gray-600">{description}</p>
        </div>
      </div>
    </Link>
  );
}