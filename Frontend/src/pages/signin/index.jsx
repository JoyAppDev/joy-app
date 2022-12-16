import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Link as RouterLink } from 'react-router-dom';

import Box from '@mui/material/Box';
import Checkbox from "@mui/material/Checkbox";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Stack } from '@mui/material';

import { CustomButton } from '../../components/button';
import Layout from '../../components/layout';
import AuthenticationInputs from "../../components/authentication-form";

function SignIn() {
    //const [account, setAccount] = React.useState({});
    //const [isChecked, setIsChecked] = React.useState(false);

    const { handleSubmit, control, formState: { errors, isValid }, reset } = useForm({
        mode: "onBlur"
    }, {
        defaultValues: {
            checkbox: false,
        }
    });

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        //setAccount(data);
        //setIsChecked(event.target.checked);
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

                <Controller
                    name="termsOfService"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <Checkbox {...field}/>}
                />


                    <Typography ml={1.5}>I agree with </Typography>
                    <Link
                        sx={{
                            textDecoration: 'none',
                            color: 'custom.greyDark',
                            marginLeft: '4px',
                        }}
                        component={RouterLink}
                        to="/"
                    >
                        Terms of service
                    </Link>

                <Stack spacing={2} mt={4}>
                    <CustomButton
                        type="submit"
                        disabled={!isValid}>
                        SIGN IN
                    </CustomButton>

                    <Typography>
                        If you already have an account, you can
                        <Link
                            sx={{
                                textDecorationColor: 'rgba(55, 103, 226, 1)',
                                color: 'rgba(55, 103, 226, 1)',
                                marginLeft: '4px',
                            }}
                            component={RouterLink}
                            to="/signup"
                        >
                            LOG IN.
                        </Link>
                    </Typography>
                </Stack>
            </Box>
        </Layout>
    );
}

export default SignIn;
