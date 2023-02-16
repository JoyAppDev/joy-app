import React from 'react';
import ModalMessage from "../modal-message";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

function PopupError({ openErrorMessage, handleCloseMessage }) {
    const styleSuccessModal = {
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
        pb: 8,
        pt: 2,
    };

    return (
        <ModalMessage
            style={styleSuccessModal}
            openMessage={openErrorMessage}
            handleCloseMessage={handleCloseMessage}
        >
            <Stack
                spacing={2}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    m: '0 auto',
                }}
            >
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    mt: 11.75,
                    ml: 2,
                    mr: 2,
                    mb: 5,
                    alignItems: 'center'
                }}>
                    <Typography sx={{fontWeight: '500', fontSize: '24px', color: 'red'}}>
                        Error:
                    </Typography>
                    <Typography sx={{textAlign: 'center', fontSize: '24px', color: 'red'}}>
                        wrong data type
                    </Typography>
                </Box>
            </Stack>
        </ModalMessage>
    )
}

export default PopupError;
