import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import AgilePrinciples from './components/AgilePrinciples';
import NavigationBar from './components/NavigationBar';
import './App.css';
// other imports

export function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/agile-principles" element={<AgilePrinciples />} />
      </Routes>
    </BrowserRouter>
  );
}
