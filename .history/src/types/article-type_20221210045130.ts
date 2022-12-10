import { Blog } from "./cms-types";

export type RecomBlogs = {
  recomBlogs: Blog[];
};

export type ArticleImg_Props = {
  src: string;
  alt: string;
  priority?: boolean;
  id: string;
};
