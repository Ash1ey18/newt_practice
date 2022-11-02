import React from "react";
import Image from "next/image";

import SectionWrapper from "src/components/SectionWrapper";

export default function FeatureAreass() {
  return (
    <SectionWrapper>
      <h2>注目のエリア</h2>
      <ul>
        <li>
          <Image src="/img/img15.jpg" alt="Hawaii" width={100} height={100} />
        </li>
      </ul>
    </SectionWrapper>
  );
}
