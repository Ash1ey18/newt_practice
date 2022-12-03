import parse from "html-react-parser";
import Image from "next/image";
import React from "react";
import Banner from "src/components/Banner";
import LocationPoint from "src/components/elements/LocationPoint";
import Signature from "src/components/elements/Signature";
import Toc from "src/components/elements/Toc";

import {
  Article,
  BlogContents,
  ContentsWrapper,
  Description,
  Header,
  ImgWrapper,
  LeadSentence,
  Title,
  TopImgWrapper,
} from "./style";
export default function Blog({ blog, toc }) {
  return (
    <Article>
      <TopImgWrapper>
        <Image
          src={blog.main_img.url}
          alt={"トップ画像"}
          layout="fill"
          sizes="(min-width:640px) 50vw"
          priority
        />
      </TopImgWrapper>
      <ContentsWrapper>
        <Header>
          <LocationPoint areaList={blog.areas} />
          <Title>{blog.title}</Title>
          <Description>{blog.description}</Description>
          <Signature publishedUtcDate={blog.publishedAt} />
        </Header>
        <Banner />
        <LeadSentence>{blog.description}</LeadSentence>
        <Toc toc={toc} />
        <BlogContents>{blogContents}</BlogContents>
      </ContentsWrapper>
    </Article>
  );
}
