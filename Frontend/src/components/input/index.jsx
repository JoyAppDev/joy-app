import { TextField } from "@mui/material";
import React from "react";

export function CustomInput({ inputId, isRequired, label, placeholder, type }) {
    return (
        <TextField
            required={isRequired}
            id={inputId}
            label={label}
            placeholder={placeholder}
            type={type}
            color="secondary"
        />

    )
}

