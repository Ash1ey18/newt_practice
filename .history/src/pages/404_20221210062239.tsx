import Link from "next/link";
import React from "react";
import { getAreaLayout } from "src/components/Layouts/AreaLayout";
const NotFound = () => {
  return (
    <>
      <h1>404:該当ページはありませんでした。</h1>
      <Link href="/">
        <a>ホームに戻る</a>
      </Link>
    </>
  );
};
NotFound.getLayout = getAreaLayout;
