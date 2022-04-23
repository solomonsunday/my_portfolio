import React, { FunctionComponent } from 'react'
import { Category } from '../type'

export const NavItem: FunctionComponent<{ value: Category | "all" }> = ({ value }) => {
    return (
        <li className='capitalize cursor-pointer hover:text-green'>{value}</li>
    )
}



const ProjectNavbar = () => {
    return (
        <div className='flex px-3 py-2 space-x-3 overflow-x-auto list-none '>
            <NavItem value="all" />
            <NavItem value="react" />
            <NavItem value="node" />
            <NavItem value="redux" />
            <NavItem value="bootstrap" />
        </div>
    )
}

export default ProjectNavbar