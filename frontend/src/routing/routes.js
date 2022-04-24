import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from '../pages/homepage';

export function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/test" element={<>
          <h1>Front end testing</h1>
        </>} />
      </Routes>
    </Router>
  );
}
