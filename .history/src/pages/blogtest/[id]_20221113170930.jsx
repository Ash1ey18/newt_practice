import { client } from "libs/client";

export const GetStaticPaths = async () => {
  const data = client.get({ endpoint: "blog" });
};
