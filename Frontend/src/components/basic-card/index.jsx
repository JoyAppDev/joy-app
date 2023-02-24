import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import placeholderImage from './../../assets/placeholderImage.png';
import { theme } from '../../styles/theme';

export default function BasicCard({ children, author, date, image, heading }) {
  return (
    <Card sx={{ maxWidth: 260, height: 342 }} variant="outlined">
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
      {children}
    </Card>
  );
}
