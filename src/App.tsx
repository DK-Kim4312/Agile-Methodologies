import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import AgilePrinciples from './components/AgilePrinciples';
// other imports

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agile-principles" element={<AgilePrinciples />} />
      </Routes>
    </BrowserRouter>
  );
}
