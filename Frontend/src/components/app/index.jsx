import React from 'react';
import { CustomButton } from './../../components/button/index';
import { CustomInput } from './../../components/input/index';

function App() {
  return (
      <div>
        <CustomButton onClick={() => console.log('click!')}>LOG IN</CustomButton>
        <CustomInput
            inputId={"name"}
            isRequired={true}
            label={"Name"}
            placeholder={"yourname@gmail.com"}
            type={"text"}
        />
      </div>

  );
}

export default App;
