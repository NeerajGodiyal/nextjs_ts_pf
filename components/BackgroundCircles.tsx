import React from 'react'
import { motion } from 'framer-motion';

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
        initial={{
            opacity: 0,
        }}
        animate={{
            scale: [1, 2, 1 , 3 , 1],
            opacity: [1, 0.5, 1, 0.5, 1],
            borderRadius: ['20%', '50%', '20%', '50%', '20%'],
        }}
        transition={{
            duration: 2.5,
            
        }}
        

        className='relative flex justify-center items-center' >
        <div className='absolute border border-[#ee7239] rounded-full h-[200px] w-[200px] mt-52 animate-ping' />
        <div className='rounded-full border border-[#ee8686] h-[300px] w-[300px] absolute mt-52 animate-spin' />
        <div className='rounded-full border border-[#8700ff] h-[500px] w-[500px] absolute mt-52 animate-ping' />
        <div className='rounded-full border border-[#e90808] opacity-0 h-[650px] w-[650px] absolute mt-52 animate-pulse' />
        <div className='rounded-full border border-[#333333] h-[800px] w-[800px] absolute mt-52 animate-pulse' />
        
    </motion.div>
  )
}

export default BackgroundCircles