import React from 'react';
import { useForm } from 'react-hook-form';
import { Link as RouterLink } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Stack } from '@mui/material';

import AuthenticationInputs from "../../components/authentication-inputs";
import { CustomButton } from '../../components/button';
import Layout from '../../components/layout';

function Login() {
    const { handleSubmit, control, formState: { errors, isValid }, reset } = useForm({
        mode: "onBlur"
    });

    const onSubmit = (data) => {
        console.log(data);
        reset();
    }

  return (
    <Layout>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        sx={{
          mt: 4.4,
          minWidth: '458px',
          width: '100%',
        }}
      >
        <AuthenticationInputs
            control={control}
            errors={errors}
        />

        <Stack spacing={2} mt={4}>
          <CustomButton
              type="submit"
              disabled={!isValid}>
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
