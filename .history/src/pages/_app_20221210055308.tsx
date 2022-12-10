import "../styles/globals.scss";

import { AppProps, AppPropsWithLayout } from "next/app";
import React from "react";
import HomeLayout from "src/components/Layouts/HomeLayout";
import { MediaQueryProvider } from "src/Context/MediaQueryContext";
import { SWRConfig } from "swr";
const options = { revalidateOnFocus: false };

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: any) => page);

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
