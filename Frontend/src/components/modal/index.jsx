import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import Grid from '@mui/material/Grid';

import { theme } from '../../styles/theme';

function Modal({ openForm, handleCloseForm, children }) {
  return (
    <div>
      <Dialog
        open={openForm}
        onClose={handleCloseForm}
        fullWidth
        maxWidth="lg"
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
          <>
            <Grid container component="main" spacing={12.5}>
              <Grid
                item
                xs={false}
                sm={4}
                md={6}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(232, 232, 232, 1)',
                }}
              >
                <InsertPhotoOutlinedIcon
                  sx={{
                    height: '48px',
                    width: '48px',
                    color: 'grey',
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={8} md={6} square="true">
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                  }}
                >
                  {children}
                </Box>
              </Grid>
            </Grid>
          </>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Modal;
