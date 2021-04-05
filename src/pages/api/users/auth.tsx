import axios from "axios";
import { handleAuthResponse, getAccessToken } from "../../../utils/helpers";
const scopes =
  "&scope=user-read-private user-read-email user-modify-playback-state user-read-playback-position user-library-read streaming user-read-playback-state user-read-recently-played playlist-read-private";
// TODO: CALL THE REDIRECT URI W/ LOCAL ENV
const redirectUri: any = "http://localhost:3000/callback";
const AUTHORIZE = "https://accounts.spotify.com/authorize";
const TOKEN = "https://accounts.spotify.com/api/token";
const PROFILE = "	https://api.spotify.com/v1/me";
const clientId = process.env.clientId;
const clientSecret = process.env.clientSecret;

const authorizedURL =
  AUTHORIZE +
  "?client_id=" +
  clientId +
  "&response_type=code" +
  "&redirect_uri=" +
  encodeURI(redirectUri) +
  "&show_dialog=true" +
  scopes;

const headers: any = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded",
  },
  auth: {
    username: clientId,
    password: clientSecret,
  },
};

export function requestAuthorization() {
  axios
    .get(authorizedURL)
    .then(function (response: any) {
      // handle success
      // extract token from response for use in other requests
      window.location.href = authorizedURL;
    })
    .catch(function (error: any) {
      // handle error
      console.log(error);
      return false;
    });
}

export function callAuthApi(body: String) {
  axios
    .post(TOKEN, body, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then(function (response) {
      console.log("Successful ");
      console.log(response);
      handleAuthResponse(response);
    })
    .catch(function (error) {});
}

export function getProfile() {
  console.log("get profile");
  let accessToken = getAccessToken();
  console.log(accessToken);
  axios
    .get(PROFILE, {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}
