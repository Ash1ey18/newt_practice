import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "newt-blog-demo",
  apiKey: process.env.API_KEY,
});
