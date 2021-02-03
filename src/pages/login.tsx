import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url('./image.png')`,
    backgroundSize: "100% 100%",
    margin: "-8px",
    padding: "0",
  },
  button: {
    height: "100px",
    width: "200px",
  },
}));

function LoginPage() {
  const classes = useStyles();

  return (
    <body id="wrapper" className={classes.root}>
      <Button variant="contained" color="primary" className={classes.button}>
        LOGIN TO SPOTIFY
      </Button>
    </body>
  );
}

export default LoginPage;
