import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../../pages/login';
import SignIn from '../../pages/signin';
import Dashboard from '../../pages/dashboard';
import SuccessPopup from "../success-popup";
import Upload from "../upload";

function App() {
  return (
      <div className='page'>
          <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="register" element={<SignIn />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="mini" element={<SuccessPopup />} />
              <Route path="upload" element={<Upload />} />
          </Routes>
      </div>
  );
}

export default App;
