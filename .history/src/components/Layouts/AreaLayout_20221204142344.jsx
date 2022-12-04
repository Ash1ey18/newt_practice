import { client } from "libs/client";
import React from "react";
import RecomArticles from "src/components/Layouts/RecomArticles";
import useSWR from "swr";

import HomeLayout from "./HomeLayout";

export default function AreaLayout({ children }) {
  return (
    <HomeLayout>
      {children}
      {data && <RecomArticles recomBlogs={data} />}
    </HomeLayout>
  );
}

export const getAreaLayout = (page) => {
  return <AreaLayout>{page}</AreaLayout>;
};
