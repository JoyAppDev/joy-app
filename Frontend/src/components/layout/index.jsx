import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Header } from '../header';
import Star from './../../assets/star.svg';
import Girl from './../../assets/girl.svg';

function Layout({ children }) {
  return (
    <Grid
      container
      spacing={10}
      component="main"
      padding="0"
      flexDirection={{ xs: 'column', md: 'row' }}
      sx={{ height: '100vh', width: '100vw', alignContent: { md: 'center' } }}
    >
      <Grid
        item
        xs={false}
        sm={false}
        md={6}
        sx={{
          position: 'relative',
          backgroundImage: {
            md: `url(${Star})`,
          },
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '100vh',
          width: '100%',
        }}
      />
      <Grid
        item
        xs={false}
        sm={false}
        md={6}
        sx={{
          backgroundImage: {
            md: `url(${Girl})`,
          },
          alignContent: { md: 'center' },
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          maxWidth: '548px',
          width: '100vw',
          position: 'absolute',
          top: '26%',
          bottom: 0,
          left: 0,
        }}
      ></Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            mt: '28%',
            width: '100%',
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
