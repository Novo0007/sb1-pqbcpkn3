import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import RemoveBg from './pages/RemoveBg';
import Chat from './pages/Chat';
import Music from './pages/Music';
import Food from './pages/Food';
import VisualSearch from './pages/VisualSearch';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="remove-bg" element={<RemoveBg />} />
          <Route path="chat" element={<Chat />} />
          <Route path="music" element={<Music />} />
          <Route path="food" element={<Food />} />
          <Route path="visual-search" element={<VisualSearch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;