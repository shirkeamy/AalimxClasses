import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import NotFountPage from './Pages/NotFountPage';
import About from './Pages/About';
import LandingPage from './Pages/LandingPage';
import Contact from './Pages/Contact';
import ParentPage from './Pages/useContextHook/ParentPage';
import Employees from './Pages/Employee/Employees';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/use-context" element={<ParentPage />} />
        <Route path="/employees" element={<Employees />} />

        <Route path="*" element={<NotFountPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
