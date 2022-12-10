/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import React, { FC } from "react";
import ArticleList from "src/components/elements/ArticleList";
import SectionWraper from "src/components/elements/SectionWrapper";
import { LatestArticles_Props } from "src/types/article-type";

import { BtnDiv } from "./style";
const LatestArticles: FC<LatestArticles_Props> = ({ latestBlog }) => {
  return (
    <SectionWraper where="latestArti">
      <h2>最新の記事</h2>
      <ArticleList blogs={latestBlog} />
      <Link href="/all">
        <a>
          <BtnDiv>
            <p>もっとみる</p>
          </BtnDiv>
        </a>
      </Link>
    </SectionWraper>
  );
};

export default LatestArticles;
