import "../styles/globals.scss";

import React from "react";
import { MediaQueryProvider } from "src/Context/MediaQueryContext";
function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <MediaQueryProvider>
      {getLayout(<Component {...pageProps} />)}
    </MediaQueryProvider>
  );
}

export default MyApp;
