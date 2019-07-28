import React from 'react';

import { ThemeProvider, makeStyles, createStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#28282a',
      contrastText: '#F2F2F2',
    },
    secondary: {
      light: '#F2E0D0',
      main: '#F25757',
      contrastText: '#F2F2F2',
    },
    text: {
      primary: '#020202',
      secondary: '#F2F2F2',
    },
  },
  overrides: {
    MuiButton: {
      outlinedPrimary: {
        color: '#F2F2F2',
        border: '1px solid #F2F2F2',
      },
    },
  },
});

const useStyles = makeStyles(() => createStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    paddingLeft: theme.spacing(2),
    textDecoration: 'none',
    color: theme.palette.primary.contrastText,
  },
  toolbar: {
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  signupButton: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  logoutButtonLabel: {
    color: theme.palette.primary.contrastText,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

export default function Header() {
  const classes = useStyles();
  
  return (
    <section className={classes.root}>
      <ThemeProvider theme={theme}>
        <AppBar className={classes.appBar} position="fixed">
          <Toolbar>
            <Grid container className={classes.toolbar}>
              <Grid item>
                <a href="https://topmod.soutendijk.com/">
                  <Typography className={classes.title} variant="h6">
                    topmod
                  </Typography>
                </a>
              </Grid>
              <Grid item>
                <Grid container spacing={2}>
                  <Grid item>
                    <a href="https://app.topmod.soutendijk.com/signup">
                      <Button className={classes.signupButton} color="secondary" variant="contained">
                          Create an account
                      </Button>
                    </a>
                  </Grid>
                  <Grid item>
                  <a href="https://app.topmod.soutendijk.com/login">
                      <Button className={classes.signupButton} color="secondary" variant="outlined">
                          Log In
                      </Button>
                    </a>
                    </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </section>
  );
}
