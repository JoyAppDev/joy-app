import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../../pages/login';
import SignIn from '../../pages/signin';
import Dashboard from "../../pages/dashboard";
import MiniModal from "../small-modal";

function App() {
  return (
      <div className='page'>
          <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="register" element={<SignIn />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="mini" element={<MiniModal />} />
          </Routes>
      </div>
  );
}

export default App;
