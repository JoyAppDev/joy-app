import React from 'react';
import { useForm, Controller } from 'react-hook-form';

import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { CustomInput } from '../../components/input';

function RegistrationStepFinal({ name, address, updateFields, idNumber, paymentInfo, setIsValidForm }) {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = data => {
    updateFields(data);
    alert(JSON.stringify(data));
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
        '&.MuiPaper-root': { left: 0 },
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
              onChange={e => updateFields({name: e.target.value})}
              value={name || ''}
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
              onChange={e => updateFields({address: e.target.value})}
              value={address || ''}
              placeholder={'NY, 123 madisson av.'}
            />
          )}
        />
        <Controller
          control={control}
          name="id-number"
          rules={{ required: false }}
          render={({ field: { onChange, value } }) => (
            <CustomInput
              label={'ID number'}
              type={'text'}
              onChange={e => updateFields({idNumber: e.target.value})}
              value={idNumber || ''}
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
                id="payment_type"
              >
                <MenuItem value="paypal" label="PayPal">
                  PayPal
                </MenuItem>
                <MenuItem value="credit-card" label="Credit card">
                  Credit card
                </MenuItem>
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
              onChange={e => updateFields({paymentInfo: e.target.value})}
              value={paymentInfo || ''}
              placeholder={''}
            />
          )}
        />
      </Stack>
    </Box>
  );
}

export default RegistrationStepFinal;
