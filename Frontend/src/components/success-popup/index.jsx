import React from 'react';
import MiniModal from "../small-modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import {CustomButton} from "../button";

function SuccessPopup() {
    const styleMiniModal = {
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

    function handleClick() {
        alert('click')
    }

    return (
        <MiniModal style={styleMiniModal}>
            <Stack
                spacing={2}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
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
                    <Typography sx={{fontWeight: '500', fontSize: '24px'}}>
                        Congrats!
                    </Typography>
                    <Typography sx={{textAlign: 'center', fontSize: '24px'}}>
                        Your deal has been created
                    </Typography>
                    <Typography sx={{textAlign: 'center', fontSize: '24px'}}>
                        Send the link to the brand to make a payment.
                    </Typography>
                </Box>
                <Box sx={{width: '381px'}}>
                    <CustomButton onClick={handleClick}>
                        COPY LINK
                    </CustomButton>
                </Box>
            </Stack>

        </MiniModal>
    )
}

export default SuccessPopup;