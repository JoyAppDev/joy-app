import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormHelperText from '@mui/material/FormHelperText';
import FormControlLabel from '@mui/material/FormControlLabel';

function RegistrationStepFirst() {
  const { control, defaultValue } = useFormContext();

  return (
    <Box
      sx={{
        mt: 4.4,
        minWidth: '458px',
        width: '100%',
      }}
    >
      <Stack spacing={2} mt={4}>
        <Stack spacing={2}>
          <Controller
            name="email"
            control={control}
            defaultValue={defaultValue}
            render={({ field, fieldState: { invalid, error } }) => (
              <TextField
                {...field}
                label={'Email address'}
                placeholder={'yourname@gmail.com'}
                error={invalid}
                helperText={invalid ? error.message : ''}
                required
                color="secondary"
                fullWidth
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue={defaultValue}
            render={({ field, fieldState: { invalid, error } }) => (
              <TextField
                {...field}
                label={'Password'}
                error={invalid}
                helperText={invalid ? error.message : ''}
                type="password"
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
            <Controller
              name="termsCheck"
              control={control}
              defaultValue={false}
              render={({ field, fieldState: { invalid, error } }) => (
                <>
                  <FormControlLabel
                    control={
                      <Checkbox
                        id="termsCheck"
                        {...field}
                        sx={{
                          borderColor: 'rgba(0, 0, 0, 0.6)',
                        }}
                      />
                    }
                    id="termsCheck"
                    name="termsCheck"
                    label={
                      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Typography ml={1.5}>I agree with</Typography>
                        <Link
                          sx={{
                            textDecoration: 'none',
                            color: 'custom.greyDark',
                            marginLeft: '4px',
                          }}
                          to="/"
                        >
                          Terms of service
                        </Link>
                      </Box>
                    }
                  />
                  {error && (
                    <FormHelperText error>{error.message}</FormHelperText>
                  )}
                </>
              )}
            />
          </FormGroup>
        </Box>
      </Stack>
    </Box>
  );
}

export default RegistrationStepFirst;
