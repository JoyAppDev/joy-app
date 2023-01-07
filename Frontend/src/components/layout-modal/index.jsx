import * as React from 'react';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import Icon from '@mui/material/Icon';

const theme = createTheme();

export default function LayoutModal() {
  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data);

    console.log({
      deal: data.get('deal'),
      license: data.get(licenseType),
      validity: data.get(date),
      territory: data.get('territory'),
      waysToUse: data.get(ways),
      addInfo: data.get('additional'),
      price: data.get('price'),
    });
  };

  const [licenseType, setLicenseType] = React.useState('');
  const [ways, setWays] = React.useState('');
  const [date, setDate] = React.useState(null);

  const handleChange = event => {
    setLicenseType(event.target.value);
  };

  const handleWaysChange = event => {
    setWays(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            // backgroundImage: 'url(https://source.unsplash.com/random)',
            // backgroundImage: `url(${PhotoOutlinedIcon})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></Grid>
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
          <Box
            sx={{
              ml: 6,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Stack spacing={2}>
              <Typography component="h1" variant="h5">
                Creating a new deal
              </Typography>
              <Box
                component="form"
                id="formElem"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="deal"
                  label="New deal"
                  name="deal"
                  autoComplete="deal"
                  autoFocus
                />
                <FormControl fullWidth>
                  <InputLabel id="license-type-label">
                    --- Choose type ---
                  </InputLabel>
                  <Select
                    labelId="license-type-label"
                    id="license"
                    value={licenseType}
                    label="License Type"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>One</MenuItem>
                    <MenuItem value={2}>Two</MenuItem>
                  </Select>
                </FormControl>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Validity"
                    value={date}
                    onChange={newValue => {
                      setDate(newValue);
                    }}
                    renderInput={params => <TextField {...params} fullWidth />}
                  />
                </LocalizationProvider>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="territory"
                  label="Territory"
                  name="territory"
                  autoComplete="territory"
                  autoFocus
                />
                <FormControl fullWidth>
                  <InputLabel id="ways-to-use-label">
                    --- Choose type ---
                  </InputLabel>
                  <Select
                    labelId="ways-to-use-label"
                    id="ways-to-use"
                    value={ways}
                    label="ways-to-use"
                    onChange={handleWaysChange}
                  >
                    <MenuItem value={1}>One</MenuItem>
                    <MenuItem value={2}>Two</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  margin="normal"
                  fullWidth
                  id="additional"
                  label="Additional info"
                  name="additional"
                  autoComplete="additional"
                  autoFocus
                />

                {/* <TextField
                margin="normal"
                fullWidth
                type="number"
                id="price"
                label="Price"
                name="price"
                autoComplete="price"
                autoFocus
              /> */}
                <TextField
                  type="text"
                  margin="normal"
                  fullWidth
                  id="price"
                  label="Price"
                  name="price"
                  autoComplete="price"
                  autoFocus
                  inputProps={{
                    inputMode: 'numeric',
                    pattern: '/^-?d+(?:.d+)?$/g',
                  }}
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
    </ThemeProvider>
  );
}
