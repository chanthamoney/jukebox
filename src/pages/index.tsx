import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";

const IndexPage = () => (
  <div>
    <Layout title="jukebox">
      <h1>Welcome Jukebox</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <p>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </p>
    </Layout>
  </div>
);

export default IndexPage;
