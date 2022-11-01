import React from "react";
import {ImgContainer} from "./style.jsx";



export default function Header() {
    return (
        <ImgContainer>
            <StyledImg
             src="/img/newtlogo1.png"
             alt="newt"
             width={140}
             height={27}
             />   
        </ImgContainer>
    );
};
