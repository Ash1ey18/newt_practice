import { Area, Blog, Tag, Toc } from "./cms-types";

expor type GetStaticProps_Params = 
  { id: string }


export type Home_GetStaticProps_Props = {
  topArticle: Blog[];
  recomBlog: Blog[];
  latestBlog: Blog[];
  tags: Tag[];
};

export type Home_Props = {
  topArticle: Blog[];
  latestBlog: Blog[];
  recomBlog: Blog[];
  tags: Tag[];
};

export type BlogPage_Props = {
  blog: Blog;
  toc: Toc[];
};

export type AreaHome_Props = {
  areaBlogs: Blog[];
  area: Area[];
};

export type AreaHome_GetStaticProps_Props = {
  areaBlogs: Blog[];
  area: Area[];
};
