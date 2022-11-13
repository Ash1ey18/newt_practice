import React from "react";

import { client } from "libs/client";

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "categories" });
  console.log(data);
  const paths = data.contents.map((content) => `/category/${content.id}`);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ ctx }) => {
  const id = ctx.params.id;
  const data = await client.get({ endpoint: "categories", contentId: id });
  return {
    props: {
      category: data,
    },
  };
};
