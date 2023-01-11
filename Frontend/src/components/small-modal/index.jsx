import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Grid } from '@mui/material';
import { theme } from '../../styles/theme';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '639px',
    minHeight: '336px',
    bgcolor: 'rgba(255, 255, 255, 1)',
    boxShadow: 10,
    pl: 6.5,
    pr: 6.5,
    pb: 3,
    pt: 2,
};

function MiniModal({ children }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                slotProps={{ backdrop: { invisible: true } }}
            >
                <Box sx={style}>
                    <Grid
                        container
                        display="flex"
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                        position="relative"
                    >
                        <Box
                            sx={{
                                position: 'absolute',
                                right: 0,
                                top: 0,
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

                        {children}
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
}

export default MiniModal;
