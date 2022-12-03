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
  const options = {
    replace: (domNode) => {
      if (domNode.name === "img") {
        return (
          <ImgWrapper>
            <Image
              loading="lazy"
              src={domNode.attribs.src}
              alt={domNode.attribs.alt}
              layout="fill"
              objectFit="contain"
            />
          </ImgWrapper>
        );
      }
    },
  };
  const blogContents = parse(blog.body, options);

  return (
    <Article>
      <ImgWrapper>
        <Image
          src={blog.main_img.url}
          alt={"トップ画像"}
          layout="fill"
          sizes="(min-width:640px) 50vw"
          priority
        />
      </ImgWrapper>
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
