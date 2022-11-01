import React from "react";
import Image from "next/image";
import {RcmContainer} from "./styled.jsx";


export default function Reccomend() {
    return (
        <RcmContainer>
            <Image 
            src="/img/img02.jpg"
            alt="there are many ships on the river."
            width={'100'}
            height={'60'}
            />
        </RcmContainer>
    );
};

