import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';

function RegistrationStepFinal() {
  const { control, defaultValue, watch } = useFormContext();
  const type = watch('paymentInfo');

  return (
    <Box
      sx={{
        mt: 4.4,
        width: '458px',
        '&.MuiPaper-root': { left: 0 },
      }}
    >
      <Stack spacing={2}>
        <Controller
          name="name"
          control={control}
          defaultValue={defaultValue}
          render={({ field, fieldState: { invalid, error } }) => (
            <TextField
              label={'Name / Surname'}
              helperText={invalid ? error.message : ''}
              {...field}
              error={invalid}
            />
          )}
        />

        <Controller
          name="address"
          render={({ field, fieldState: { invalid, error } }) => (
            <TextField
              label={'Address'}
              helperText={invalid ? error.message : ''}
              {...field}
              error={invalid}
              placeholder={'NY, 123 Madisson av.'}
            />
          )}
          control={control}
          defaultValue
          variant="outlined"
        />

        <Controller
          name="idNumber"
          render={({ field, fieldState: { invalid, error } }) => (
            <TextField
              label={'ID number'}
              helperText={invalid ? error.message : ''}
              {...field}
              error={invalid}
              placeholder={'123-456-789'}
            />
          )}
          control={control}
          defaultValue
        />

        <FormControl variant="outlined">
          <InputLabel id="type-label" htmlFor="paymentInfo">
            Payment type
          </InputLabel>
          <Stack spacing={2}>
            <Controller
              name="paymentInfo"
              control={control}
              rules={{ required: false }}
              render={({ field }) => (
                <Select
                  sx={{ maxWidth: 600 }}
                  margin="dense"
                  {...field}
                  type="select"
                  labelId="type-label"
                  label="Payment Type"
                >
                  <MenuItem value="paypal" label="PayPal">
                    PayPal
                  </MenuItem>
                  <MenuItem value="credit" label="Credit card">
                    Credit card
                  </MenuItem>
                </Select>
              )}
            />

            {type === 'paypal' && (
              <>
                <Controller
                  name="paypal"
                  control={control}
                  render={({ field, fieldState: { invalid, error } }) => (
                    <TextField
                      {...field}
                      fullWidth
                      sx={{ maxWidth: 600 }}
                      label={'PayPal'}
                      helperText={invalid ? error.message : ''}
                      error={invalid}
                    />
                  )}
                />
              </>
            )}
          </Stack>
        </FormControl>
      </Stack>
    </Box>
  );
}

export default RegistrationStepFinal;
