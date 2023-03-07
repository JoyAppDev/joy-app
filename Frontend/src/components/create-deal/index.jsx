import React from 'react';

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
import { upload } from '../../utils/upload';
import { WAYS_TO_USE } from "../../utils/constants";

function CreateDeal({ setOpenForm, setOpenMessage, files, setOpenErrorMessage }) {
  const [isLoading, setIsLoading] = React.useState(false);
  const {
    handleSubmit,
    control,
    formState: { isValid },
    reset,
  } = useForm(
    {
      mode: 'onBlur',
    },
    {
      defaultValues: {
        deal: '',
        license: '',
        validityDate: '',
        territory: '',
        waysToUse: '',
        addInfo: '',
        price: '',
      },
    }
  );

  // Объект FormData позволяет скомпилировать набор пар ключ/значение для отправки с помощью XMLHttpRequest.

  const createFormData = (files, newDeal) => {
    const formData = new FormData();

    formData.append('new_deal', newDeal.deal);
    formData.append('license_type', newDeal.license);
    formData.append('validity', newDeal.validityDate);
    formData.append('territory', newDeal.territory);
    formData.append('ways_to_use', newDeal.waysToUse);
    formData.append('price', newDeal.price);
    formData.append('additional_info', newDeal.addInfo);
    for (let file of files) { formData.append('content', file); }
    console.log(formData);
    return formData;
  }

  async function createLicence(files, newDeal) {
    const token = localStorage.getItem('userToken');
    const newFormData = createFormData(files, newDeal);
    try {
      setIsLoading(true);
      const res = await upload(token, newFormData);
      const data = await res.json();
      console.log(JSON.stringify(data));
      setOpenMessage(true);
      // с сервера возвращается превью загруженного видео для отображения в форме создания лицензии
      //    setUploadedFilePreview(data.image);
    } catch (error) {
      setOpenErrorMessage(true);
      console.log(error);
    }
    finally {
      setIsLoading(false);
    }
  }

  const onSubmit = fields => {
    console.log(files)
    createLicence(files, fields);
    reset();
    setOpenForm(false);
  };

  return (
    <>
      <Stack spacing={2}>
        <Typography component="h1" variant="h5" mb={2}>
          Creating a new deal
        </Typography>

        <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
          <Stack sx={{ my: 2 }}>
            <Controller
                control={control}
                defaultValue={'New Deal_1'}
                name="deal"
                fullWidth
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                    <CustomInput
                        label={'New Deal'}
                        type={'text'}
                        onChange={onChange}
                        value={value || ''}
                        placeholder={'Your text'}
                    />
                )}
            />
          </Stack>

          <Controller
              control={control}
              defaultValue={'exclusive'}
              name="license"
              fullWidth
              render={({ field: { onChange } }) => (
                  <CustomInput
                      label={'License Type'}
                      type={'text'}
                      onChange={onChange}
                      value={'Exclusive License'}
                      readOnly
                  />
              )}
          />

          <Stack sx={{ my: 2 }}>
            <Controller
                control={control}
                defaultValue={'Without time limit (perpetual)'}
                name="validityDate"
                fullWidth
                render={({ field: { onChange } }) => (
                    <CustomInput
                        label={'Validity'}
                        type={'text'}
                        onChange={onChange}
                        value={'Without time limit (perpetual)'}
                        readOnly
                    />
                )}
            />
          </Stack>

          <Controller
            control={control}
            defaultValue={'Worldwide'}
            name="territory"
            fullWidth
            render={({ field: { onChange } }) => (
              <CustomInput
                label={'Territory'}
                type={'text'}
                onChange={onChange}
                value={'Worldwide'}
                placeholder={'USA'}
                readOnly
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
                  sx={{
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden'
                  }}
                >
                  {WAYS_TO_USE.map((item) => (
                      <MenuItem value={item} label={item} key={item}>
                        {item}
                      </MenuItem>
                  ))}
                </Select>
              )}
            />
          </FormControl>

          <Controller
            control={control}
            name="addInfo"
            fullWidth
            render={({ field: { onChange, value } }) => (
              <CustomInput
                label={'Additional info'}
                type={'text'}
                onChange={onChange}
                value={value || ''}
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
              {isLoading?
                'LOADING...'
                :
                'CREATE A NEW DEAL'
              }
            </CustomButton>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}
export default CreateDeal;
