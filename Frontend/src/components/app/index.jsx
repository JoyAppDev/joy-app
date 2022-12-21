import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../../pages/login';
import HorizontalStepper from '../stepper';
import SignIn from '../../pages/signin';
import RegistrationFinalStep from '../registration-step-final';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="stepper" element={<HorizontalStepper />} />{' '}
      {/* subsidiary */}
      <Route path="register" element={<SignIn />} />
        <Route path="final" element={<RegistrationFinalStep />} />
    </Routes>
  );
}

export default App;
