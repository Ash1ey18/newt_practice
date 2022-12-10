import Image from "next/image";
import React, { FC } from "react";
import ArticleDate from "src/components/elements/ArticleDate";
import { Signature_Props } from "src/types/article-type";

import { Author, SignatureWrapper } from "./style";
const Signature: FC<Signature_Props> = ({ publishedUtcDate }) => {
  return (
    <SignatureWrapper>
      <Image src="/img/img03.svg" alt="newt icon" width={32} height={32} />
      <ArticleDate utcDate={publishedUtcDate} />
      <Author>NEWT編集部</Author>
    </SignatureWrapper>
  );
};

export default Signature;
