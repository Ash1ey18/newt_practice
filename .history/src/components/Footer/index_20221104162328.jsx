import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FooterWrapper,
  Section,
  SectionTitleh2,
  SectionListul,
  Listli,
  SnsListdiv,
} from "./style";

export default function Footer() {
  return (
    <FooterWrapper>
      <nav>
        <Section>
          <SectionTitleh2>NEWTについて</SectionTitleh2>
          <SectionListul>
            <Listli>
              <Link src="">NEWTとは</Link>
            </Listli>
            <Listli>
              <Link src="">NEWT Brand</Link>
            </Listli>
          </SectionListul>
        </Section>
      </nav>
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
    </FooterWrapper>
  );
}
