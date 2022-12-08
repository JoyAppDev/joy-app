import React from 'react';
import { CustomButton } from './../../components/button/index';
import ControlledCheckbox from './../checkbox';
import { CustomInput } from './../../components/input/index';

function App() {
  return (
    <>
      <CustomButton onClick={() => console.log('click!')}>LOG IN</CustomButton>
        <CustomButton onClick={() => console.log('click!')}>LOG IN</CustomButton>
        <CustomInput
            inputId={"name"}
            isRequired={true}
            label={"Name"}
            placeholder={"yourname@gmail.com"}
            type={"text"}
        />
        <CustomInput
            inputId={"password"}
            isRequired={false}
            label={"Password"}
            placeholder={""}
            type={"password"}
        />
        <ControlledCheckbox />
    </>


  );
}

export default App;
