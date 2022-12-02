import React from "react";
import Image from "next/image";
import { client } from "libs/client";
import BreadCrumb from "src/components/elements/BreadCrumb";
import { getAreaLayout } from "src/components/Layouts/AreaLayout";
export default function Blog({ blog }) {
  console.log(blog);
  const imgUrl = blog.main_img.url;
  const areaList = blog.areas;
  return (
    <>
      <BreadCrumb navObj={areaList[1]} />
      {/* 今日作るところ↓↓↓ */}
      <Image
        src={imgUrl}
        alt={"トップ画像"}
        fill
        sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
        priority
      />
      <p>{blog.publishedAt}</p>
      {areaList.map((_area) => {
        return <li key={_area.id}>{_area.name}</li>;
      })}
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      ></div>
    </>
  );
}
Blog.getLayout = getAreaLayout;
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
