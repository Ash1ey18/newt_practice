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
      <div>
        Contents 台湾・高雄の定番観光スポットランキングTOP10 1位
        蓮池潭・龍虎塔（れんちたん・りゅうことう／ロンフーター・リェンチータン）
        2位 愛河（あいが／アイホー） 3位 美麗島駅（びれいとうえき／メイリーダオ
        ヂャン） 4位 旗津半島（きしんはんとう／チージンバンダオ） 5位
        駁二芸術特区（The Pier-2 Art Center） 6位 高雄85ビル（85 Sky Tower） 7位
        西子湾（せいしわん／シーヅーワン） 8位
        澄清湖（ちょうせいこ／チョンチンフー） 9位
        打狗英国領事館（だくえいこくりょうじかんぶんかえんく） 10位
        三鳳宮（さんほうきゅう） 台湾・高雄郊外＆穴場スポットランキングTOP6 1位
        田寮月世界（ティェンリィァオユエシージェ） 2位
        墾丁白沙湾（こんてい／ケンティンバイシャーワン） 3位
        仏光山（ぶっこうざん） 4位 高雄市立図書館（Kaohsiung Public Library）
        5位 衛武營彩繪村（Weiwuying Street Art Village） 6位
        玫瑰聖母聖殿主教座堂（まいかいせいぼせいでんしきょうざどう）
        台湾・高雄の観光におすすめ！グルメスポット
        六合夜市（ろくごうよいち／リウフェアイェーシー）
        瑞豊夜市（ずいほうよいち／ルイフォンイエシー）
        台湾・高雄観光を満喫できる！1泊2日モデルコース
        高雄を満喫する1泊2日のモデルコース
        台湾・高雄観光の見どころ満載の観光地を満喫しよう！
      </div>
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
