import { JSDOM } from "jsdom";
import { client } from "libs/client";
import React from "react";
import Blog from "src/components/Blog";
import BreadCrumb from "src/components/elements/BreadCrumb";
import { getAreaLayout } from "src/components/Layouts/AreaLayout";
export default function BlogPage({ blog }) {
  const areaList = blog.areas;
  return (
    <>
      <BreadCrumb navObj={areaList[1]} />
      {/* 今日作るところ↓↓↓ */}
      <Blog blog={blog} />
    </>
  );
}
BlogPage.getLayout = getAreaLayout;
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });
  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (ctx) => {
  const dom = new JSDOM(data.contents);
  const id = ctx.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });
  return {
    props: {
      blog: data,
    },
  };
};
