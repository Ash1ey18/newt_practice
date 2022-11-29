import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "newt-blog-demo",
  apiKey: "4f1710ee1be24c53bb9fa742ab2fa0551738",
});

// process.env.API_KEY
