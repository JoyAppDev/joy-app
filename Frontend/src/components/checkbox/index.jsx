import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FormControl } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function ControlledCheckbox({register, required}) {
  const [checked, setChecked] = React.useState(false);

  const handleChange = event => {
    setChecked(event.target.checked);
  };

  return (
    <FormControl>
      <FormControlLabel
        control={
          <Checkbox
            sx={{
              borderColor: 'rgba(0, 0, 0, 0.6)',
            }}
            checked={checked}
            onChange={handleChange}
            register={register}

            required={required}
          />
        }
        label={
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography ml={1.5}>I agree with </Typography>
            <Link
              sx={{
                textDecoration: 'none',
                color: 'custom.greyDark',
                marginLeft: '4px',
              }}
              component={RouterLink}
              to="/"
            >
              Terms of service
            </Link>
          </Box>
        }
        sx={{
          '.MuiSvgIcon-root': {
            width: '18px',
            height: '18px',
            padding: 0,
          },
        }}
      />
    </FormControl>
  );
}
