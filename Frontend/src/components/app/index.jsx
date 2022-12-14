import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../../pages/login';
import HorizontalStepper from '../stepper';

function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="stepper" element={<HorizontalStepper />} />
    </Routes>
  );
}

export default App;
