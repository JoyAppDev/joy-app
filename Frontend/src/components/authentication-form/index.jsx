import React from 'react';
import { Controller } from 'react-hook-form';

import { Stack } from '@mui/material';

import { CustomInput } from './../input/index';
import { passwordValidator } from "./../../utils/validator";

function AuthenticationInputs({ control, errors }) {

    return (
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
    )
}

export default AuthenticationInputs;