import React from "react";
import { getAreaLayout } from "src/components/Layouts/AreaLayout";
export default function NotFound() {
  return <h1>404:該当ページはありませんでした。</h1>;
}
NotFound.getLayout = getAreaLayout;
