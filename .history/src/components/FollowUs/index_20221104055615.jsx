import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function FollowUs() {
  return (
    <aside>
      <h1>Follow Us</h1>
      <p>
        最新の渡航ニュースやおすすめスポットなど、海外旅行の情報をお届けします✈️
      </p>
      <div>
        <Link href="https://page.line.me/847pjqcp?openQrModal=true">
          <Image
            src="/img/linelogo.svg"
            alt="Lineリンク"
            width={40}
            height={40}
          />
        </Link>
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
