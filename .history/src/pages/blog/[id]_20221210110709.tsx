import { JSDOM } from "jsdom";
import { client } from "libs/client";
import { GetStaticPaths, NextPageWithLayout } from "next";
import React from "react";
import BlogContent from "src/components/Blog";
import BreadCrumb from "src/components/elements/BreadCrumb";
import { getAreaLayout } from "src/components/Layouts/AreaLayout";
import { Blog, Toc } from "src/types/cms-types";
import { BlogPage_Props } from "src/types/page-type";
const BlogPage: NextPageWithLayout<BlogPage_Props> = ({ blog, toc }) => {
  return (
    <>
      <BreadCrumb navObj={blog.areas[1]} />
      <BlogContent blog={blog} toc={toc} />
    </>
  );
};
BlogPage.getLayout = getAreaLayout;
export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });
  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (ctx) => {
  const id = ctx.params.id;
  const data: Blog = await client.get({ endpoint: "blog", contentId: id });
  const dom = new JSDOM(data.body);
  const toc: Toc[] = [];
  dom.window.document
    .querySelectorAll<HTMLHeadingElement>("h1, h2, h3, h4, h5, h6")
    .forEach((heading: HTMLHeadingElement) => {
      toc.push({
        id: heading.id,
        name: heading.tagName,
        text:
          typeof heading.textContent === "string" ? heading.textContent : "",
      });
    });
  return {
    props: {
      blog: data,
      toc: toc,
    },
  };
};
export default BlogPage;
