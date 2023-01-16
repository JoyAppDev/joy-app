import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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

import { CustomInput } from '../input/index';
import { useNavigate } from 'react-router-dom';

import { CustomButton } from '../button';

function CopyLink({ setOpenForm }) {
  let navigate = useNavigate();

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
        deal: '',
        license: '',
        validity: '',
        territory: '',
        waysToUse: '',
        addInfo: '',
        price: '',
      },
    }
  );

  const onSubmit = fields => {
    alert(JSON.stringify(fields));
    navigate('/dashboard');
    reset();
    setOpenForm(false);
  };

  return (
    <Stack spacing={2}>
      <Typography component="h1" variant="h5" mb={2}>
        Copying a link
      </Typography>

      <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="social"
          fullWidth
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <CustomInput
              label={'Social Media'}
              type={'text'}
              onChange={onChange}
              value={value || ''}
              error={!!errors.social?.message}
              helperText={errors.social?.message}
              placeholder={'TikTok |'}
            />
          )}
        />
        <FormControl fullWidth sx={{ my: 2 }}>
          <InputLabel htmlFor="license-type">License type</InputLabel>
          <Controller
            name="license"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <Select
                value={value || ''}
                onChange={onChange}
                label="License Type"
                id="license-type"
              >
                <MenuItem value={1} label="Exclusive license">
                  Exclusive license
                </MenuItem>
                <MenuItem value={2} label="Non-exclusive license">
                  Non-exclusive license
                </MenuItem>
              </Select>
            )}
          />
        </FormControl>
        <Stack sx={{ mb: 2 }}>
          <Controller
            name="validityDate"
            defaultValue={new Date()}
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value, ...restField } }) => (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  label="Validity"
                  value={value || ''}
                  onChange={onChange}
                  renderInput={params => <TextField {...params} fullWidth />}
                  {...restField}
                />
              </LocalizationProvider>
            )}
          />
        </Stack>

        <Controller
          control={control}
          name="territory"
          fullWidth
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <CustomInput
              label={'Territory'}
              type={'text'}
              onChange={onChange}
              value={value || ''}
              error={!!errors.territory?.message}
              helperText={errors.territory?.message}
              placeholder={'USA'}
            />
          )}
        />

        <FormControl fullWidth sx={{ my: 2 }}>
          <InputLabel id="ways-to-use-label">Ways to use</InputLabel>
          <Controller
            name="waysToUse"
            control={control}
            rules={{ required: false }}
            render={({ field: { onChange, value } }) => (
              <Select
                labelId="ways-to-use-label"
                value={value || ''}
                onChange={onChange}
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
          name="addInfo"
          fullWidth
          rules={{ required: false }}
          render={({ field: { onChange, value } }) => (
            <CustomInput
              label={'Additional info'}
              type={'text'}
              onChange={onChange}
              value={value || ''}
              error={!!errors.addInfo?.message}
              helperText={errors.addInfo?.message}
              placeholder={'Text'}
            />
          )}
        />
        <Stack spacing={2} mt={2} sx={{ alignItems: 'center' }}>
          <Controller
            control={control}
            name="price"
            fullWidth
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <CustomInput
                label={'Price'}
                type={'number'}
                onChange={onChange}
                value={value || ''}
                error={!!errors.price?.message}
                helperText={errors.price?.message}
                placeholder={'$2000'}
              />
            )}
          />

          <CustomButton
            type="submit"
            fullWidth
            variant="contained"
            disabled={!isValid}
            sx={{ mt: 3, mb: 2, fontSize: '15px', fontWeight: '500' }}
          >
            COPY LINK
          </CustomButton>
        </Stack>
      </Box>
    </Stack>
  );
}

export default CopyLink;
