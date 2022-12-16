import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../../pages/login';
import HorizontalStepper from '../stepper';
import {AuthForm} from "../auth-form";
import SignIn from "../../pages/signin";

function App() {
  return (
      <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="stepper" element={<HorizontalStepper />} />
          <Route path="auth" element={<AuthForm />} />
          <Route path="sign-in" element={<SignIn />} />
          {/* form with typescript, subsidiary */}
      </Routes>
  );
}

export default App;
