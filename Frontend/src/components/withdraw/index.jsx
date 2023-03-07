import React from 'react';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';

import { useForm, Controller } from 'react-hook-form';

import { CustomInput } from '../input/index';
import { CustomButton } from '../button';

function Withdraw({ setOpenForm, setOpenMessage }) {
  const {
    handleSubmit,
    watch,
    control,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      paymentInfo: 'credit',
      email: '',
      name: '',
      idNumber: '',
      amount: '',
    },
  });

  const type = watch('paymentInfo');

  const onSubmit = (fields, e) => {
    e.preventDefault();
    console.log(JSON.stringify(fields));
    reset();
    setOpenForm(false);
    setOpenMessage(true);
  };

  return (
    <>
      <Stack spacing={2} width={'100%'} mt={12}>
        <Typography component="h1" variant="h5" mb={2}>
          Withdraw money
        </Typography>

        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          mb={10}
        >
          <Stack spacing={2}>
            <FormControl variant="outlined">
              <InputLabel id="type-label" htmlFor="paymentInfo">
                PayPal / Credit Card
              </InputLabel>
              <Stack spacing={2}>
                <Controller
                  name="paymentInfo"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Select
                      sx={{ maxWidth: 600 }}
                      margin="dense"
                      {...field}
                      type="select"
                      labelId="type-label"
                      label="PayPal / Credit Card"
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

            <Controller
              name="email"
              control={control}
              rules={{ required: true }}
              render={({ field, fieldState: { invalid, error } }) => (
                <TextField
                  {...field}
                  label={'Email / Card number'}
                  placeholder={'test@test.com'}
                  error={invalid}
                  helperText={invalid ? error.message : ''}
                  required
                  color="secondary"
                />
              )}
            />

            <Controller
              name="name"
              control={control}
              rules={{ required: true }}
              render={({ field, fieldState: { invalid, error } }) => (
                <TextField
                  label={'Name / Surname'}
                  placeholder="John Doe"
                  {...field}
                  error={invalid}
                  helperText={invalid ? error.message : ''}
                />
              )}
            />

            <Controller
              control={control}
              name="idNumber"
              rules={{ required: true }}
              render={({ field, fieldState: { invalid, error } }) => (
                <TextField
                  {...field}
                  label={'ID Number'}
                  type={'number'}
                  placeholder={'123-456-789'}
                />
              )}
            />

            <Controller
              control={control}
              name="amount"
              rules={{ required: true }}
              render={({ field }) => (
                <CustomInput
                  {...field}
                  label={'Amount'}
                  type={'number'}
                  placeholder={'$2000'}
                />
              )}
            />

            <CustomButton
              type="submit"
              variant="contained"
              disabled={!isValid}
              sx={{ mt: 3, mb: 2, fontSize: '15px', fontWeight: '500' }}
            >
              SEND A REQUEST
            </CustomButton>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}
export default Withdraw;
