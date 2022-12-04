import "../styles/globals.scss";

import React from "react";
import { MediaQueryProvider } from "src/Context/MediaQueryContext";
import { SWRConfig } from "swr";
const options = { revalidateOnFocus: falserevalidateOnReconnect: false };

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <MediaQueryProvider>
      <SWRConfig value={options}>
        {getLayout(<Component {...pageProps} />)}
      </SWRConfig>
    </MediaQueryProvider>
  );
}

export default MyApp;
