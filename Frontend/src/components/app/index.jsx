import React from 'react';
import { CustomButton } from './../../components/button/index';

function App() {
  return (
    <CustomButton onClick={() => console.log('click!')}>LOG IN</CustomButton>
  );
}

export default App;
