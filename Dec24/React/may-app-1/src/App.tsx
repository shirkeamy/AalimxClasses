import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import NotFountPage from './Pages/NotFountPage';
import About from './Pages/About';
import LandingPage from './Pages/LandingPage';
import Contact from './Pages/Contact';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NotFountPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
