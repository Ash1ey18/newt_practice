import React from "react";

export const createGetLayout = (layoutProps?): ((page) => React.ReactNode) => {
  return function getLayout(page) {
    return <Layout {...layoutProps}>{page}</Layout>;
  };
};
