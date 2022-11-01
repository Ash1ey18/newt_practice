import React from "react";
import Image from "next/image";


export default function Header() {
    return (
        <div>
            <Image
             src="public/img/newtlogo1.png"
             alt="newt"
             width={140}
             height={27}
             />
        </div>
    );
};