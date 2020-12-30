import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import Button from "@material-ui/core/Button";
import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: "25%",
    height: "100px",
    width: "200px",
  },
}));

function LoginPage() {
  const classes = useStyles();

  return (
    <body>
      <div className={classes.root}>
        <Image src="/image.png" layout="fill" />
        <Button variant="contained" color="primary" className={classes.button}>
          LOGIN TO SPOTIFY
        </Button>
      </div>
    </body>
  );
}

export default LoginPage;
