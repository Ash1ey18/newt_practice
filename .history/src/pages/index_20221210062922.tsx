/* eslint-disable jsx-a11y/anchor-is-valid */
import { client } from "libs/client";
import { GetStaticProps, NextPageWithLayout } from "next";
import React from "react";
import FeatureAreas from "src/components/FeatureAreas";
import LatestArticles from "src/components/LatestArticles";
import RecomArticles from "src/components/Layouts/RecomArticles";
import RecomTags from "src/components/RecomTags";
import TopArticle from "src/components/TopArticle";
import { Blog, GetsType, Tag } from "src/types/cms-types";
import { Home_GetStaticProps_Props } from "src/types/page-type";

const Home: NextPageWithLayout<{
  topArticle: Blog[];
  latestBlog: Blog[];
  recomBlog: Blog[];
  tags: Tag[];
}> = ({ tags }) => {
  return (
    <>
      <TopArticle topArticle={topArticle} />
      <RecomArticles recomBlogs={recomBlog} />
      <LatestArticles latestBlog={latestBlog} />
      <FeatureAreas />
      <RecomTags tags={tags} />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<
  Home_GetStaticProps_Props
> = async () => {
  const blogs: GetsType<Blog> = await client.get({ endpoint: "blog" });
  const tags: GetsType<Tag> = await client.get({ endpoint: "tags" });

  const recomBlog: GetsType<Blog> = await client.get({
    endpoint: "blog",
    queries: {
      filters: "recommend[equals]true",
    },
  });
  const topArticle = blogs.contents.filter((_blog) => _blog.topArticle);
  const latestBlog = blogs.contents.filter((_blog, i) => i < 6);
  return {
    props: {
      topArticle,
      recomBlog: recomBlog.contents,
      latestBlog,
      tags: tags.contents,
    },
  };
};
