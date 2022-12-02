import React from "react";
import Image from "next/image";
import ArticleDate from "src/components/elements/ArticleDate";
import { SignatureWrapper, Author } from "./style";
export default function Signature({}) {
  return (
    <SignatureWrapper>
      <Image src="/img/img03.svg" alt="newt icon" width={32} height={32} />
      <ArticleDate isTop date={publishedDate} />
      <Author>NEWT編集部</Author>
    </SignatureWrapper>
  );
}
