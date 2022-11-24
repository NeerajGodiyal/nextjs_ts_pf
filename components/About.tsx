import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

const About = (props: Props) => {
  return (
    <motion.div
        initial={{
            opacity: 0,
        }}
        whileInView={{
            opacity: 1,
        }}
        transition={{
            duration: 1.5,
        }}

        className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-600 text-2xl'>
        About
        </h3>
        <motion.img 
        initial={{
            x: -200,
            opacity: 0,

        }}
        transition={{
            duration: 1.5,
        }}
        whileInView={{
            opacity : 1 ,
            x:0,
        }}
        src='https://media.discordapp.net/attachments/952545177896108064/1043881525789343784/7636ABEE-B1DA-4812-804A-32EA097F27D6.jpg?width=507&height=676'
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
        
        />
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>
                Here's some things {" "}
                <span className='underline decoration-[#ee7239]/50'>About me</span>{" "}

            </h4>
            <p className='text-base'>
                khushi lover
            </p>
        </div>
    </motion.div>
  )
}

export default About