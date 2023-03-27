import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { theme } from '../../styles/theme';

export default function HeaderTabs() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <Tabs
        onChange={handleChange}
        value={value}
        textColor="inherit"
        aria-label="Tabs where selection follows focus"
        selectionFollowsFocus
        TabIndicatorProps={{
          title: 'indicator',
          sx: { backgroundColor: theme.palette.custom.blueLight },
        }}
        sx={{
          '& .MuiButtonBase-root.MuiTab-root': {
            color: theme.palette.custom.blueLight,
            height: '75px',
          },
          '& .MuiTabs-indicator': {
            backgroundColor: theme.palette.custom.blueLight,
          },
        }}
      >
        <Tab label="Create your license" />
      </Tabs>
    </Box>
  );
}
