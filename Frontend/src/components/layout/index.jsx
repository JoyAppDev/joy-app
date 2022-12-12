import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Header } from '../header';
import Star from './../../assets/star.svg';

function Layout({ children }) {
  return (
    <Grid
      container
      component="main"
      sx={{
        maxWidth: 1280,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Grid item xs={12} sm={8} md={5} sx={{ width: '100%' }}>
        {/* <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${Star})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: '1370px',
            height: '1494px',
            zIndex: '2',
            position: 'absolute',
            left: '-400px',
            bottom: '0',
            display: 'block',
          }}
        /> */}
        <Grid item xs={12} sm={8} md={5}>
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
              mr: 15,
            }}
          >
            <Header />
            {children}
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Layout;
