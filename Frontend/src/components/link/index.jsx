import React from 'react';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';

const CustomLink = (props) => {
  return (
    <Link
      sx={{
        textDecorationColor: 'rgba(55, 103, 226, 1)',
        color: 'rgba(55, 103, 226, 1)',
        marginLeft: '4px',
        cursor: 'pointer',
      }}
      component={RouterLink}
      to={props.to}
    >
      {props.children}
    </Link>
  );
};

export default CustomLink;
