import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../../pages/login';
import HorizontalStepper from '../stepper';
import {AuthForm} from "../auth-form";
import {AuthFormJ} from "../auth-form/form";

function App() {
  return (
      <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="stepper" element={<HorizontalStepper />} />
          <Route path="auth" element={<AuthForm />} />
          <Route path="form" element={<AuthFormJ />} />
      </Routes>
  );
}

export default App;
