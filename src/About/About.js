import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './About.css';

function About() {
  return (
    <div className="about">
      <Paper className="about-paper">
        <Typography component="h1" variant="h4" gutterBottom={true}>
          About
        </Typography>
        <Typography component="p" gutterBottom={true}>
          Playing with routes. Nothing to see here.
        </Typography>
      </Paper>
    </div>
  );
}

export default About;
