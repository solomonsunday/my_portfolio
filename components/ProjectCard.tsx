import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { FunctionComponent, useState } from 'react'
import { AiFillProject, AiFillGithub } from 'react-icons/ai'
import { MdClose } from 'react-icons/md'
import { stagger, fadingUP } from '../animations'
import { IProject } from '../type'

const ProjectCard: FunctionComponent<{ project: IProject; showDetail: null | number; setShowDetail: (id: null | number) => void; }> = ({
    project: {
        name,
        image_path,
        category, deployed_url, description, github_url, key_techs,
        id,
    },
    showDetail,
    setShowDetail
}) => {

    return (
        <div>
            <Image src={image_path}
                width="300px"
                height="200px"
                layout='responsive'
                alt={name}
                className="corsur-pointer"
                onClick={() => setShowDetail(id)}
            />
            <p className='my-2 text-center'> {name}</p>
            {
                showDetail === id &&
                <div className='absolute top-0 left-0 z-10 grid w-full h-auto p-2 bg-gray-100 rounded-lg md:p-10 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100' >
                    <motion.div variants={stagger} initial="initial" animate="animate">
                        <motion.div variants={fadingUP}
                            className="border-4 border-gray-100"
                        >
                            <Image src={image_path}
                                alt={name}
                                width="300px"
                                height="200px"
                            />
                        </motion.div>
                        <motion.div variants={fadingUP} className='flex justify-center my-4 space-x-3 '>
                            <a href={github_url} className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200">
                                <AiFillGithub /> <span>Github</span>
                            </a>
                            <a href={deployed_url} className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200">
                                <AiFillProject /> <span>Project</span>
                            </a>
                        </motion.div>

                    </motion.div>

                    <motion.div variants={fadingUP}>
                        <h2 className='mb-3 text-xl font-medium md:text-2xl'>{name}</h2>
                        <h3 className='mb-3 text-xl font-medium'> {description}</h3>
                        <div className='flex flex-wrap mt-5 space-x-2 text-sm tracking-wide'>
                            {
                                key_techs.map((tech) => (
                                    <span key={tech} className="px-2 py-1 my-1 bg-gray-200 rounded-full dark:bg-dark-200">
                                        {tech}
                                    </span>
                                ))
                            }
                        </div>
                    </motion.div>

                    <button onClick={() => setShowDetail(null)}
                        className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200">
                        <MdClose size={30} />
                    </button>
                </div>
            }

        </div>
    )
}

export default ProjectCard