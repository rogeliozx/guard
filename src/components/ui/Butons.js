import React from "react";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import PropTypes from "prop-types";

const Butons = ({ backFunction }) => {
  const style = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    button: {
      width: "10rem",
    },
  };
  const handleClick=()=>{
    backFunction(back=>!back)
  }
  return (
    <div style={style.container}>
      <Button
      style={style.button}
        variant="contained"
        color="secondary"
        size="large"
        startIcon={<ArrowBackIcon />}
        onClick={handleClick}
      ></Button>
    </div>
  );
};

Butons.propTypes = {
    backFunction:PropTypes.func.isRequired
};

export default Butons;
