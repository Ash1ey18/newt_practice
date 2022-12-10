import { client } from "libs/client";
import { Blog, GetsType } from "src/types/cms-types";
import useSWRImmutable from "swr/immutable";
export const useRecomBlog = () => {
  const fetcher: () => Promise<Blog[]> = async () => {
    const blog: GetsType<Blog> = await client.get({
      endpoint: "blog",
      queries: {
        filters: "recommend[equals]true",
      },
    });
    return [...blog.contents];
  };
  const { data, error } = useSWRImmutable(
    "https://newt-blog-demo.microcms.io/api/v1/blog?filters=recommend%5Bequals%5Dtrue",
    fetcher
  );
  return {
    blog: data,
    isLoading: !error && !data,
    isError: error,
  };
};
