import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import Nav from './assets/components/nav';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Nav />} />
      </Routes>
    </Router>
  );
}

export default App;
