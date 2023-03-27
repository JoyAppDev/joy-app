import React from 'react';

import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

function ButtonCopyLicenseCard({ card, onCopyLicense, onOpen }) {
  function handleClick() {
    onCopyLicense(card);
    onOpen(true);
  }
  return (
    <CardActions
      sx={{
        pt: 0,
        pl: 2,
        pr: 2,
        pb: 2,
      }}
      onClick={handleClick}
    >
      <Button
        sx={{
          width: 111,
          height: 32,
          borderRadius: '16px',
          pl: 0.5,
          pr: 0.5,
          backgroundColor: '#FF8A00',
          color: '#FFFFFF',
          padding: '4',
          boxSizing: 'border-box',
          textTransform: 'none',
          fontSize: 13,
          fontWeight: 400,
          '&:hover': {
            backgroundColor: '#FF8A00',
          },
        }}
      >
        Open licence
      </Button>
    </CardActions>
  );
}

export default ButtonCopyLicenseCard;
