import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import { useForm, Controller } from 'react-hook-form';

import { CustomInput } from '../input/index';
import { useNavigate } from 'react-router-dom';

import { CustomButton } from '../button';

function CopyLink({ setOpenForm, content }) {
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

  const onSubmit = () => {
    alert(JSON.stringify(content.link));
    navigate('/dashboard');
    reset();
    setOpenForm(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Typography component="h1" variant="h5" mb={2}>
        Copying a link
      </Typography>

      <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <CustomInput
            fullWidth
            label={'Social Media'}
            value={content.media}
            InputProps={{
              readOnly: true,
            }}
          />

          <CustomInput
            fullWidth
            label={'License Type'}
            value={content.license}
            InputProps={{
              readOnly: true,
            }}
          />

          <CustomInput
            fullWidth
            label={'Validity'}
            value={content.date}
            InputProps={{
              readOnly: true,
            }}
          />

          <CustomInput
            fullWidth
            label={'Territory'}
            value={content.teritory}
            InputProps={{
              readOnly: true,
            }}
          />

          <CustomInput
            fullWidth
            label={'Ways to use'}
            value={content.use}
            InputProps={{
              readOnly: true,
            }}
          />

          <CustomInput
            fullWidth
            label={'Additional info'}
            value={content.additional}
            InputProps={{
              readOnly: true,
            }}
          />

          <CustomInput
            fullWidth
            label={'Price'}
            value={content.price}
            InputProps={{
              readOnly: true,
            }}
          />
          <CustomButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              fontSize: '15px',
              fontWeight: '500',
              width: '100%',
            }}
          >
            COPY LINK
          </CustomButton>
        </Stack>
      </Box>
    </Stack>
  );
}

export default CopyLink;
