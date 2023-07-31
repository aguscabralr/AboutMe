import React from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeSwitch from "./themeSwitch";
import HomeLink from "./homeLink";

const Landing = () => {

  return (
    <main className="w-full h-screen bg-[--bgd]">
      <nav className="navbar h-[10%] bg-[--pri] sticky top-0">
        <section className="navbar-start">
          <span>Agustin Cabral</span>
        </section>
        <section className="navbar-end flex-row justify-around items-center">
          <HomeLink />
          <Link href={"/"} className="text-center">About</Link>
          <Link href={"/"} className="text-center">Contact</Link>
          <ThemeSwitch />
        </section>
      </nav>
      <section className="w-full h-[85%]">
        <article className="w-full h-full flex-col justify-around items-center border">
          <div className="w-64 h-80 relative">
            <Image src={"/aguscabral.jpg"} alt="photo" fill={true} className="absolute object-cover rounded-box" />
          </div>
          <div>
            <h1 className="text-5xl">Hola! Soy Agustin</h1>
            <h2 className="">I'm a <span className="font-bold">FULLSTACK DEVELOPER</span></h2>
          </div>
        </article>
      </section>
      <footer className="w-full h-[5%] border-t-2">

      </footer>
    </main>
  )
};

export default Landing;
