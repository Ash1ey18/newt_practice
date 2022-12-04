import React from "react";
import RecomArticles from "src/components/Layouts/RecomArticles";

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
