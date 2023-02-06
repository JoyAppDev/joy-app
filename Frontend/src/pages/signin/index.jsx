import React from 'react';

import Stack from '@mui/material/Stack';

import Layout from '../../components/layout';
import MultiStepRegisterForm from '../../components/multi-stepp-register-form';

function SignIn() {
  return (
    <Layout>
      <Stack
        sx={{
          marginLeft: 0,
          paddingLeft: 0,
        }}
      >
        <MultiStepRegisterForm />
      </Stack>
    </Layout>
  );
}

export default SignIn;
