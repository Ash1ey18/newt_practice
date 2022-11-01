import React from "react";
import Image from "next/image";


 const Header = () => {
    return (
        <div>
            <Image
             src="/public/img/img30.png"
             alt="newt"
             width={140}
             height={27}
             priority
             />
             
        </div>
    );
};

export default Header;