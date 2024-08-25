import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';
import Nav from './assets/components/nav';
// import Xu_huong from './assets/components/xu-huong';
// import Trang_suc from './assets/components/trang-suc';
// import Khuyen_mai from './assets/components/khuyen-mai';
// import Thuong_hieu from './assets/components/thuong-hieu';



function App() {
  const [point, setPoint] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Nav point={point} setPoint={setPoint}/>}>
          {/* <Route path="/" element={<Xu_huong setPoint={setPoint}/>} /> */}
          {/* <Route path="/trang-suc" element={<Trang_suc setPoint={setPoint}/>} />
          <Route path="/thuong-hieu" element={<Thuong_hieu setPoint={setPoint}/>} />
          <Route path="/khuyen-mai" element={<Khuyen_mai setPoint={setPoint}/>} /> */}
        </Route>
      </Routes> 
    </Router>
  );
}

export default App;
