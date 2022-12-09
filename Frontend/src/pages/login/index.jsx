import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Header } from '../../components/header';
import { CustomButton } from '../../components/button';
import { CustomInput } from '../../components/input';
import ControlledCheckbox from '../../components/checkbox';
import star from './../../assets/star.svg';

function Login() {
  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: star,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '25px',
          height: '25px',
        }}
      />
      <Grid item xs={12} sm={8} md={5}>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Header />

          <Box component="form" noValidate sx={{ mt: 1 }}>
            <CustomButton onClick={() => console.log('click!')}>
              LOG IN
            </CustomButton>
            <CustomButton onClick={() => console.log('click!')}>
              LOG IN
            </CustomButton>
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
            <ControlledCheckbox />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Login;
