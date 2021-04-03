import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import axios from "axios";

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

const scopes = "user-read-private user-read-email";
const redirectUri = process.env.redirectUri;

function handleAuth() {
  axios
    .get(
      "https://accounts.spotify.com/authorize?response_type=code&client_id=" +
        process.env.clientId +
        (scopes ? "&scope=" + encodeURIComponent(scopes) : "") +
        "&redirect_uri=" +
        encodeURIComponent(redirectUri)
    )
    .then(function (response: any) {
      // handle success
      // extract token from response for use in other requests
      window.location = response.config.url;
      return true;
    })
    .catch(function (error: any) {
      // handle error
      console.log(error);
      return false;
    });
}

// function handleToken() {
//   axios
//     .post(
//       "https://accounts.spotify.com/authorize?response_type=code&client_id=" +
//         process.env.clientId +
//         (scopes ? "&scope=" + encodeURIComponent(scopes) : "") +
//         "&redirect_uri=" +
//         encodeURIComponent(redirectUri)
//     )
//     .then(function (response: any) {
//       // handle success
//       // extract token from response for use in other requests
//       window.location = response.config.url;
//       return true;
//     })
//     .catch(function (error: any) {
//       // handle error
//       console.log(error);
//       return false;
//     });
// }
// }

function LoginPage() {
  const classes = useStyles();

  return (
    <body id="wrapper" className={classes.root}>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={handleAuth}
      >
        LOGIN TO SPOTIFY
      </Button>
    </body>
    // <Auth />
  );
}

export default LoginPage;
