import React from "react";
import { client } from "libs/client";
export default function TagId() {
  return <div>test</div>;
}

export function getStaticPaths() {
  const blogData = client.get({ endpoint: "blog" });
}
