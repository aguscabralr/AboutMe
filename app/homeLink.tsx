"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const HomeLink = () => {
	const [isHover, setIsHover] = useState(false);

	return (
		<Link href={"/"} onMouseMove={() => setIsHover(true)} onMouseOut={() => setIsHover(false)} className="w-[50px] text-center duration-500" >
			{isHover ? <HomeOutlinedIcon /> : "Home"}
		</Link >
	);
};

export default HomeLink;
