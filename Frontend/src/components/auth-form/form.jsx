import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { TextField, Button, Checkbox } from "@mui/material";
import Layout from "../../components/layout/index";
import { CustomInput } from "../../components/input/index";
import {loginValidation, passwordValidation} from "./../../utils/validation";

export const AuthFormJ = () => {
    const { handleSubmit, control, formState: { errors }, reset } = useForm({
        mode: "onBlur"
    });
    const onSubmit = (data) => {
        console.log(data);
        reset();
    }

    return (
        <Layout>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="checkbox"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <Checkbox {...field} />}
                />
                <input type="submit" />
            </form>
            <form className="auth-form__form" onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    control={control}
                    name="login"
                    rules={ loginValidation }
                    render={({
                                 field: { onChange, value },
                             }) => (
                        <TextField
                            label="login"
                            size="small"
                            margin="normal"
                            className="auth-form__input"
                            fullWidth={true}
                            onChange={(e) => onChange(e)}
                            value={value || ''}
                            error={!!errors.login?.message}
                            helperText={errors.login?.message}
                        />

                    )}
                />
                <Controller
                    control={control}
                    name="password"
                    rules={ passwordValidation }
                    render={({
                                 field: { onChange, value },
                             }) => (
                        <TextField
                            label="password"
                            type="password"
                            size="small"
                            margin="normal"
                            className="auth-form__input"
                            fullWidth={true}
                            onChange={(e) => onChange(e)}
                            value={value || ''}
                            error={!!errors.password?.message}
                            helperText={errors.password?.message}
                        />

                    )}
                />
                <Button
                    type="submit"
                    variant="contained"
                    fullWidth={true}
                    disableElevation={true}
                    sx={{
                        marginTop: 2
                    }}
                >
                    Log in
                </Button>
            </form>
        </Layout>
    )
}
