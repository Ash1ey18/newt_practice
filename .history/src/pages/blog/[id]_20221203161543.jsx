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
  const id = ctx.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });
  const dom = new JSDOM(data);
  const toc = [];
  dom.window.document
    .querySelectorAll("h1, h2, h3, h4, h5, h6")
    .forEach((heading) => {
      toc.push({
        id: heading.id,
        name: heading.tagName,
        text: heading.textContent,
      });
    });
  console.log(dom.window.document.querySelectorAll("h1, h2, h3, h4, h5, h6"));
  return {
    props: {
      blog: data,
    },
  };
};
