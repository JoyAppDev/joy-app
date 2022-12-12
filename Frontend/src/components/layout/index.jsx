import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Header } from '../header';
import Star from './../../assets/star.svg';
import Girl from './../../assets/girl.svg';

function Layout({ children }) {
  return (
    <Grid container component="main">
      <Grid
        item
        xs={false}
        sm={4}
        md={6}
        sx={{
          backgroundImage: `url(${Star})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
        }}
      />
      <Grid
        item
        xs={false}
        sm={4}
        md={6}
        sx={{
          backgroundImage: `url(${Girl})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          width: '548px',
          position: 'absolute',
          top: '22%',
          bottom: 0,
          left: -18,
          zIndex: 'modal',
          height: '100vh',
        }}
      ></Grid>
      <Grid item xs={12} sm={8} md={5}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            mt: 27,
            ml: 11,
          }}
        >
          <Header />
          {children}
        </Box>
      </Grid>
    </Grid>
  );
}

export default Layout;
