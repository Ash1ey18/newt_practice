import { Blog, Tag } from "./cms-types";

export type Home_GetStaticProps_Props = {
  topArticle: Blog[];
  latestBlog: Blog[];
  recomBlog: Blog[];
  tags: Tag[];
};
