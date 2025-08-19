import '../styles/globals.css';
import Layout from '../comps/Layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/skyluclogo.png" />
        <title>Skyluc Projects & Logistics</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
