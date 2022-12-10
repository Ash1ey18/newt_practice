import "../styles/globals.scss";

import { AppProps } from "next/app";
import React from "react";
import HomeLayout from "src/components/Layouts/HomeLayout";
import { MediaQueryProvider } from "src/Context/MediaQueryContext";
import { SWRConfig } from "swr";
const options = { revalidateOnFocus: false };

function MyApp(props: AppProps) {
  const getLayout = props.Component.getLayout || ((page: any) => page);

  return (
    <MediaQueryProvider>
      <HomeLayout>
        <SWRConfig value={options}>
          {getLayout(<props.Component {...props.pageProps} />)}
        </SWRConfig>
      </HomeLayout>
    </MediaQueryProvider>
  );
}

export default MyApp;
