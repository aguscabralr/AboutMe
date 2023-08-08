"use client";
import Link from "next/link";
import { useState } from "react";
import { Player } from '@lottiefiles/react-lottie-player';
import Home from "@/public/icons/home/home.json";

export const HomeLink = () => {
	const [isHover, setIsHover] = useState(false);

	return (
		<Link href={"/"} onMouseMove={() => setIsHover(true)} onMouseOut={() => setIsHover(false)} className="w-[50px] h-10 flex-center" >
			{isHover ? (
				<Player
					autoplay
					keepLastFrame={true}
					src={Home}
					style={{ width: '75px', height: '75px' }}
				/>
			) : "Home"}
		</Link >
	);
};
