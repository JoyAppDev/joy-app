import React from 'react';

import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

function ButtonCreateLicenseCard({ addLicence }) {
  return (
    <CardActions
      sx={{
        pt: 0,
        pl: 2,
        pr: 2,
        pb: 2,
      }}
    >
      <Button
        component="label"
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
        Create licence
        <input
          hidden
          //accept="video/*"
          multiple
          type="file"
          onChange={addLicence}
        />
      </Button>
    </CardActions>
  );
}

export default ButtonCreateLicenseCard;
