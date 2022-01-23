import React from 'react';
import { Routes,Route } from 'react-router-dom'

import HomeView from './views/Homeview'
import AboutView from './views/AboutView'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeView/>} />
      <Route path="/about" element={<AboutView/>}/>
    </Routes>
  );
}

export default App;
