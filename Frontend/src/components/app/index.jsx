import React from 'react';
import { CustomButton } from './../../components/button/index';
import { CustomInputBasic } from './../../components/input/index';
import {TextField} from "@mui/material";

function App() {
    const defaultValue = "hhjk";
    const label = "Name";
    const isRequired = true;
    const inputId = "inputId";
  return (
      <div>
        <CustomButton onClick={() => console.log('click!')}>LOG IN</CustomButton>
        <CustomInputBasic />
          <TextField
              required={isRequired}
              id={inputId}
              label={label}
              defaultValue={defaultValue}
              sx={{
                  borderRadius: 4,
                  minWidth: 460,
                  minHeight: 56,
              }}
          />
      </div>

  );
}

export default App;
