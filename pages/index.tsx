import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <div>
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
    
    <body>
      <div className="container">
        <div id="login">
          <h1>This is an example of the Authorization Code flow</h1>
          <a href="/login" className="btn btn-primary">Log in with Spotify</a>
        </div>
      </div>
    </body>
  </div>
)

export default IndexPage
