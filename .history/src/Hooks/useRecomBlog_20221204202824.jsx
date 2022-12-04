import { client } from "libs/client";
import useSWRImmutable from "swr/immutable";
export const useRecomBlog = () => {
  const fetcher = async () => {
    const blog = await client.get({
      endpoint: "blog",
      queries: {
        filters: "recommend[equals]true",
      },
    });
    console.log("data is now fetching!");
    return [...blog.contents];
  };
  debugger;
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
