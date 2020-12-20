import axios from "axios";
import React from "react";
import Button from "@material-ui/core/Button";

const scopes = "user-read-private user-read-email";
const redirectUri = "http://localhost:3000/";

function handleAuth() {
  axios
    .get(
      "https://accounts.spotify.com/authorize?response_type=code&client_id=" +
        clientId +
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

const Auth = () => (
  <Button color="primary" onClick={handleAuth}>
    Login
  </Button>
);

export default Auth;
