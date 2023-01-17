import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import placeholderImage from './../../assets/placeholderImage.png';
import { theme } from '../../styles/theme';

export default function LicenceCard({
  image,
  author = 'John Doe',
  date = 'Now',
  heading = 'Create new license?',
  button = 'Create license',
  onOpen,
  children,
  component,
  onCopyLicense,
  card,
}) {
  function handleClick() {
    onCopyLicense(card);
    onOpen(false);
  }
  return (
    <Card sx={{ maxWidth: 260 }} variant="outlined">
      <CardActions sx={{ p: 0 }}>
        <CardMedia
          component="img"
          alt="licence preview"
          height="200"
          image={image || placeholderImage}
        />
      </CardActions>
      <CardContent>
        <Typography
          gutterBottom
          variant="subtitle2"
          component="div"
          sx={{
            fontSize: 14,
            fontWeight: 500,
            color: '#9D9D9D',
          }}
        >
          {author} • {date}
        </Typography>
        <Typography variant="h6" color={theme.palette.custom.greyDark}>
          {heading}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          pt: 0,
          pl: 2,
          pr: 2,
          pb: 2,
        }}
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
          component={component}
          onClick={handleClick}
        >
          {button}

          {children}
        </Button>
      </CardActions>
    </Card>
  );
}
