import { Blog, Tag } from "./cms-types";

export type Home_GetStaticProps_Props = {
  blogs: Blog[];
  recomBlog: Blog[];
  tags: Tag[];
};
