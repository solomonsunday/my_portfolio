import Image from 'next/image'
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillYoutube, } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { GiTie } from 'react-icons/gi';




const Sidebar = () => {
    return (
        <div>
            <Image src="/static/mesh-gradient.Png"
                alt="user_averter" width="180" height="200"
                className='w-32 h-32 mx-auto rounded-full'
            />
            <h3 className='my-4 text-3xl font-medium tracking-wider cursor-pointer font-kaushan'><span className='text-green'>Solomon </span> Sunday</h3>
            <p className='px-2 py-1 my-3 bg-gray-200 rounded-full cursor-pointer'>Web Develper</p>

            <a className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full'
                href=''
                download='name'
            >
                <GiTie className='w-6 h-6' />
                Download Resume
            </a>
            {/* Social Icon */}
            <div className='flex justify-around w-9/12 my-5 text-green-500 md:w-full mx-auto'>
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
            <div className='py-4 my-5 bg-gray-200'
                style={{ marginLeft: "-1rem", marginRight: "-1rem" }}>
                <div className='flex items-center justify-center space-x-2'>
                    <GoLocation />
                    <span>Lagos, Nigeria</span>
                </div>
                <p className='my-2'>schinoyerem007@gmail.com</p>
                <p className='my-2'>08065907281</p>
            </div>
            {/* Email btn */}
            <button className='bg-gradient-to-r from-green-400 to-blue-400 w-8/12 rounded-full py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none'
                onClick={() => window.open('mailto:schinoyerem007@gmail.com')}>Email Me</button>
            <button className='bg-gradient-to-r from-green-400 to-blue-400 w-8/12 rounded-full py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400'>Toggle Theme</button>
        </div>
    )
}

export default Sidebar