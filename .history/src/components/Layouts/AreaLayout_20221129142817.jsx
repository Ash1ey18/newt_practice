import React from "react";
import useSWR from "swr";
import FollowUs from "src/components/Layouts/FollowUs";
import Footer from "src/components/Layouts/Footer";
import Header from "src/components/Layouts/Header";
import IntroApp from "src/components/Layouts/IntroApp";
import { client } from "libs/client";
// import RecomArticles from "src/components/Layouts/RecomArticles";
const fetcher = () => client.get({ endpoint: "blog" });
export default function AreaLayout({ children }) {
  const { data } = useSWR(
    "https://newt-blog-demo.microcms.io/api/v1/blog",
    fetcher
  );
  console.log(data);
  return (
    <>
      <Header />
      {children}
      {/* <RecomArticles recomBlogs={recomBlogs} /> */}
      <IntroApp />
      <FollowUs />
      <Footer />
    </>
  );
}

// export async function getServerSideProps() {
//   const data = await client.get({ endpoint: "blog" });
//   return { props: { blog: data } };
// }

export const getAreaLayout = (page) => {
  return <AreaLayout>{page}</AreaLayout>;
};
