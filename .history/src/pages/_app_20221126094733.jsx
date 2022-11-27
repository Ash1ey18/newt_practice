import React from "react";
import { client } from "libs/client";
import "../styles/globals.scss";
import { MediaQueryProvider } from "src/Context/MediaQueryContext";
function MyApp({ Component, pageProps, recomBlogData }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <MediaQueryProvider>
      {getLayout(<Component recomBlogData={recomBlogData} {...pageProps} />)}
    </MediaQueryProvider>
  );
}

export default MyApp;

export const getStaticProps = async () => {
  const recomBlogData = await client.get({
    endpoint: "blog",
    queries: {
      filters: "recommend[equals]true",
    },
  });
  return {
    props: {
      blog: recomBlogData.contents,
    },
  };
};
