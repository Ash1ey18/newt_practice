import React from "react";
import Image from "next/image";
import { Footer, SnsListdiv } from "./style";

export default function Footer() {
  return (
    <Footer>
      <div>
        <h2>NEWTについて</h2>
        <ul>
          <li>NEWTとは</li>
          <li>NEWT Brand</li>
        </ul>
      </div>
      <div>
        <h2>NEWTについて</h2>
        <ul>
          <li>NEWTとは</li>
          <li>NEWT Brand</li>
        </ul>
      </div>
      <div>
        <h2>NEWTについて</h2>
        <ul>
          <li>NEWTとは</li>
          <li>NEWT Brand</li>
        </ul>
      </div>
      <div>
        <h2>NEWTについて</h2>
        <ul>
          <li>NEWTとは</li>
          <li>NEWT Brand</li>
        </ul>
      </div>
      <SnsListdiv>
        <div className="imgwrapper">
          <Image
            src="/img/twitterlogo2.svg"
            alt="twitterIcon"
            width={40}
            height={40}
          />
        </div>
        <div className="imgwrapper">
          <Image
            src="/img/instagramlogo2.svg"
            alt="instagramIcon"
            width={40}
            height={40}
          />
        </div>
        <div className="imgwrapper">
          <Image
            src="/img/tiktoklogo2.svg"
            alt="tiktokIcon"
            width={40}
            height={40}
          />
        </div>
        <div className="imgwrapper">
          <Image
            src="/img/linelogo2.svg"
            alt="lineIcon"
            width={40}
            height={40}
          />
        </div>
        <div className="imgwrapper">
          <Image
            src="/img/youtubelogo2.svg"
            alt="youtubeIcon"
            width={40}
            height={40}
          />
        </div>
      </SnsListdiv>
    </Footer>
  );
}
