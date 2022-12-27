import React from "react";

import Box from '@mui/material/Box';

import starDashboard from './../../assets/star_dashboard_x1.png';
import RecipeReviewCard from './card';


function LayoutDashboard() {
    return (
        <>
            <Box sx={{
                width: '100%',
                height: '100vh',
                backgroundImage: `url(${starDashboard})`,
                backgroundPosition: 'bottom right',
                backgroundRepeat: 'no-repeat',
                pl: 15,
                pr: 15,
                boxSizing: 'border-box',
            }}>
                <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={5}>
                    <RecipeReviewCard sx={{}} />
                    <RecipeReviewCard />
                    <RecipeReviewCard />
                    <RecipeReviewCard />
                    <RecipeReviewCard />
                    <RecipeReviewCard />

                </Box>
            </Box>
        </>
    )
}

export default LayoutDashboard;