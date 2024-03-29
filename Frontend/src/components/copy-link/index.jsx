import React from 'react';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import { useForm } from 'react-hook-form';

import { CustomInput } from '../input/index';
import { useNavigate } from 'react-router-dom';

import { CustomButton } from '../button';

function CopyLink({ setOpenForm, content }) {
  let navigate = useNavigate();

  const { handleSubmit, reset } = useForm(
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
      <Typography component='h1' variant='h5' mb={2}>
        Copying a link
      </Typography>

      <Box component='form' noValidate onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <CustomInput
            fullWidth
            label={'Social Media'}
            value={undefined}
            InputProps={{
              readOnly: true,
            }}
          />

          <CustomInput
            fullWidth
            label={'License Type'}
            value={content.instance.license_type}
            InputProps={{
              readOnly: true,
            }}
          />

          <CustomInput
            fullWidth
            label={'Validity'}
            value={content.instance.validity}
            InputProps={{
              readOnly: true,
            }}
          />

          <CustomInput
            fullWidth
            label={'Territory'}
            value={content.instance.territory}
            InputProps={{
              readOnly: true,
            }}
          />

          <CustomInput
            fullWidth
            label={'Ways to use'}
            value={content.instance.ways_to_use}
            InputProps={{
              readOnly: true,
            }}
          />

          <CustomInput
            fullWidth
            label={'Additional info'}
            value={content.instance.additional_info}
            InputProps={{
              readOnly: true,
            }}
          />

          <CustomInput
            fullWidth
            label={'Price'}
            value={content.instance.price}
            InputProps={{
              readOnly: true,
            }}
          />
          <CustomButton
            type='submit'
            fullWidth
            variant='contained'
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
