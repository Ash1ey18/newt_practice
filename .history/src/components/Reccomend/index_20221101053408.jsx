import React from "react";
import Image from "next/image";
import Link from "next/link";

import { RcmContainer, ImageContainer, TopArticleWraper } from "./styled.js";

export default function Reccomend() {
  return (
    <RcmContainer>
      <ImageContainer>
        <Image
          src="/img/img02.jpg"
          alt="there are many ships on the river."
          layout="fill"
          objectFit="contain"
        />
      </ImageContainer>
      <TopArticleWraper>
        <div className="mappoint"></div>
        <h1>
          <Link href="/">
            台湾・高雄の観光スポットは？人気から穴場まで最新ランキング
          </Link>
        </h1>
        <div>
          <Image src="/img/img03.svg" alt="newt icon" width={32} height={32} />
          <time dateTime="">2022年9月27日</time>
          <p>NEWT編集部</p>
        </div>
      </TopArticleWraper>
    </RcmContainer>
  );
}
