import React from "react";
import Image from "next/image";
import { RcmContainer, ImageContainer } from "./styled.js";

export default function Reccomend() {
  return (
    <RcmContainer>
      <ImageContainer>
        <Image
          src="/img/img02.jpg"
          alt="there are many ships on the river."
          width={200}
          height={300}
          objectFit={"contain"}
        />
      </ImageContainer>
    </RcmContainer>
  );
}
