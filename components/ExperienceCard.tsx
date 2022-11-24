import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden'>

        <motion.img
        initial={{
            y: -100,
            opacity: 0,
        }}
        transition={{
            duration: 1.5,
        }}
        whileInView={{
            y: 0,
            opacity: 1,
        }}
        className = "w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src = "https://images-ext-1.discordapp.net/external/53OmDBNSp417IaEm1Ot_hV8oWSyDT2hFvToKTmzCecE/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/369019904910950401/b32a51b1ef53984f037445291219639b.png"
        alt = ''
 
        />
        
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>CEO of Indian Truckers Association</h4>
            <p className='font-bold text-2xl mt-1'>2021 - Present</p>
            <div className='flex space-x-2 my-2'>
            <img
            className='h-10 w-10 rounded-full object-cover object-center'
            src='https://images-ext-1.discordapp.net/external/53OmDBNSp417IaEm1Ot_hV8oWSyDT2hFvToKTmzCecE/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/369019904910950401/b32a51b1ef53984f037445291219639b.png'
            alt = ''
            
            />
            <img
            className='h-10 w-10 rounded-full object-cover object-center'
            src='https://images-ext-1.discordapp.net/external/53OmDBNSp417IaEm1Ot_hV8oWSyDT2hFvToKTmzCecE/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/369019904910950401/b32a51b1ef53984f037445291219639b.png'
            alt = ''
            
            />
            <img
            className='h-10 w-10 rounded-full object-cover object-center'
            src='https://images-ext-1.discordapp.net/external/53OmDBNSp417IaEm1Ot_hV8oWSyDT2hFvToKTmzCecE/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/369019904910950401/b32a51b1ef53984f037445291219639b.png'
            alt = ''
            
            />

            </div>
            <p className='uppercase py-5 text-gray-300'>
                Prof driver (Euro Truck Simulator) 
            </p>

            <ul className='list-disc space-y-4 ml-5 text-lg '>
                <li>Truck driver</li>
                <li>Truck driver</li>
                <li>Truck driver</li>
                <li>Truck driver</li>
                <li>Truck driver</li>

            </ul>
        </div>

    </article>
  )
}

export default ExperienceCard