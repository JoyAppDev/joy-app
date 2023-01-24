import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Link as RouterLink } from 'react-router-dom';

import Box from '@mui/material/Box';
import Checkbox from "@mui/material/Checkbox";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Stack } from '@mui/material';

import {CustomInput} from "../input";
import {passwordValidator} from "../../utils/validator";

function RegistrationStepFirst({ email, password, updateFields, setIsValidForm }) {

    const { handleSubmit, control, formState: { errors, isValid }, reset } = useForm({
        mode: "onBlur"
    }, {
        defaultValues: {
            email: '',
            password: '',
            termsOfService: false,
        }
    });

    const onSubmit = (fields) => {
        updateFields(fields);
        setIsValidForm(isValid);
        alert(JSON.stringify(fields));
        reset();
    }
    const submitRegister = (e) => {
        if (e.target.value) {
            setIsValidForm(true);
            console.log(isValid);
        }

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

                <Stack spacing={2}>
                    <Controller
                        control={control}
                        name="e-mail"
                        rules={{ required: true }}
                        render={() => (
                            <CustomInput
                                label={'Email address'}
                                type={'text'}
                                onChange={(e) => updateFields({email: e.target.value})}
                                value={email || ''}
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
                        render={() => (
                            <CustomInput
                                label={"Password"}
                                type={"password"}
                                onChange={(e) => updateFields({password: e.target.value})}
                                value={password || ''}
                                error={!!errors.password?.message}
                                helperText={errors.password?.message}
                                placeholder={''}
                            />

                        )}
                    />
                </Stack>



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
                                onChange={submitRegister}
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


            </Stack>
        </Box>
    );
}

export default RegistrationStepFirst;
