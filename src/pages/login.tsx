import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import Button from "@material-ui/core/Button";
import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    border: "1px solid black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    height: "100px",
    width: "200px",
  },
}));

function LoginPage() {
  const classes = useStyles();

  return (
    <div id="wrapper" className={classes.root}>
      <Image src="/image.png" layout="fill" />

      <Button variant="contained" color="primary" className={classes.button}>
        LOGIN TO SPOTIFY
      </Button>
    </div>
  );
}

export default LoginPage;
