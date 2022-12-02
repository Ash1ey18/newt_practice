import React from "react";
import Image from "next/image";
import { ImgWrapper } from "./style";
import LocationPoint from "../elements/LocationPoint";
export default function Blog({ blog }) {
  const areaList = blog.areas;
  console.log(blog);

  const imgUrl = blog.main_img.url;
  return (
    <article>
      <ImgWrapper>
        <Image
          src={imgUrl}
          alt={"トップ画像"}
          layout="fill"
          sizes="(min-width:640px) 50vw"
          priority
        />
      </ImgWrapper>
      <LocationPoint areaList={areaList} />
      {/* {areaList.map((_area) => {
          return <li key={_area.id}>{_area.name}</li>;
        })}
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`,
          }}
        ></div> */}
    </article>
  );
}
