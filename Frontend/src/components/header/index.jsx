import * as React from 'react';
import { Stack, Typography } from "@mui/material";

import logo from '../../assets/joy-logo.svg';
import {useLocation} from "react-router-dom";

export function Header() {
    let location = useLocation();

    return (
        <Stack spacing={3}>
            <img
                src={logo}
                alt="{item.title}"
                loading="lazy"
                style={{width: 180}}
            />
            <Typography
                variant="h2"
                sx={{
                    fontSize: 24,
                    fontWeight: 400,
                    lineHeight: 1.33,
                    color: "theme.palette.custom.greyDark",
                }}
            >
                {location.pathname === '/' && 'Enjoy our family'}
                {location.pathname === '/register' && 'Join to JOY'}
            </Typography>

        </Stack>
    )
}
