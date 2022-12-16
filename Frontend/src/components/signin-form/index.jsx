import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Link as RouterLink } from 'react-router-dom';

import Box from '@mui/material/Box';
import Checkbox from "@mui/material/Checkbox";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Stack } from '@mui/material';

import { CustomButton } from '../button';
import Layout from '../layout';
import AuthenticationInputs from "../authentication-form";

function SignInForm() {
    //const [account, setAccount] = React.useState({});
    //const [isChecked, setIsChecked] = React.useState(false);

    const { handleSubmit, control, formState: { errors, isValid }, reset } = useForm({
        mode: "onBlur"
    }, {
        defaultValues: {
            termsOfService: false,
        }
    });

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        //setAccount(data);
        //setIsChecked(event.target.checked);
        reset();
    }

    return (
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

            <Stack spacing={2} mt={4}>

                <AuthenticationInputs
                    control={control}
                    errors={errors}
                />

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'start',
                        paddingLeft: '12px'
                    }}
                >
                    <Controller
                        name="termsOfService"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                            <Checkbox
                                sx={{
                                    borderColor: 'rgba(0, 0, 0, 0.6)',
                                }}
                                {...field}
                            />
                        )}
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
                </Box>

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
    );
}

export default SignInForm;
