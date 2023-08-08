"use client"
import Image from "next/image";
import { useState } from "react";
import LinkedinS from "@/public/icons/social/linkedin.svg"
import Linkedin from "@/public/icons/social/linkedin.json";
import TwitterS from "@/public/icons/social/twitter.svg";
import Twitter from "@/public/icons/social/twitter.json";
import WhatS from "@/public/icons/social/whatsapp.svg";
import What from "@/public/icons/social/whatsapp.json";
import { Player } from "@lottiefiles/react-lottie-player";

const Footer = () => {
  const [isLiHover, setIsLiHover] = useState(false);
  const [isTwHover, setIsTwHover] = useState(false);
  const [isWpHover, setIsWpHover] = useState(false);

  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content">
      <div className="grid grid-flow-col gap-4">
        <a className="link link-hover">About</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Projects</a>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.linkedin.com/in/aguscabralr/" target="_blank" onMouseMove={() => setIsLiHover(true)} onMouseOut={() => setIsLiHover(false)}>
            {isLiHover ? (
              <Player autoplay keepLastFrame src={Linkedin} className="w-10 h-10" />
            ) : (
              <Image src={LinkedinS} alt="linkedin" className="w-10 h-10" />
            )}</a>
          <a href="https://www.twitter.com/aguscabralr/" target="_blank" onMouseMove={() => setIsTwHover(true)} onMouseOut={() => setIsTwHover(false)}>
            {isTwHover ? (
              <Player autoplay keepLastFrame src={Twitter} className="w-10 h-10" />
            ) : (
              <Image src={TwitterS} alt="twitter" className="w-10 h-10" />
            )}</a>
          <a href="https://www.twitter.com/aguscabralr/" target="_blank" onMouseMove={() => setIsWpHover(true)} onMouseOut={() => setIsWpHover(false)}>
            {isWpHover ? (
              <Player autoplay keepLastFrame src={What} className="w-10 h-10" />
            ) : (
              <Image src={WhatS} alt="what" className="w-10 h-10" />
            )}</a>
        </div>
      </div>
      <div>
        <p>Copyright © 2023 - aguscabralr</p>
      </div>
    </footer>
  )
};

export default Footer;