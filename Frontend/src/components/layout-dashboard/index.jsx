import React from "react";

import Box from '@mui/material/Box';

import starDashboard from './../../assets/star_dashboard_x1.png';
import HeaderDashboard from '../header-dashboard';


function LayoutDashboard({ children }) {
    return (
        <>
            <HeaderDashboard />
            <Box sx={{
                width: '100%',
                height: 'calc(100vh - 75px)',
                backgroundImage: `url(${starDashboard})`,
                backgroundPosition: 'bottom right',
                backgroundRepeat: 'no-repeat',
                pl: 15,
                pr: 15,
                boxSizing: 'border-box',
                m: 0,
            }}>
                <Box
                    display="grid"
                    gridTemplateColumns="repeat(4, 1fr)"
                    gap={5}
                    sx={{ pt: 9 }}
                >
                    {children}
                </Box>
            </Box>
        </>
    )
}

export default LayoutDashboard;