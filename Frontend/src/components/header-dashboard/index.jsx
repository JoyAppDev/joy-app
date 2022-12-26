import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import logo from "../../assets/joy-logo.svg";
import HeaderTabs from "../header-tabs";
import AccountMenu from "../account-menu";

function HeaderDashboard() {
    return (
        <Box sx={{
            height: '75',
            width: '100%',
            pl: 15,
            pr: 15,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12)'
        }}>
            <Stack direction="row" spacing={5}>
                <img
                    src={logo}
                    alt="{item.title}"
                    loading="lazy"
                    style={{width: 180}}
                />
                <HeaderTabs sx={{ alignSelf: 'end' }} />
            </Stack>
            <AccountMenu />
        </Box>
    )
}

export default HeaderDashboard;