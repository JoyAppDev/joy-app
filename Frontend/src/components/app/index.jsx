import React from 'react';
import { CustomButton } from './../../components/button/index';
import ControlledCheckbox from './../checkbox';

function App() {
  return (
    <>
      <CustomButton onClick={() => console.log('click!')}>LOG IN</CustomButton>
      <ControlledCheckbox />
    </>
  );
}

export default App;
