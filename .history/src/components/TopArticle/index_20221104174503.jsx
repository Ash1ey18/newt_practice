/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  RcmContainer,
  TopArticleWraper,
  ArticleTitle,
  ArticleInfo,
  PubTime,
  Author,
  Location,
} from "./styled.js";
import ArticleImg from "src/components/ArticleImg";

export default function Reccomend() {
  return (
    <RcmContainer>
      <ArticleImg srcNo="02" alt="ships" priority />
      <TopArticleWraper>
        <Location>
          <svg
            src="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              fill="#00CD67"
              d="M7 1.167A4.08 4.08 0 002.917 5.25C2.917 8.313 7 12.833 7 12.833s4.083-4.52 4.083-7.583A4.08 4.08 0 007 1.167zm0 5.541a1.459 1.459 0 110-2.917 1.459 1.459 0 010 2.917z"
            ></path>
          </svg>

          <Link href="">
            <a>アジア</a>
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              fill="#00CD67"
              d="M5.833 3.5l-.822.822L7.682 7 5.011 9.678l.822.822 3.5-3.5-3.5-3.5z"
            ></path>
          </svg>
          <Link href="">
            <a>台湾</a>
          </Link>
        </Location>
        <ArticleTitle>
          <Link href="#">
            台湾・高雄の観光スポットは？人気から穴場まで最新ランキング
          </Link>
        </ArticleTitle>
        <ArticleInfo>
          <Image src="/img/img03.svg" alt="newt icon" width={32} height={32} />
          <PubTime dateTime="">2022年9月27日</PubTime>
          <Author>NEWT編集部</Author>
        </ArticleInfo>
      </TopArticleWraper>
    </RcmContainer>
  );
}
