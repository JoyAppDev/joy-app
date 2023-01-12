import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Grid } from '@mui/material';
import { theme } from '../../styles/theme';
import LayoutModal from '../modal-form';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import ModalForm from '../modal-form';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '83%',
  bgcolor: 'rgba(255, 255, 255, 1)',
  boxShadow: 10,
  pl: 7.5,
  pr: 7.5,
  pb: 9,
  pt: 3.5,
  height: '90%',
};

function ModalDashboard() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Dialog
        open={open}
        onClose={handleClose}
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
          <IconButton onClick={handleClose}>
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
          <ModalForm />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ModalDashboard;
