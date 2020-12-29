import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";

const LoginPage = () => (
  <div>
    <Layout title="login">
      <h1>Login bitches</h1>
      <p>
        <Link href="/about">
          <a>Wat up egirls</a>
        </Link>
      </p>
      <p>
        <Image src="/image.png" layout="fill" />
      </p>
    </Layout>
  </div>
);

export default LoginPage;
