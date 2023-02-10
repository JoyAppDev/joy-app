import { TextField } from '@mui/material';
import React from 'react';

export const CustomInput = React.forwardRef(
  (
    {
      label,
      type,
      onChange,
      value,
      error,
      helperText,
      placeholder,
      inputId,
      InputProps,
      field,
    },
    inputRef
  ) => {
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
        InputProps={InputProps}
        inputRef={inputRef}
        field={field}
      />
    );
  }
);

// export function CustomInput({
//   label,
//   type,
//   onChange,
//   value,
//   error,
//   helperText,
//   placeholder,
//   inputId,
//   InputProps,
//   field,
// }) {
//   return (
//     <TextField
//       required={true}
//       label={label}
//       type={type}
//       onChange={onChange}
//       value={value}
//       error={error}
//       helperText={helperText}
//       placeholder={placeholder}
//       id={inputId}
//       color="secondary"
//       fullWidth={true}
//       InputProps={InputProps}
//       field={field}
//     />
//   );
// }
