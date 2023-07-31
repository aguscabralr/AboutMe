"use client";
import Link from "next/link";
import { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import About from "../public/icons/about.json";

export const AboutLink = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Link href={"/"} onMouseMove={() => setIsHover(true)} onMouseOut={() => setIsHover(false)} className="w-[50px] h-10 flex-center" >
      {isHover ? (
        <Player
          autoplay
          keepLastFrame={true}
          speed={1.5}
          src={About}
          style={{ width: '30px', height: '30px' }}
        />
      ) : "About"}
    </Link >
  );
};
