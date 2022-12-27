import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../../pages/login';
import SignIn from '../../pages/signin';
import Dashboard from "../../pages/dashboard";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="register" element={<SignIn />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
