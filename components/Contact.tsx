import React from 'react'
import { motion } from 'framer-motion';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
    name: string;
    email: string;
    subject: string;
    message: string;

};

type Props = {}

const Contact = ({}: Props) => {
    const { register, handleSubmit } = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = formData => {
        window.location.href = `mailto:neerajgodiyal250@gmail?subject=${formData.subject}&body=Hi , my name is ${formData.name} and my email is ${formData.email}. ${formData.message}`;
    };


    return (
        <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-3xl'>
                Contact
            </h3>
            <div className='flex flex-col space-y-10'>
                <h4 className='text-2xl font-semibold text-center'>
                    Heyyy. {" "}
                    <span className='decoration-[#F7AB0A]/50 underline'>Lets Talk</span>
                </h4>
                <div className='space-y-10'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-bounce' />
                        <p className='text-1xl'>
                            +1 (647) 555-5555
                        </p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-bounce' />
                        <p className='text-1xl'>
                            neerajgodiyal250@gmail.com
                        </p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-bounce' />
                        <p className='text-1xl'>
                            THDC colony, Dehradun, Uttarakhand, India
                        </p>
                    </div>
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='flex flex-col space-y-2  mx-auto  '>
                    <div className='flex space-x-2 '>
                        <input {...register('name')}
                            placeholder='Name'
                            className='contactInput ' type="text" />
                        <input {...register('email')}
                            placeholder='Email'
                            className='contactInput ' type='email' />
                    </div>
                    <input {...register('subject')}
                        placeholder='Subject'
                        className='contactInput '
                        type='text' />
                    <textarea {...register('message')}
                        placeholder='Message'
                        className='contactInput caret-pink-500' />
                    <button
                        type='submit'
                        className='bg-[#F7AB0A] py-5 px-10  rounded-md text-black font-bold text-lg ' >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact