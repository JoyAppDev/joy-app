import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Link as RouterLink } from 'react-router-dom';

import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { CustomButton } from '../../components/button';
import { CustomInput } from '../../components/input';

function RegistrationStepFinal() {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = data => {
    console.log(data);
    reset();
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{
        mt: 4.4,
        width: '458px',
      }}
    >
      <Stack spacing={2}>
        <Controller
          control={control}
          name="name"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <CustomInput
              label={'Name / Surname'}
              type={'text'}
              onChange={e => onChange(e)}
              value={value || ''}
              placeholder={'John Dow'}
            />
          )}
        />
        <Controller
          control={control}
          name="address"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <CustomInput
              label={'Address'}
              type={'text'}
              onChange={e => onChange(e)}
              value={value || ''}
              placeholder={'NY, 123 madisson av.'}
            />
          )}
        />
        <Controller
          control={control}
          name="address"
          rules={{ required: false }}
          render={({ field: { onChange, value } }) => (
            <CustomInput
              label={'ID number'}
              type={'text'}
              onChange={e => onChange(e)}
              value={value || ''}
              placeholder={'123-456-789'}
            />
          )}
        />

        <FormControl variant="outlined">
          <InputLabel htmlFor="payment_type">Payment type</InputLabel>
          <Controller
            name="payment"
            control={control}
            rules={{ required: false }}
            render={({ field: { onChange, value } }) => (
              <Select
                value={value}
                onChange={onChange}
                label="Payment Type"
                labelId="payment_type"
              >
                <MenuItem value="credit-card">Credit card</MenuItem>
                <MenuItem value="paypal">PayPal</MenuItem>
              </Select>
            )}
            defaultValue="paypal"
          />
        </FormControl>

        <Controller
          control={control}
          name="paypal"
          rules={{ required: false }}
          render={({ field: { onChange, value } }) => (
            <CustomInput
              label={'PayPal'}
              type={'text'}
              onChange={e => onChange(e)}
              value={value || ''}
              placeholder={''}
            />
          )}
        />
      </Stack>

      <Stack spacing={2} mt={4}>
        <CustomButton type="submit">COMPLETE ACCOUNT</CustomButton>

        <Typography>
          If you already have an account, you can
          <Link
            sx={{
              textDecorationColor: 'rgba(55, 103, 226, 1)',
              color: 'rgba(55, 103, 226, 1)',
              marginLeft: '4px',
            }}
            component={RouterLink}
            to="/signin"
          >
            LOG IN.
          </Link>
        </Typography>
      </Stack>
    </Box>
  );
}

export default RegistrationStepFinal;
