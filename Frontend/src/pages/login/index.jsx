import React from 'react';
import Box from '@mui/material/Box';
import { CustomButton } from '../../components/button';
import { CustomInput } from '../../components/input';
import Layout from '../../components/layout';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';

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
        <CustomInput
          inputId={'name'}
          isRequired={true}
          label={'Name'}
          placeholder={'yourname@gmail.com'}
          type={'text'}
        />
        <Box sx={{ mt: 2, mb: 4 }}>
          <CustomInput
            inputId={'password'}
            isRequired={false}
            label={'Password'}
            placeholder={''}
            type={'password'}
          />
        </Box>

        <CustomButton onClick={() => console.log('click!')} disabled>
          LOG IN
        </CustomButton>
        <Box sx={{ mt: 2 }}>
          <Typography>
            If you have no account, you can
            <Link
              sx={{
                textDecoration: 'none',
                color: 'custom.greyDark',
                marginLeft: '4px',
              }}
              component={RouterLink}
              to="/signup"
            >
              SIGN UP.
            </Link>
          </Typography>
        </Box>
      </Box>
    </Layout>
  );
}

export default Login;
