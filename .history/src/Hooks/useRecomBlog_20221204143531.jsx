import { client } from "libs/client";
import useSWR from "swr";
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
  const { data } = useSWR(
    "https://newt-blog-demo.microcms.io/api/v1/blog?filters=recommend%5Bequals%5Dtruesssss",
    fetcher
  );
  return {
    data,
  };
};
