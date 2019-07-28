
import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider, makeStyles, createStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Header from './Header';

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
      secondary: '#b2b2b2',
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        color: '#020202',
      },
    },
    MuiButton: {
      root: {
        color: '#020202',
      },
    },
  },
});

const useStyles = makeStyles(() => createStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  hero: {
    textAlign: 'center',
    flexGrow: 1,
    backgroundImage: 'url(/assets/images/hero.jpg)',
    backgroundPosition: '100% 0',
    [theme.breakpoints.down('sm')]: {
      backgroundPosition: 'center',
    },
    backgroundSize: 'cover',
    width: '100%',
    height: '540px',
  },
  heroHeadline: {
    color: theme.palette.primary.contrastText,
    marginTop: theme.spacing(12),
  },
  heroCaption: {
    color: theme.palette.primary.contrastText,
    marginTop: theme.spacing(8),
    fontWeight: 300,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  heroButton: {
    marginTop: theme.spacing(4),
  },
  features: {
    textAlign: 'center',
    flexGrow: 1,
    backgroundImage: 'url(/assets/images/CurvyLines.png)',
    backgroundColor: '#F2E0D0',
    height: '540px',
    [theme.breakpoints.down('sm')]: {
      height: '100%',
      padding: '50px 0 50px 0',
    },
  },
  featuresList: {
    height: '100%',
  },
  featuresItem: {
    width: '250px',
  },
  toolbar: theme.mixins.toolbar,
}));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme} >
      <div className={classes.root}>
        <Header />
        <div className={classes.toolbar} />
        <section className={classes.hero}>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={12}>
              <Typography className={classes.heroHeadline} color="textPrimary" variant="h3">The Ultimate Modding Tool</Typography>
            </Grid>
            <Grid item md={12}>
              <Typography className={classes.heroCaption} color="textPrimary" variant="h6">Keep track of your stream's mods</Typography>
            </Grid>
            <Grid item md={12}>
              <a href="https://app.topmod.soutendijk.com/signup">            
                <Button className={classes.heroButton} color="secondary" variant="contained">Create an account</Button>
              </a>
            </Grid>
          </Grid>
        </section>
        <section className={classes.features}>
          <Grid className={classes.featuresList} container justify="space-around" alignContent="center">
            <Grid className={classes.featuresItem} item>
              <Grid container direction="column" spacing={4}>
                <Grid item><i className="far fa-comments fa-4x" /></Grid>
                <Grid item>
                  <Typography variant="h6">Get smart with your mods</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    Keep close track of how your mods are interacting with your community. Generate reports to see which mods send the most messages, delete the most messages, and issue the most bans.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid className={classes.featuresItem} item>
              <Grid container direction="column" spacing={4}>
                <Grid item><i className="fas fa-hashtag fa-4x" /></Grid>
                <Grid item>
                  <Typography variant="h6">Manage Your Social Media</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    Find out how and when to post to your social media to maximize engagment and impressions. Add the most effective hashtags and keywords to your posts with one click.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid className={classes.featuresItem} item>
              <Grid container direction="column" spacing={4}>
                <Grid item><i className="far fa-chart-bar fa-4x" /></Grid>
                <Grid item>
                  <Typography variant="h6">Report. Report. Report.</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    Gain insights on your social media through reporting and analytics. Back up your value to potential sponsors with data and advance your career.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </section>
      </div>
    </ThemeProvider>
  );
}

export default App;
