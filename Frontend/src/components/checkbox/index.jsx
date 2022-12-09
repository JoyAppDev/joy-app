import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FormControl } from '@mui/material';

export default function ControlledCheckbox() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = event => {
    setChecked(event.target.checked);
  };

  return (
    <form>
      <FormControl>
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                borderColor: 'rgba(0, 0, 0, 0.6)',
              }}
              checked={checked}
              onChange={handleChange}
              required
            />
          }
          label={
            <div>
              <span>I agree with </span>
              <Link component={RouterLink} to="/">
                Terms of service
              </Link>
            </div>
          }
          sx={{
            mr: 3,
            '.MuiFormControlLabel-label': {
              color: 'rgba(0, 0, 0, 0.87)',
              letterSpacing: '0.15px',
              lineHeight: '150%',
            },
            '.MuiFormControlLabel-root': {
              margin: 0,
            },
            '.MuiSvgIcon-root': {
              width: '18px',
              height: '18px',
              padding: 0,
            },
          }}
        />
      </FormControl>
    </form>
  );
}
