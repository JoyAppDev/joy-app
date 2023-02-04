import React from 'react';

import Box from '@mui/material/Box';
import HeaderDashboard from '../header-dashboard';
import './index.css';

function LayoutDashboard({ children }) {
  return (
    <>
      <HeaderDashboard />
      <div className="layout__background">
        <Box
          display="grid"
          gridTemplateColumns="repeat(4, 1fr)"
          gap={5}
          sx={{ pt: 9 }}
        >
          {children}
        </Box>
      </div>
    </>
  );
}

export default LayoutDashboard;
