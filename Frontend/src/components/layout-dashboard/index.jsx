import React from "react";

import Box from '@mui/material/Box';

import starDashboard from './../../assets/star_dashboard_x1.png';
import HeaderDashboard from '../header-dashboard';


function LayoutDashboard() {
    return (
        <>
            <HeaderDashboard />
            <Box sx={{
                width: '100%',
                height: '100vh',
                mt: 9,
                backgroundImage: `url(${starDashboard})`,
                backgroundPosition: 'bottom right',
                backgroundRepeat: 'no-repeat',
                pl: 15,
                pr: 15,
                boxSizing: 'border-box',
            }}>
                <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={5}>
                    {/* здесь будут карточки */}
                </Box>
            </Box>
        </>
    )
}

export default LayoutDashboard;