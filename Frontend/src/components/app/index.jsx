import React from 'react';
import Stack from '@mui/material/Stack';
import { CustomButton } from './../../components/button/index';

function App() {
  return (
    <Stack spacing={2} direction="row">
      <CustomButton onClick={() => console.log('click!')}>LOG IN</CustomButton>
      <CustomButton disabled focusableWhenDisabled>
        LOG IN
      </CustomButton>
    </Stack>
  );
}

export default App;
