import { TextField } from "@mui/material";
import React from "react";

export function CustomInput({ inputId, isRequired, label, defaultValue, type }) {
    return (
        <TextField
            required={isRequired}
            id={inputId}
            label={label}
            defaultValue={defaultValue}
            type={type}
        />
    )
}
