"use client"
import Image from "next/image";

const About = () => {
  return (
    <article className="w-full h-full flex-col sm:flex-row justify-around items-center">
      <div className="w-64 h-80 relative">
        <Image src={"/aguscabral.jpg"} alt="photo" fill={true} className="absolute object-cover rounded-box foto" />
      </div>
      <div>
        <h1 className="text-5xl">Hola! Soy Agustin</h1>
        <h2 className="">I'm a <span className="font-bold">FULLSTACK DEVELOPER</span></h2>
      </div>
    </article>
  )
};

export default About;