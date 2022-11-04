import React from "react";
import Image from "next/image";

export default function FollowUs() {
  return (
    <aside>
      <h1>Follow Us</h1>
      <p>
        最新の渡航ニュースやおすすめスポットなど、海外旅行の情報をお届けします✈️
      </p>
      <div>
        <Image
          src="/img/linelogo.svg"
          alt="Lineリンク"
          width={40}
          height={40}
        />
        <Image
          src="/img/twitterlogo.svg"
          alt="Twitterリンク"
          width={40}
          height={40}
        />
        <Image
          src="/img/instagramlogo.svg"
          alt="instagramリンク"
          width={40}
          height={40}
        />
        <Image
          src="/img/tiktoklogo.svg"
          alt="TikTokリンク"
          width={40}
          height={40}
        />
        <Image
          src="/img/youtubelogo.svg"
          alt="Youtubeリンク"
          width={40}
          height={40}
        />
      </div>
    </aside>
  );
}
