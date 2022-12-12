import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Header } from '../header';
import Star from './../../assets/star.svg';

function Layout({ children }) {
  return (
    <Grid
      container
      component="main"
      spacing={2}
      sx={{
        maxWidth: 1400,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
        flexGrow: 1,
        height: '100vh',
      }}
    >
      <Box
        item
        component={Grid}
        sm={4}
        md={9}
        display={{ xs: 'none', sm: 'block' }}
        sx={{
          backgroundImage: `url(${Star})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width: '800px',
          height: '600px',
          zIndex: '2',
          position: 'absolute',
          left: '-300px',
          bottom: '0',
          display: 'block',
        }}
      ></Box>
      <Grid item xs={4} sm={8} md={5}>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '460px',
            height: '394px',
            width: '100%',
            mt: 27.5,
            mb: 27.5,
            mr: 'auto',
            ml: 'auto',
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
