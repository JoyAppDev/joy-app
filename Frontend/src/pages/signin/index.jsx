import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Link as RouterLink } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Stack } from '@mui/material';

import { CustomButton } from '../../components/button';
import Layout from '../../components/layout';
import AuthenticationInputs from "../../components/authentication-form";
import ControlledCheckbox from "../../components/checkbox";

function SignIn() {
    const { handleSubmit, control, formState: { errors, isValid }, reset } = useForm({
        mode: "onBlur"
    });

    const onSubmit = (data) => {
        console.log(data);
        reset();
    }

    return (
        <Layout>
            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                sx={{
                    mt: 4.4,
                    minWidth: '458px',
                    width: '100%',
                }}
            >

                <AuthenticationInputs
                    control={control}
                    errors={errors}
                />

                <ControlledCheckbox />

                <Stack spacing={2} mt={4}>
                    <CustomButton
                        type="submit"
                        disabled={!isValid}>
                        SIGN IN
                    </CustomButton>


                </Stack>
            </Box>
        </Layout>
    );
}

export default SignIn;
