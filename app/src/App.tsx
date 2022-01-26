import React from 'react';
import { Routes,Route } from 'react-router-dom';

import HomeView from './views/Homeview';
import AboutView from './views/AboutView';
import GreetingsView from './views/Greetings';
import CurrentTimeView from './views/CurrentTimeView';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeView/>} />
      <Route path="/about" element={<AboutView/>}/>
      <Route path="greetings" element={<GreetingsView />} />
      <Route path="/current-time/:greeting" element={<CurrentTimeView/>} />
    </Routes>
  );
}

export default App;
