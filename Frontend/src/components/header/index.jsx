import * as React from 'react';
import { Stack, Typography } from "@mui/material";

import logo from '../../assets/joy-logo.svg';

export function Header() {
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
            >Enjoy our family</Typography>
        </Stack>
    )
}