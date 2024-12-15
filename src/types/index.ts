export interface Message {
  id: string;
  text: string;
  sender: string;
  timestamp: Date;
}

export interface Song {
  id: string;
  title: string;
  artist: string;
  albumArt: string;
}

export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  image: string;
  deliveryTime: string;
}

export interface User {
  id: string;
  name: string;
  avatar: string;
}