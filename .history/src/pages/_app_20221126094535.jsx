import React from "react";
import { client } from "libs/client";
import "../styles/globals.scss";
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

export const getStaticProps = async () => {
  const blog = await client.get({ endpoint: "blog" });
  return {
    props: {
      blog: blog.contents,
    },
  };
};
