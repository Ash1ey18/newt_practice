import React from "react";
import { client } from "libs/client";
import Layout from "src/components/Layout";
import BreadCrumb from "src/components/elements/BreadCrumb";
export default function BlogId({ blog }) {
  const areaList = blog.area;
  console.log(areaList);
  return (
    <Layout>
      <BreadCrumb areaList={areaList} />
      <h1>{blog.title}</h1>
      <p>{blog.publishedAt}</p>
      {blog.category.map((_category) => {
        return <li key={_category.id}>{_category.name}</li>;
      })}

      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      ></div>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });
  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (ctx) => {
  const id = ctx.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
