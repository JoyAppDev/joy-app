import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../../pages/login';
import SignIn from '../../pages/signin';
import AccountMenu from "../account-menu";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="register" element={<SignIn />} />
        <Route path="dashboard" element={<AccountMenu />} />
    </Routes>
  );
}

export default App;
