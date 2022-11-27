import React from "react";
import "../styles/globals.scss";
import { MediaQueryProvider } from "src/Context/MediaQueryContext";
function MyApp({ Component, pageProps }) {
  debugger;
  const getLayout = Component.getLayout || ((page) => page);
  console.log(Component);
  return (
    <MediaQueryProvider>
      {getLayout(<Component {...pageProps} />)}
    </MediaQueryProvider>
  );
}

export default MyApp;
