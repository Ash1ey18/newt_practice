/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Link from "next/link";

import Layout from "src/components/Layout";

import TopArticle from "src/components/TopArticle";
import RecomArticles from "src/components/RecomArticles";
import LatestArticles from "src/components/LatestArticles";
import FeatureAreas from "src/components/FeatureAreas";
import RecomTags from "src/components/RecomTags";

import { client } from "libs/client";

export default function Home({ blog }) {
  return (
    <Layout>
      <ul>
        {blog.map((content) => {
          return (
            <li key={content.id}>
              <Link href={`/blog/${content.id}`}>
                <a>{content.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
      <TopArticle />
      <RecomArticles />
      <LatestArticles />
      <FeatureAreas />
      <RecomTags />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const data1 = await client.get({ endpoint: "blog" });
  const data2 = await client.get({ endpoint: "categories" });
  return {
    props: {
      blog: data1.contents,
      category: data2.contents,
    },
  };
};
