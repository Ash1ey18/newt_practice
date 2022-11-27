import React from "react";
import "../styles/globals.scss";
import HomeLayout from "src/components/Layouts/HomeLayout";
import { MediaQueryProvider } from "src/Context/MediaQueryContext";
function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <MediaQueryProvider>
      {getLayout()}
      <HomeLayout>
        <Component {...pageProps} />
      </HomeLayout>
    </MediaQueryProvider>
  );
}

export default MyApp;
