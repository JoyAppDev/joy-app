import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Link as RouterLink } from 'react-router-dom';

import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormHelperText from '@mui/material/FormHelperText';
import FormControlLabel from '@mui/material/FormControlLabel';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  email: yup
    .string()
    .label('Email address')
    .trim()
    .email('Please enter a valid email format.')
    .required('E-mail is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(3, '​Password must contain at least 3 characters'),
  termsCheck: yup
    .boolean()
    .oneOf([true], 'Please accept Terms of use')
    .required('Terms of use is required'),
});

function RegistrationStepFirst({ updateFields, setIsValidForm }) {
  const initialValues = {
    email: '',
    password: '',
    termsOfService: false,
  };

  const {
    handleSubmit,
    control,
    register,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: 'onChange',
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });

  const handleSubmission = fields => {
    console.log(fields);
    updateFields(fields);
    alert(JSON.stringify(fields));
    reset();
  };

  console.log(errors);
  React.useEffect(() => {
    if (isValid) {
      setIsValidForm(true);
    }
  }, [isValid, setIsValidForm]);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(handleSubmission)}
      noValidate
      sx={{
        mt: 4.4,
        minWidth: '458px',
        width: '100%',
      }}
    >
      <Stack spacing={2} mt={4}>
        <Stack spacing={2}>
          <Controller
            control={control}
            name="email"
            rules={{ required: true }}
            defaultValue={initialValues.email}
            render={({ field }) => (
              <TextField
                {...field}
                label={'Email address'}
                type={'text'}
                placeholder={'yourname@gmail.com'}
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ' '}
                required
                color="secondary"
                fullWidth
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                label={'Password'}
                type={'password'}
                placeholder={''}
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : ' '}
                required
                color="secondary"
                fullWidth
              />
            )}
          />
        </Stack>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            paddingLeft: '12px',
          }}
        >
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    borderColor: 'rgba(0, 0, 0, 0.6)',
                  }}
                  required
                />
              }
              {...register('termsCheck')}
              label={
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <Typography
                    ml={1.5}
                    color={errors['termsCheck'] ? 'error' : 'inherit'}
                  >
                    I agree with
                  </Typography>
                  <Link
                    sx={{
                      textDecoration: 'none',
                      color: 'custom.greyDark',
                      marginLeft: '4px',
                    }}
                    component={RouterLink}
                    to="/"
                  >
                    Terms of service
                  </Link>
                </Box>
              }
            />
            <FormHelperText error={!!errors['termsCheck']}>
              {errors['termsCheck'] ? errors['termsCheck'].message : ''}
            </FormHelperText>
          </FormGroup>
        </Box>
      </Stack>
    </Box>
  );
}

export default RegistrationStepFirst;
