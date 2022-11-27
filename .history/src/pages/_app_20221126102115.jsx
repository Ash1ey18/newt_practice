import React from "react";
import { client } from "libs/client";
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

export const getStaticProps = async () => {
  const recomBlogData = await client.get({
    endpoint: "blog",
    queries: {
      filters: "recommend[equals]true",
    },
  });
  return {
    props: {
      recomBlogs: recomBlogData.contents,
    },
  };
};
