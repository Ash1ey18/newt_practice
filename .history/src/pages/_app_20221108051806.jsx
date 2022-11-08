import React from "react";

import "../styles/globals.scss";
import { MediaQueryProvider } from "src/Context/MediaQueryContext";

function MyApp({ Component, pageProps }) {
  return (
    <MediaQueryProvider>
      <Component {...pageProps} />
    </MediaQueryProvider>
  );
}

export default MyApp;
