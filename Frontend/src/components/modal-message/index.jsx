import * as React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';

import { theme } from '../../styles/theme';

function ModalMessage({ children, style, openMessage, handleCloseMessage }) {

    return (
        <div>
            <Modal
                open={openMessage}
                onClose={handleCloseMessage}
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
                            <IconButton onClick={handleCloseMessage}>
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

export default ModalMessage;
