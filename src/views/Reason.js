import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import ReasonVisit from '../components/register/ReasonVisit';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    margin: '0 auto',
    width: '40rem',
  },
  iframe: {
    width: '80rem',
    height: '25rem',
    borderStyle:'none',
    marginBottom:'1rem',
    marginLeft:'10%'
  },
});
const Reason = ({ createVisit }) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <ReasonVisit createVisit={createVisit} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default Reason;
