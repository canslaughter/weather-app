import {Helmet} from 'react-helmet-async';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import SearchForm from './SearchForm';

const Home = props => {
  return (
    <>
      <Helmet>
        <title>El Clima en el Mundo</title>
        <style type="text/css">
          {`
            body {
              background-color: #b0bec5;
            }
          `}
        </style>
      </Helmet>
      <Box
        component="main"
        sx={{
          py: t => ({xs: t.spacing(10), sm: t.spacing(11)}),
        }}
      >
        <CustomAppBar top onAddCity={props.onAddCity} />
        {props.children}
        <CustomAppBar onAddCity={props.onAddCity} />
      </Box>
    </>
  );
};

export default Home;

const CustomAppBar = props => {
  const top = (x,y) => props.top ? x : y;
  const bottom = (x,y) => props.top ? y : x;
  return (
      <AppBar
        position="fixed"
        color="default"
        sx={bottom({
          display: {sm: 'none'},
          top: 'auto',
          bottom: 0,
        })}
      >
        <Toolbar
          sx={{
            mx: 'auto',
            width: '100%',
            maxWidth: t => t.breakpoints.values.lg,
            minHeight: t => ({xs: t.spacing(8)}),

            justifyContent: 'end',
          }}
        >
          {top(
            <Paper
              component="img"
              sx={{
                borderRadius: '50%',
                height: '3em',
                width: '3em',
                mr: 2,
              }}
              src="/weather-app/logo512.png"
            />
          )}
          {top(
            <Typography
              variant="h6"
              component="h1"
              sx={{flexGrow: 1}}
              noWrap
            >
              El Clima en el Mundo
            </Typography>
          )}
          <Box
            sx={{
              display: top({xs: 'none', sm: 'block'}, 'block'),
              flexBasis: '30ch',
              flexShrink: 0,
              flexGrow: 1,
              maxWidth: {sm: '50ch'},
              ml: {xs: 0, sm: 2},
            }}
          >
            <SearchForm submitText="Agregar" onSubmit={props.onAddCity} />
          </Box>
        </Toolbar>
      </AppBar>
  );
};
