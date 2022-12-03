import parse from "html-react-parser";
import Image from "next/image";
import React from "react";
import Banner from "src/components/Banner";
import LocationPoint from "src/components/elements/LocationPoint";
import Signature from "src/components/elements/Signature";
import Toc from "src/components/Toc";

import {
  Article,
  BlogContents,
  ContentsWrapper,
  Description,
  Header,
  ImgWrapper,
  LeadSentence,
  Title,
} from "./style";

export default function Blog({ blog }) {
  const imgUrl = blog.main_img.url;
  const areaList = blog.areas;
  const title = blog.title;
  const description = blog.description;
  const publishedUtcDate = blog.publishedAt;
  const blogTest = blog.body.replace("<img", "<div><img*><div>");
  console.log(blogTest);
  const options = {
    replace: (domNode) => {
      if (domNode.name === "img") {
        return (
          <>
            <Image
              loading="lazy"
              src={domNode.attribs.src}
              alt={domNode.attribs.alt}
              layout="fill"
              objectFit="contain"
            />
          </>
        );
      }
    },
  };
  const blogContents = parse(blogTest, options);

  return (
    <Article>
      <ImgWrapper>
        <Image
          src={imgUrl}
          alt={"トップ画像"}
          layout="fill"
          sizes="(min-width:640px) 50vw"
          priority
        />
      </ImgWrapper>
      <ContentsWrapper>
        <Header>
          <LocationPoint areaList={areaList} />
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Signature publishedUtcDate={publishedUtcDate} />
        </Header>
        <Banner />
        <LeadSentence>{description}</LeadSentence>
        <Toc />
        <BlogContents>{blogContents}</BlogContents>
      </ContentsWrapper>
    </Article>
  );
}
