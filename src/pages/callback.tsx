import axios from "axios";
// import qs from 'qs';

// const redirectUri = process.env.redirectUri;
// const grantType = "authorization_code";
// // const codeVal = "test";  
// const basicAuth = Buffer.from('Basic ' + process.env.clientId + ':' + process.env.clientSecret).toString('base64'); 

const Callback = async () => {
  const clientId:any = process.env.clientId;
  const clientSecret:any = process.env.clientSecret;
  
  const headers = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    auth: {
      username: clientId,
      password: clientSecret,
    },
  };

  try {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      {grant_type: 'client_credentials'}, 
    //   {data: 'grant_type=authorization_code'}, 
      headers
    );
    console.log(response.data.access_token);
    return <>response.data.access_token</>;

  } catch (error) {
    console.log(error);
  }
};



// const Callback = (code: String) => {
//     return (
//         axios
//         .post(
//             "https://accounts.spotify.com/api/token", 
//             {
//                 grant_type: grantType, 
//                 code: code, 
//                 redirect_uri: encodeURIComponent(redirectUri) 
//             }, 
//             {
//                 headers: { 'Authorization': + basicAuth }
//             }
//         )
//         .then(function (response: any) {
//         // handle success
//         // extract token from response for use in other requests
//         console.log("At callback response");
//         })
//         .catch(function (error: any) {
//         // handle error
//         console.log(error);
//         })
//     )
// }

export default Callback;