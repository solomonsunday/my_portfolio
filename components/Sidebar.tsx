import Image from 'next/image'
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillYoutube, } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { GiTie } from 'react-icons/gi';


import { useTheme } from 'next-themes'

const Sidebar = () => {

    const { theme, setTheme } = useTheme();

    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }
    return (
        <div>
            <Image src="/static/solo.jpg"
                alt="user_averter" width="180" height="200"
                className='w-32 h-32 mx-auto border rounded-full'
            />
            <h3 className='my-4 text-3xl font-medium tracking-wider font-kaushan'><span className='text-green'>Solomon </span> Sunday</h3>
            <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500'>
                Web Develper
            </p>

            <a className='flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500'
                href='/static/React-FrontEnd-Dev.pdf'
                download='Solomon Sunday Resume.pdf'
            >
                <GiTie className='w-6 h-6' />
                Download Resume
            </a>
            {/* Social Icon */}
            <div className='flex justify-around w-9/12 mx-auto my-5 text-green-500 md:w-full'>
                <a href=''>
                    <AiFillGithub className='w-8 h-8 cursor-pointer ' />
                </a>
                <a href=''>
                    <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
                </a>
                <a href=''>
                    <AiFillYoutube className='w-8 h-8 cursor-pointer' />
                </a>
            </div>
            {/* Address */}
            <div className='py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500'
                style={{ marginLeft: "-1rem", marginRight: "-1rem" }}>
                <div className='flex items-center justify-center space-x-2'>
                    <GoLocation />
                    <span>Lagos, Nigeria</span>
                </div>
                <p className='my-2'>schinoyerem007@gmail.com</p>
                <p className='my-2'>08065907281</p>
            </div>
            {/* Email btn */}
            <button
                className='w-8/12 px-5 py-2 my-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none'
                onClick={() => window.open('mailto:schinoyerem007@gmail.com')}>Email Me</button>
            <button
                onClick={changeTheme}
                className='w-8/12 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-500 '>Toggle Theme</button>
        </div>
    )
}

export default Sidebar