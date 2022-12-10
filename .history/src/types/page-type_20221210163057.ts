import { Area, Blog, Tag, Toc } from "./cms-types";

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

export type AreaHome = {
  recomblog: Blog[];
  area: Area[];
};
