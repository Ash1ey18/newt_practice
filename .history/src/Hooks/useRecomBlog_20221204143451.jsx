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
    ,
    fetcher
  );
  return {
    data,
  };
};
