import { callAuthApi } from "../pages/api/users/auth";

// parses the url for query params
// Gets the code that allow us to ask spotify for the token
const redirectUri: any = "http://localhost:3000/callback";
const clientId = process.env.clientId;
const clientSecret = process.env.clientSecret;
let access_token: any = null;
let refresh_token: any = null;

export function getCode(): any {
  let code = null;
  const queryString = window.location.search;
  if (queryString.length > 0) {
    const urlParams = new URLSearchParams(queryString);
    code = urlParams.get("code");
  }
  console.log("in helper function", code);
  return code;
}

export function fetchAccessToken(code: any) {
  console.log("fetchAccessTea", code);
  let body = "grant_type=authorization_code";
  body += "&code=" + code;
  body += "&redirect_uri=" + encodeURI(redirectUri);
  body += "&client_id=" + clientId;
  body += "&client_secret=" + clientSecret;
  callAuthApi(body);
}

export function handleAuthResponse(res: any) {
  if (res.status == 200) {
    console.log("status = 200?");
    if (access_token == null) {
      console.log("set access");
      access_token = res.data.access_token;
    }
    if (refresh_token == null) {
      refresh_token = res.data.refresh_token;
    }
  } else {
    console.log(res);
    alert(res);
  }
  console.log(access_token, "accessToken");
  console.log(refresh_token, "refreshToken");
}

export function getAccessToken() {
  return access_token;
}

export function getRefreshToken() {
  return refresh_token;
}

export function profile(response: any) {
  console.log("hellper", response);
  return {
    displayName: response.display_name,
    // imageUrl: response.images.url,
  };
}
