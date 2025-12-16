import React from 'react';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import About from './Pages/About';
import PageNotFound from './Pages/PageNotFound';

function App() {
  let username: string = "Guest";

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* <Route path='*' element={<><h1>Page not found!!</h1></>} /> */}
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
