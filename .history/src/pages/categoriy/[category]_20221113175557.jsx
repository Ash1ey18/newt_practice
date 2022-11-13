import React from "react";

import { client } from "libs/client";

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "categories" });
  const paths = data.map((category) => `/category/${category.name}`);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = asyn () => {
    const data = await client.get({endpoint:"categories"})
}