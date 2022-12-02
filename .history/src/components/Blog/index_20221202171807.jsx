import React from "react";
import Image from "next/image";
import {
  TopImgWrapper,
  Header,
  Title,
  Description,
  Article,
  LeadSentence,
} from "./style";
import LocationPoint from "src/components/elements/LocationPoint";
import Signature from "src/components/elements/Signature";
import Banner from "src/components/Banner";
export default function Blog({ blog }) {
  const imgUrl = blog.main_img.url;
  const areaList = blog.areas;
  const title = blog.title;
  const description = blog.description;
  const publishedUtcDate = blog.publishedAt;
  return (
    <Article>
      <TopImgWrapper>
        <Image
          src={imgUrl}
          alt={"トップ画像"}
          layout="fill"
          sizes="(min-width:640px) 50vw"
          priority
        />
      </TopImgWrapper>
      <Header>
        <LocationPoint areaList={areaList} />
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Signature publishedUtcDate={publishedUtcDate} />
      </Header>
      <Banner />
      <LeadSentence>{description}</LeadSentence>
      <TocWrapper>
        <h2>Contents</h2>
        <h3>台湾・高雄の定番観光スポットランキングTOP10</h3>
        <li>
          1位
          蓮池潭・龍虎塔（れんちたん・りゅうことう／ロンフーター・リェンチータン）
        </li>
        <li>2位 愛河（あいが／アイホー）</li>
        <li>3位美麗島駅（びれいとうえき／メイリーダオ</li>
        <li>4位 旗津半島（きしんはんとう／チージンバンダオヂャン）</li>
        <li>5位 駁二芸術特区（The Pier-2 Art Center）</li>
        <li>6位 高雄85ビル（85 Sky Tower）</li>
        <li>7位 西子湾（せいしわん／シーヅーワン）</li>
        <li>8位 澄清湖（ちょうせいこ／チョンチンフー）</li>
        <li>9位 打狗英国領事館（だくえいこくりょうじかんぶんかえんく）</li>
        <li>10位 三鳳宮（さんほうきゅう）</li>
      </TocWrapper>
      {/* {areaList.map((_area) => {
          return <li key={_area.id}>{_area.name}</li>;
        })}
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`,
          }}
        ></div> */}
    </Article>
  );
}