import { Cursor , useTypewriter } from "react-simple-typewriter";
import React from 'react'
import  BackgroundCircles  from "./BackgroundCircles";
import Link from 'next/link';

type Props = {}

function Hero({}: Props) {
    const [text , count ] = useTypewriter({
        words: [
            "heyy , I'm Ayam Dobhal",
            "I'm a Backend Developer",
            "Responsible, working adult by day, n shameless lush by night.",
            "oops...",
        ],
        loop: true,
        delaySpeed: 2000,
    });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden" >
        <BackgroundCircles />

        <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover " 
        src = "https://images-ext-1.discordapp.net/external/fE1-bRb57o929FKa_c0hW3Q1jGVHdpKbzPuGFyJvkk0/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/379269487532310530/ba481ff2feb069224898c191a6a3f5be.png" 
        alt = "" 
        />
        <div className="z-20">
            <h2  className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]" >
                Blockchain Developer 

            </h2>
         <h1 className="text-5xl lg:text-6xl font-semibold px-10" >
            <span className="mr-3">{text}</span>
            <Cursor cursorColor="#F7AB0A"/>
         </h1>
         <div className="pt-12">
            <Link href="#about">
            <button className="heroButton">About</button> 
            </Link>
            <Link href="#experience">
            <button className="heroButton">Experience</button> 
            </Link>
            <Link href="#skills">
            <button className="heroButton">Skills</button> 
            </Link>
            <Link href="#projects">
            <button className="heroButton">Projects</button> 
            </Link>
            <Link href="#contact">
            <button className="heroButton">Contact</button> 
            </Link>

         </div>
        </div>
    </div>
  );
}

export default Hero