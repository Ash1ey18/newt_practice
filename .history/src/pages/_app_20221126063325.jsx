import React from "react";

import "../styles/globals.scss";
import { MediaQueryProvider } from "src/Context/MediaQueryContext";
import Layout from "src/components/Layout";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <MediaQueryProvider>
        <Component {...pageProps} />
      </MediaQueryProvider>
    </Layout>
  );
}

export default MyApp;
