import React from "react";
import Image from "next/image";

import {ImgContainer} from "./style.js";



export default function Header() {
    return (
        <ImgContainer>
            <Image
             src="/img/newtlogo1.png"
             alt="newt"
             width={140}
             height={27}
             />   
        </ImgContainer>
    );
};
