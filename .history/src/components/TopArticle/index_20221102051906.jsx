import React from "react";
import Link from "next/link";
import {
  RcmContainer,
  TopArticleWraper,
  ArticleTitle,
  LocationKwdWraper,
  ArticleInfo,
  IconImage,
  PubTime,
  Author,
} from "./styled.js";
import ArticleImg from "src/components/ArticleImg";

export default function Reccomend() {
  return (
    <RcmContainer>
      <ArticleImg src="/img/img02.jpg" alt="ships" />
      <TopArticleWraper>
        <LocationKwdWraper>香港 → 台湾</LocationKwdWraper>
        <ArticleTitle>
          <Link href="#">
            台湾・高雄の観光スポットは？人気から穴場まで最新ランキング
          </Link>
        </ArticleTitle>
        <ArticleInfo>
          <IconImage
            src="/img/img03.svg"
            alt="newt icon"
            width={32}
            height={32}
          />
          <PubTime dateTime="">2022年9月27日</PubTime>
          <Author>NEWT編集部</Author>
        </ArticleInfo>
      </TopArticleWraper>
    </RcmContainer>
  );
}
