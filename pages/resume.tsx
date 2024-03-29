import { motion } from "framer-motion";
import React from "react";
import { BsCircleFill } from "react-icons/bs";
import { fadingUP, routeAnimation } from "../animations";
import Bar from "../components/Bar";
import { languages, tools } from "../data";

const Resume = () => {
  return (
    <motion.div
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      className="px-6 py-2"
    >
      {/* //education */}
      <motion.div
        variants={fadingUP}
        initial="initial"
        animate="animate"
        className="grid gap-6 md:grid-cols-2"
      >
        <div>
          <h5 className="my-2 text-2xl font-bold text-blue-300 ">Education</h5>
          <div className="flex items-center">
            {/* <div className='mx-2'>
                            <BsCircleFill fontSize={10} />
                        </div> */}
            <div className="mb-5">
              <h2 className="my-2 text-xl font-bold underline">
                Nnamdi Azikiwe University{" "}
              </h2>
              <p className="font-semibold">Computer Science ( 2013-2017 )</p>
            </div>
          </div>
          <div className="flex items-center">
            {/* <div className='mx-2'>
                            <BsCircleFill fontSize={10} />
                        </div> */}
            <div className="mb-5">
              <h5 className="my-2 text-xl font-bold underline">Udacity </h5>
              <p className="font-semibold">FrontEnd Developer( 2018 )</p>
            </div>
          </div>
          <div className="flex items-center">
            {/* <div className='mx-2'>
                            <BsCircleFill fontSize={10} />
                        </div> */}
            <div className="mb-5">
              <h5 className="my-2 text-xl font-bold underline">Udacity </h5>
              <p className="font-semibold">
                Nanodegree Cloud DevOps Engineer (May 2022 - Aug 2022 )
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div>
              <h5 className="my-2 text-xl font-bold underline">
                Zero To Mastery Academy{" "}
              </h5>
              <p className="font-semibold">Next Js( 2022 )</p>
              <p className="font-semibold">
                Complete Next.js Developer ( 2022 )
              </p>
            </div>
          </div>
        </div>

        <motion.div variants={fadingUP} initial="initial" animate="animate">
          <h5 className="my-2 text-2xl font-bold text-blue-300 ">Experience</h5>
          <div>
            <div className="mb-6">
              <h5 className="my-2 text-xl font-bold underline">
                FrontEnd Developer Engineer{" "}
                <span className="text-sm">(Lead)</span>
                <span className="text-sm"></span>
              </h5>
              <p className="font-semibold">
                Exquis App Factory LTD (2022 - on)
              </p>
            </div>
            <div className="mb-6">
              <h5 className="my-2 text-xl font-bold underline">
                FrontEnd Developer Engineer <span className="text-sm"></span>
              </h5>
              <p className="font-semibold">Datamax Files LTD (2021 - 2022)</p>
            </div>

            <div className="mb-6">
              <h5 className="my-2 text-xl font-bold underline">
                Software Engineer{" "}
                <span className="text-sm">(Intermidiate)</span>
              </h5>
              <p className="font-semibold">
                Netop Business System LTD(2020 - 2021)
              </p>
            </div>

            <div className="mb-6">
              <h5 className="my-2 text-xl font-bold underline">
                Software Engineer <span className="text-sm">(Jr)</span>
              </h5>
              <p className="font-semibold">
                Primatus Technology LTD(2019 - 2020)
              </p>
            </div>

            {/* <h5 className='my-2 text-xl font-bold'>Team</h5>
                        <p className='font-semibold'>TCS (2021 - on)</p>
                        <h5 className='my-2 text-xl font-bold'>Software Engineer Jr</h5>
                        <p className='font-semibold'>TCS (2021 - on)</p> */}
          </div>
        </motion.div>
      </motion.div>

      {/* languages and tools  */}

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold text-blue-300">
            Languages & Frameworks
          </h5>

          <div className="my-2">
            {languages.map((Language) => (
              <Bar data={Language} key={Language.name} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold text-blue-300">
            Tools & Softwares
          </h5>

          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
