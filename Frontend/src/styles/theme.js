import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(0, 0, 0, 0.4)',
      disabled: 'rgba(0, 0, 0, 0.4)',
    },
    secondary: {
      main: 'rgba(0, 0, 0, 0.4)',
      darker: '#FF8A00',
    },
    custom: {
      white: '#ffffff',
      grey: 'rgba(0, 0, 0, 0.6)',
      greyDark: 'rgba(0, 0, 0, 0.87)',
      blue: '#3767e2',
      blueLight: '#1976d2',
      orange: '#FF8A00',
    },
  },

  components: {
    // Name of the component
    MuiInpMuiOutlinedInput: {
      styleOverrides: {
        // Name of the slot
        root: {
          lineHeight: 24,
          letterSpacing: 0.15,
          borderRadius: 4,
          width: '100%',
          minHeight: 56,
          marginTop: 0,
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          [`&.Mui-checked`]: {
            color: 'rgba(55, 103, 226, 1)',
          },
          borderRadius: '21px',
          width: '18px',
          length: '18px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow:
            '12px 6px 20px -2px rgba(154, 154, 154, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
          '&.Mui-disabled': {
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          },
        },
      },
    },
  },
});
