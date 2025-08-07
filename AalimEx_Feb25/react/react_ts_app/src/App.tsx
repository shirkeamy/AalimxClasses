import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PageNotFound from './pages/PageNotFound';
import UseEffectHooks from './pages/UseEffectHooks';
import UseCallBackHook from './pages/UseCallBackHook';

function App() {
  let userName: string = "Peter";
  let users: string[] = ["Peter", "Sam", "John", "Dan", "Berray"]
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/hooks' element={<UseEffectHooks />} />
        <Route path='/callback-hooks' element={<UseCallBackHook />} />
        
        
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
