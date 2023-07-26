import { GlobalStyle } from "../src/commons/style/global.style";
import { RecoilRoot } from "recoil";
import { Global } from "@emotion/react";
import Head from "next/head";
import Layout from "../src/commons/layout";

export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Head>
        <title>BikeFinder Admin</title>
        <link
          rel="icon"
          href="https://firebasestorage.googleapis.com/v0/b/bike-finder-1121a.appspot.com/o/bikefinder%2Ffavicon.ico?alt=media&token=a9b39097-0d45-4a4a-9aaf-e2749d7afbcc"
        />
      </Head>
      <Global styles={GlobalStyle} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}
