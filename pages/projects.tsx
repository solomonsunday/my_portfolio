import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { fadingUP, routeAnimation, stagger } from '../animations'
import ProjectCard from '../components/ProjectCard'
import ProjectNavbar from '../components/ProjectNavbar'
import { projects } from '../data'
import { Category } from '../type'

const Projects = () => {
    //PARENT OF {PROJECT CARD}
    const [allProjects, setAllProjects] = useState(projects);
    const [active, setActive] = useState("all");

    const [showDetail, setShowDetail] = useState<number | null>(null);


    const handlerFilterCategory = (category: Category | "all") => {
        console.log("first enter here")
        if (category === "all") {
            setAllProjects(projects);
            setActive(category);
            return
        }

        const newArray = projects.filter((project) => project.category.includes(category));
        setAllProjects(newArray);
        setActive(category);

    }

    return (
        <motion.div
            variants={routeAnimation} initial="initial" animate="animate"
            className='px-5 py-2 overflow-y-scroll ' style={{ height: "60vh" }}>
            <nav> <ProjectNavbar handlerFilterCategory={handlerFilterCategory}
                active={active} /></nav>

            <motion.div className='relative grid grid-cols-12 gap-4 my-3' variants={stagger}
                initial="initial"
                animate="animate"
            >
                {allProjects.map((project) => (
                    <motion.div key={project.name} className='col-span-12 p-2 bg-gray-200 rounded-full sm:col-span-6 lg:col-span-4 dark:bg-dark-200'
                        variants={fadingUP}
                    >
                        <ProjectCard project={project} showDetail={showDetail} setShowDetail={setShowDetail} />
                    </motion.div>

                ))}
            </motion.div>
        </motion.div>

    )


}



export default Projects