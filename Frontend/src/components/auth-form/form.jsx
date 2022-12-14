import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { TextField, Button, Checkbox } from "@mui/material";
import Layout from "../../components/layout/index";
import { CustomInput } from "../../components/input/index";
import { passwordValidator } from "./../../utils/validator";

export const AuthFormJ = () => {
    const { handleSubmit, control, formState: { errors, isValid }, reset } = useForm({
        mode: "onBlur"
    });
    const onSubmit = (data) => {
        console.log(data);
        reset();
    }

    return (
        <Layout>
            <form className="auth-form__form" onSubmit={handleSubmit(onSubmit)}>
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
                <Button
                    type="submit"
                    variant="contained"
                    disabled={!isValid}
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
