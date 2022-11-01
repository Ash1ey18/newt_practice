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
          layout="fill"
          objectFit="contain"
          width={200}
          height={300}
        />
      </ImageContainer>
      <p>HHHHHHHHHHHHHH</p>
    </RcmContainer>
  );
}
