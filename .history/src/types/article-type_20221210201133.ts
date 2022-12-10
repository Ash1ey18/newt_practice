import { PropsWithChildren } from "react";

import { Area, Blog, Tag } from "./cms-types";

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

export type ArticleDate_Props = {
  isTop?: boolean;
  utcDate: Date | string | number;
};

export type ArticleList_Props = {
  blogs: Blog[];
};

export type LatestArticles_Props = {
  latestBlogs: Blog[];
};

export type SectionWraper_Props = PropsWithChildren<{
  isRecomArti?: boolean;
}>;

export type RecomTags_Props = {
  tags: Tag[];
};

export type BreadCrumb_Props = {
  navObj: Tag | Area;
};

export type Signature_Props = {
  publishedUtcDate: string;
};

export type BlogContent_Props = {
  blog: Blog;
  tocHeadings;
};
