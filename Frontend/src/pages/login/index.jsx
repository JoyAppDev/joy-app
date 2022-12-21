import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Link as RouterLink } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Stack } from '@mui/material';

import { CustomButton } from '../../components/button';
import { CustomInput } from '../../components/input';
import Layout from '../../components/layout';
import { passwordValidator } from "./../../utils/validator";

function Login() {
    const { handleSubmit, control, formState: { errors, isValid }, reset } = useForm({
        mode: "onBlur"
    });

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
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
                    maxWidth: '458px',
                    width: '100%',
                }}
            >
                <Stack spacing={2}>
                    <Controller
                        control={control}
                        name="e-mail"
                        rules={{ required: true }}
                        render={({
                                     field: { onChange, value },
                                 }) => (
                            <CustomInput
                                label={'Email address'}
                                type={'text'}
                                onChange={(e) => onChange(e)}
                                value={value || ''}
                                error={!!errors.email?.message}
                                helperText={errors.email?.message}
                                placeholder={'yourname@gmail.com'}
                            />

                        )}
                    />
                    <Controller
                        control={control}
                        name="password"
                        rules={ passwordValidator }
                        render={({
                                     field: { onChange, value },
                                 }) => (
                            <CustomInput
                                label={"Password"}
                                type={"password"}
                                onChange={(e) => onChange(e)}
                                value={value || ''}
                                error={!!errors.password?.message}
                                helperText={errors.password?.message}
                                placeholder={''}
                            />

                        )}
                    />
                </Stack>

                <Stack spacing={2} mt={4}>
                    <CustomButton
                        type="submit"
                        disabled={!isValid}>
                        LOG IN
                    </CustomButton>

                    <Typography>
                        If you have no account, you can
                        <Link
                            sx={{
                                textDecorationColor: 'rgba(55, 103, 226, 1)',
                                color: 'rgba(55, 103, 226, 1)',
                                marginLeft: '4px',
                            }}
                            component={RouterLink}
                            to="/signup"
                        >
                            SIGN UP.
                        </Link>
                    </Typography>
                </Stack>
            </Box>
        </Layout>
    );
}

export default Login;