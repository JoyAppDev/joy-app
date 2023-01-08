import React, { useState } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import { useForm, Controller } from 'react-hook-form';

import { CustomInput } from './../input/index';

const INITIAL_DATA = {
  deal: '',
  license: '',
  validity: '',
  territory: '',
  waysToUse: '',
  addInfo: '',
  price: '',
};

function ModalForm() {
  const [data, setData] = useState(INITIAL_DATA);
  const [validityDate, setValidityDate] = useState(new Date());

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
    reset,
  } = useForm(
    {
      mode: 'onBlur',
    },
    {
      defaultValues: {
        termsOfService: false,
      },
    }
  );

  function updateFields(fields) {
    setData(prev => {
      return { ...prev, ...fields };
    });
  }

  const onSubmit = fields => {
    updateFields(fields);
    // setIsValidForm(isValid);
    alert(JSON.stringify(fields));
    reset();
  };

  const [licenseType, setLicenseType] = React.useState('');
  const [ways, setWays] = React.useState('');
  const [date, setDate] = React.useState(null);

  return (
    <Grid container component="main">
      <Grid
        item
        xs={false}
        sm={4}
        md={6}
        sx={{
          display: 'flex',
          alignIitems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(232, 232, 232, 1)',
        }}
      >
        <InsertPhotoOutlinedIcon
          sx={{
            mt: '50%',
            height: '48px',
            width: '48px',
            color: 'grey',
          }}
        />
      </Grid>
      <Grid item xs={12} sm={8} md={6} square="true">
        <Box
          sx={{
            ml: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Stack spacing={2}>
            <Typography component="h1" variant="h5">
              Creating a new deal
            </Typography>

            <Box component="form" noValidate onSubmit={handleSubmit}>
              <Controller
                control={control}
                name="deal"
                fullWidth
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <CustomInput
                    label={'New Deal'}
                    type={'text'}
                    onChange={e => updateFields({ deal: e.target.value })}
                    value={data.deal || ''}
                    error={!!errors.deal?.message}
                    helperText={errors.deal?.message}
                    placeholder={'Your text'}
                  />
                )}
              />
              <FormControl fullWidth sx={{ my: 2 }}>
                <InputLabel htmlFor="license-type">License type</InputLabel>
                <Controller
                  name="license"
                  control={control}
                  rules={{ required: false }}
                  render={({ field: { value } }) => (
                    <Select
                      value={value || ''}
                      onChange={e => updateFields({ license: e.target.value })}
                      label="License Type"
                      id="license-type"
                    >
                      <MenuItem value={1} label="One">
                        One
                      </MenuItem>
                      <MenuItem value={2} label="Two">
                        Two
                      </MenuItem>
                    </Select>
                  )}
                />
              </FormControl>

              <Controller
                name="validityDate"
                defaultValue={validityDate}
                control={control}
                render={({ field: { onChange, ...restField } }) => (
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                      label="Validity"
                      onChange={event => {
                        setValidityDate(event);
                      }}
                      renderInput={params => (
                        <TextField {...params} fullWidth />
                      )}
                      {...restField}
                    />
                  </LocalizationProvider>
                )}
              />

              <Controller
                control={control}
                name="territory"
                fullWidth
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <CustomInput
                    label={'Territory'}
                    type={'text'}
                    onChange={e => updateFields({ territory: e.target.value })}
                    value={data.territory || ''}
                    error={!!errors.territory?.message}
                    helperText={errors.territory?.message}
                    placeholder={'USA'}
                  />
                )}
              />

              <FormControl fullWidth sx={{ my: 2 }}>
                <InputLabel id="ways-to-use-label">Ways to use</InputLabel>
                <Controller
                  name="ways-to-use"
                  control={control}
                  rules={{ required: false }}
                  render={({ field: { value } }) => (
                    <Select
                      labelId="ways-to-use-label"
                      value={value || ''}
                      onChange={e =>
                        updateFields({ waysToUse: e.target.value })
                      }
                      label="ways-to-use"
                      id="ways-to-use"
                    >
                      <MenuItem value={1} label="One">
                        One
                      </MenuItem>
                      <MenuItem value={2} label="Two">
                        Two
                      </MenuItem>
                    </Select>
                  )}
                />
              </FormControl>

              <Controller
                control={control}
                name="territory"
                fullWidth
                rules={{ required: false }}
                render={({ field: { onChange, value } }) => (
                  <CustomInput
                    label={'Additional info'}
                    type={'text'}
                    onChange={e => updateFields({ addInfo: e.target.value })}
                    value={data.addInfo || ''}
                    error={!!errors.addInfo?.message}
                    helperText={errors.addInfo?.message}
                    placeholder={'Text'}
                  />
                )}
              />

              <Controller
                control={control}
                name="price"
                fullWidth
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <CustomInput
                    label={'Price'}
                    type={'number'}
                    onChange={e => updateFields({ price: e.target.value })}
                    value={data.price || ''}
                    error={!!errors.price?.message}
                    helperText={errors.price?.message}
                    placeholder={'$2000'}
                  />
                )}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
}
export default ModalForm;
