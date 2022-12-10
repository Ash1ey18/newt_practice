import "../styles/globals.scss";

import { AppPropsWithLayout } from "next/app";
import React from "react";
import { MediaQueryProvider } from "src/Context/MediaQueryContext";
import { SWRConfig } from "swr";
const options = { revalidateOnFocus: false };

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <MediaQueryProvider>
      <HomeLayout>
        <SWRConfig value={options}>
          {getLayout(<Component {...pageProps} />)}
        </SWRConfig>
      </HomeLayout>
    </MediaQueryProvider>
  );
}

export default MyApp;
