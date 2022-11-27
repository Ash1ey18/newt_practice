import React from "react";
import "../styles/globals.scss";
import { MediaQueryProvider } from "src/Context/MediaQueryContext";
function MyApp({ Component, pageProps, recomBlogs }) {
  const getLayout = Component.getLayout || ((page) => page);
  console.log(getLayout);
  return (
    <MediaQueryProvider>
      {getLayout(<Component {...pageProps} />, recomBlogs)}
    </MediaQueryProvider>
  );
}

export default MyApp;
