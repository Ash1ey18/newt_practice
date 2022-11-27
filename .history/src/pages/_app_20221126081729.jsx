import React from "react";

import "../styles/globals.scss";
import { MediaQueryProvider } from "src/Context/MediaQueryContext";
import Layout from "src/components/Layout";
function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <MediaQueryProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MediaQueryProvider>
  );
}

export default MyApp;
