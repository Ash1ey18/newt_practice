import React from "react";

export const createGetLayout = (layoutProps) => {
  return function getLayout(page) {
    return <Layout {...layoutProps}>{page}</Layout>;
  };
};
