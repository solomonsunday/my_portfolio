import Link from 'next/link'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { route } from 'next/dist/server/router';


const NavItem: FunctionComponent<{ activeItem: string, setActiveItem: Function, name: string, route: string }> = ({ activeItem, name, route, setActiveItem }) => {
    return (
        activeItem !== name ? (<Link href={route}>
            <a> <span className="cursor-pointer  hover:text-green" onClick={() => setActiveItem(name)}>{name}</span></a>
        </Link>
        ) : null
    )
}

const Navbar = () => {
    const [activeItem, setActiveItem] = useState<string>('');

    const { pathname } = useRouter();


    useEffect(() => {
        if (pathname === '/')
            setActiveItem('About')
        if (pathname === '/projects')
            setActiveItem('Projects')
        if (pathname === '/resume')
            setActiveItem('Resume')

    }, [])

    return (
        <div className='flex justify-between px-5 py-3 my-3' >
            <span className='text-xl font-bold border-b-4 text-green border-green md;text-2xl'>{activeItem}</span>
            <div className='flex space-x-5 text-lg '>

                <NavItem activeItem={activeItem} setActiveItem={setActiveItem}
                    name="About" route='/' />
                <NavItem activeItem={activeItem} setActiveItem={setActiveItem}
                    name="Projects" route='/projects' />
                <NavItem activeItem={activeItem} setActiveItem={setActiveItem}
                    name="Resume" route='/resume' />

            </div>
        </div>
    )
}

export default Navbar