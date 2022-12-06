import React from 'react';
import { CustomButton } from './../../components/button/index';
import { CustomInputBasic } from './../../components/input/index';

function App() {
  return (
      <div>
        <CustomButton onClick={() => console.log('click!')}>LOG IN</CustomButton>
        <CustomInputBasic />
      </div>

  );
}

export default App;
