import Image from "next/image";
import React from "react";
import ArticleDate from "src/components/elements/ArticleDate";

import { Author,SignatureWrapper } from "./style";
export default function Signature({ publishedUtcDate }) {
  return (
    <SignatureWrapper>
      <Image src="/img/img03.svg" alt="newt icon" width={32} height={32} />
      <ArticleDate utcDate={publishedUtcDate} />
      <Author>NEWT編集部</Author>
    </SignatureWrapper>
  );
}
