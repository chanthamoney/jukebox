import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";
import Auth from "../services/Auth";

const IndexPage = () => (
  <div>
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <p>
        <Link href="/auth">
          <Auth />
        </Link>
      </p>
    </Layout>
  </div>
);

export default IndexPage;
