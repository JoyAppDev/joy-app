import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

import { CustomButton } from '../../components/button';
import { CustomInput } from '../../components/input';
import Layout from '../../components/layout';
import { passwordValidator } from './../../utils/validator';
import Spinner from '../../components/spinner';
import { login, resetData } from '../../slices/auth-slice';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    state => state.auth
  );

  React.useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess && user) {
      navigate('/dashboard');
    }

    dispatch(resetData());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = data => {
    dispatch(login(data));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Layout>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        autoComplete="off"
        sx={{
          mt: 4.4,
          maxWidth: '458px',
          width: { xs: '90%', md: '100%' },
        }}
      >
        <Stack spacing={2}>
          <Controller
            control={control}
            name="email"
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <CustomInput
                label={'Email address'}
                type={'text'}
                onChange={e => {
                  onChange(e);
                }}
                value={value || ''}
                error={!!errors.email?.message}
                helperText={errors.email?.message}
                placeholder={'yourname@gmail.com'}
                autoComplete="off"
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            rules={passwordValidator}
            render={({ field: { onChange, value } }) => (
              <CustomInput
                label={'Password'}
                type={'password'}
                onChange={e => {
                  onChange(e);
                }}
                value={value || ''}
                error={!!errors.password?.message}
                helperText={errors.password?.message}
                placeholder={''}
                autoComplete="off"
              />
            )}
          />
        </Stack>

        <Stack spacing={2} mt={4}>
          <CustomButton type="submit" disabled={!isValid}>
            LOG IN
          </CustomButton>

          <Typography>
            If you have no account, you can
            <Link
              sx={{
                textDecorationColor: 'rgba(55, 103, 226, 1)',
                color: 'rgba(55, 103, 226, 1)',
                marginLeft: '4px',
                cursor: 'pointer',
              }}
              component={RouterLink}
              to="/register"
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
