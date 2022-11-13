import React from "react";

import { client } from "libs/client";

export default function BlogId({ blog }) {
  return (
    <>
      <h1>{blog.title}</h1>
      <p>{blog.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      ></div>
    </>
  );
}

// export const getStaticPaths = async () => {
//   const data = await client.get({ endpoint: "blog" });
//   const paths = data.contents.map((content) => `/blogtest/${content.id}`);
//   return { paths, fallback: false };
// };

// export const getStaticProps = async (ctx) => {
//   const id = ctx.params.id;
//   const data = client.get({ endpoint: "blog", contentId: id });

//   return {
//     props: {
//       blog: data,
//     },
//   };
// };

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
