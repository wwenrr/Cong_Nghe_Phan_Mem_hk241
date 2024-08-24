import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import Nav from './assets/components/nav';
import Xu_huong from './assets/components/xu-huong';
import Trang_suc from './assets/components/trang-suc';
import Khuyen_mai from './assets/components/khuyen-mai';
import Thuong_hieu from './assets/components/thuong-hieu';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="/" element={<Xu_huong />} />
          <Route path="/trang-suc" element={<Trang_suc />} />
          <Route path="/thuong-hieu" element={<Thuong_hieu />} />
          <Route path="/khuyen-mai" element={<Khuyen_mai />} />
        </Route>
      </Routes> 
    </Router>
  );
}

export default App;
