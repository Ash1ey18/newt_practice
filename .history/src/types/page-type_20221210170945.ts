import { Area, Blog, Tag, Toc } from "./cms-types";

export type GetStaticProps_Params = { id: string };

export type Home_Props = {
  topArticle: Blog[];
  latestBlog: Blog[];
  recomBlog: Blog[];
  tags: Tag[];
};

export type BlogPage_Props = {
  blog: Blog;
  tocHeadings: Toc[];
};

export type AreaHome_Props = {
  areaBlogs: Blog[];
  areas: Area[];
};

export type TagHome_Props = {
  blog: Blog[];
  tags: Tag[];
};

export type AllBlog_Props = {
  blog: Blog[];
  areas: Area[];
};