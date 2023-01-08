import { TextField } from '@mui/material';
import React from 'react';

export function CustomInput({
  label,
  type,
  onChange,
  value,
  error,
  helperText,
  placeholder,
  inputId,
}) {
  return (
    <TextField
      required={true}
      label={label}
      type={type}
      onChange={onChange}
      value={value}
      error={error}
      helperText={helperText}
      placeholder={placeholder}
      id={inputId}
      color="secondary"
      fullWidth={true}
    />
  );
}
