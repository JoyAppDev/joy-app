import React from 'react';
import Box from '@mui/material/Box';
import { CustomButton } from '../../components/button';
import { CustomInput } from '../../components/input';
import Layout from '../../components/layout';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import { Stack } from '@mui/material';

function Login() {
  return (
    <Layout>
      <Box
        component="form"
        noValidate
        sx={{
          mt: 4.4,
          minWidth: '458px',
          width: '100%',
        }}
      >
        <Stack spacing={2}>
          <CustomInput
            inputId={'name'}
            isRequired={true}
            label={'Name'}
            placeholder={'yourname@gmail.com'}
            type={'text'}
          />

          <CustomInput
            inputId={'password'}
            isRequired={false}
            label={'Password'}
            placeholder={''}
            type={'password'}
          />
        </Stack>

        <Stack spacing={2} mt={4}>
          <CustomButton onClick={() => console.log('click!')} disabled>
            LOG IN
          </CustomButton>

          <Typography>
            If you have no account, you can
            <Link
              sx={{
                textDecorationColor: 'rgba(55, 103, 226, 1)',
                color: 'rgba(55, 103, 226, 1)',
                marginLeft: '4px',
              }}
              component={RouterLink}
              to="/signup"
            >
              SIGN UP.
            </Link>
          </Typography>
        </Stack>
      </Box>
    </Layout>
  );
}

export default Login;
