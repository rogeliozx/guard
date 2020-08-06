import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  buttonWidth: {
    minWidth: "6.5rem",
  },
  marginGrid: {
    marginRight: "2rem",
    marginBottom:'1rem'
  },
}));
const ButtonGrid = ({ idSections, users, handleClick }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        {idSections.map((idSections, index) => (
          <Grid item xs={1} key={index} className={classes.marginGrid}>
            <Button
              size="large"
              className={classes.buttonWidth}
              onClick={() => {
                handleClick(users ? idSections : idSections.name);
              }}
              variant="contained"
              color="primary"
              value={1}
              key={index}
            >
              {users ? idSections : idSections.name}
            </Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ButtonGrid;
