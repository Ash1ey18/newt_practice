import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  RcmContainer,
  ImageContainer,
  TopArticleWraper,
  ArticleTitle,
  LocationKwdWraper,
  ArticleInfo,
  IconImage,
  PubTime,
  Author,
} from "./styled.js";

export default function Reccomend() {
  return (
    <RcmContainer>
      <ImageContainer>
        <Image
          src="/img/img02.jpg"
          alt="there are many ships on the river."
          layout="fixed"
          priority
        />
      </ImageContainer>
      <TopArticleWraper>
        <LocationKwdWraper>香港 → 台湾</LocationKwdWraper>
        <ArticleTitle>
          <Link href="/">
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
