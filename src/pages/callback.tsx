import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { getCode, fetchAccessToken } from "../utils/helpers";

function callback() {
  useEffect(() => {
    // call this function only once to grab the code
    console.log("hello");
    // let functCode = getCode;
    let codeFunct = getCode();
    fetchAccessToken(codeFunct);
  }, []);
  return (
    <div>
      <Layout title="PLS QUEEN">
        <h1>SUCCESSFUL LOGIN !!!</h1>
        <p>
          <a>we are learning ouath!</a>
        </p>
      </Layout>
    </div>
  );
}

export default callback;
