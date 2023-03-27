import React from 'react';
import { Container, Divider } from '@mui/material';

import Box from '@mui/material/Box';
import HeaderDashboard from '../header-dashboard';
import './index.css';

function LayoutDashboard({ children }) {
  return (
    <>
      <HeaderDashboard />
      <div className="layout__background">
        <Container maxWidth="lg" disableGutters>
          <Box
            display="grid"
            gridTemplateColumns="repeat(4, 1fr)"
            gap={5}
            sx={{ pt: 9, position: 'relative' }}
            width="100%"
          >
            {children}
          </Box>
        </Container>
      </div>
    </>
  );
}

export default LayoutDashboard;
