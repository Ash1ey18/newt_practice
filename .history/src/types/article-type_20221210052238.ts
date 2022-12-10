
import { Area, Blog } from "./cms-types";

export type RecomBlogs = {
  recomBlogs: Blog[];
};

export type ArticleImg_Props = {
  src: string;
  alt: string;
  priority?: boolean;
  id: string;
};

export type LocationPoint_Props = {
  isTop?: boolean;
  areaList: Area[];
};

export type ArticleDate_Props