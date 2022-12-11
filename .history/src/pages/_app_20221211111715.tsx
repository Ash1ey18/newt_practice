import "../styles/globals.scss";

import { AppPropsWithLayout } from "next/app";
import React from "react";
import { MediaQueryProvider } from "src/Hooks/useMediaQueryContext";
import { SWRConfig } from "swr";
const options = { revalidateOnFocus: false };

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
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
