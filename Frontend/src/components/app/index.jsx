import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../../pages/login';
import SignIn from '../../pages/signin';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="register" element={<SignIn />} />
    </Routes>
  );
}

export default App;
