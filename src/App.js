import React from 'react';
import {Routes, Route } from 'react-router-dom';
import './App.css';

// we import from the homepagecomponent and then render it 
import HomePage from './pages/homepage/homepage.component.jsx';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);


function App() {
  return (
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hats" element={<HatsPage />} />
      </Routes>
    

  );
}

export default App;
