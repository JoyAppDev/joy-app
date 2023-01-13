import * as React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

import { theme } from '../../styles/theme';

function ModalDashboard({ openForm, handleCloseForm, children }) {

  return (
    <div>
      <Dialog
        open={openForm}
        onClose={handleCloseForm}
        fullWidth
        maxWidth="lg"
        // PaperProps={{ sx: { width: '90%', height: '70%' } }}
        slotProps={{ backdrop: { invisible: true } }}
      >
        <Box
          sx={{
            position: 'absolute',
            right: '5%',
            top: '2%',
          }}
        >
          <IconButton onClick={handleCloseForm}>
            <CloseIcon
              sx={{
                width: 11,
                height: 11,
                fill: theme.palette.custom.blueLight,
              }}
            />
            <Typography
              variant="button"
              sx={{
                color: theme.palette.custom.blueLight,
                fontSize: '0.8rem',
                pl: 1.5,
              }}
            >
              CLOSE
            </Typography>
          </IconButton>
        </Box>

        <DialogContent sx={{ mx: 7.5, my: 9, padding: 0 }}>

            {children}

        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ModalDashboard;
