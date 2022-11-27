import React from "react";

import "../styles/globals.scss";
import { MediaQueryProvider } from "src/Context/MediaQueryContext";
import Layout from "src/components/Layout";
function MyApp({ Component, pageProps }) {
  return (
    <MediaQueryProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MediaQueryProvider>
  );
}

export default MyApp;
