import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../../pages/login';
import {AuthForm} from "../auth-form";

function App() {
  return (
      <>
          <Routes>
              <Route path="login" element={<Login />} />
          </Routes>
          <Routes>
              <Route path="auth" element={<AuthForm />} />
          </Routes>
      </>

  );
}

export default App;
