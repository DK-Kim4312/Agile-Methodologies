import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AgilePrinciples from './components/AgilePrinciples';
// other imports

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/agile-principles" element={<AgilePrinciples />} />
    </Routes>
  );
}
