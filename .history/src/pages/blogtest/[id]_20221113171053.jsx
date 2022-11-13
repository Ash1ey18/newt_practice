import { client } from "libs/client";

export const GetStaticPaths = async () => {
  const data = client.get({ endpoint: "blog" });
  const paths = data.contents.map((content) => `/blogtest/${content.id}`);
  return { paths, fallback: false };
};
