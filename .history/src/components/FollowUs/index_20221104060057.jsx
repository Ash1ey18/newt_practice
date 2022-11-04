/* eslint-disable jsx-a11y/anchor-is-valid */
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
          <a>
            <Image
              src="/img/linelogo.svg"
              alt="Lineリンク"
              width={40}
              height={40}
            />
          </a>
        </Link>
        <Link href="https://twitter.com/newt_travel?openExternalBrowser=1">
          <a>
            <Image
              src="/img/twitterlogo.svg"
              alt="Twitterリンク"
              width={40}
              height={40}
            />
          </a>
        </Link>
        <Link href="https://www.instagram.com/newt.travel/?hl=ja&openExternalBrowser=1">
          <a>
            <Image
              src="/img/instagramlogo.svg"
              alt="instagramリンク"
              width={40}
              height={40}
            />
          </a>
        </Link>
        <Link href="https://www.tiktok.com/@newt_travel?openExternalBrowser=1">
          <a>
            <Image
              src="/img/tiktoklogo.svg"
              alt="TikTokリンク"
              width={40}
              height={40}
            />
          </a>
        </Link>
        <Link href="https://www.youtube.com/channel/UCdM6a4_8TQCR03ShAGU8CyQ">
          <a>
            <Image
              src="/img/youtubelogo.svg"
              alt="Youtubeリンク"
              width={40}
              height={40}
            />
          </a>
        </Link>
      </div>
    </aside>
  );
}
