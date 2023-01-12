import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../../pages/login';
import SignIn from '../../pages/signin';
import Dashboard from '../../pages/dashboard';
import LayoutModal from '../modal-form/index';
import BasicModal from '../modal-dashboard';
import ModalDashboardPage from '../../pages/modal-dashboard-page';

function App() {
  return (
    <div className="page">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="register" element={<SignIn />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="modal" element={<ModalDashboardPage />} />
      </Routes>
    </div>
  );
}

export default App;
