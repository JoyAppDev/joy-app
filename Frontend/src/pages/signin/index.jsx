import React from 'react';
import Layout from "../../components/layout";
import HorizontalStepper from './../../components/stepper';
import {Stack} from "@mui/material";

function SignIn() {
    return (
        <Layout>
            <Stack>
                <HorizontalStepper />
            </Stack>
        </Layout>
    )
}

export default SignIn;
