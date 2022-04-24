import { motion } from 'framer-motion';
import { GetStaticPropsContext } from 'next';
import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data';
import { fadingUP, routeAnimation, stagger } from '../animations'

const Home = () => {

  return (
    <motion.div className='flex flex-col flex-grow px-6 pt-1'
      variants={routeAnimation} initial="initial" animate="animate"
    >
      <h5 className="my-3 font-medium">
        Knowledgeable Software Engineer adept at creating successful Application that meets customer&apos;s needs. Specializing in collaborating with any customers to gather requirements, produce plans and improve designs for usability and functionality. Experienced working with team to produce impactful, leading-edge Application that engage customers and deliver business results. Well-versed in design standards and user preferences.
      </h5>
      <div className='flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 ' style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}>
        <h6 className='my-3 text-xl font-bold tracking-wide'> What I offer</h6>
        <motion.div className='grid gap-6 lg:grid-cols-2'
          variants={stagger} initial="initial" animate="animate">
          {services.map(service => (
            <motion.div
              variants={fadingUP}
              key={service.title}
              className='col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1'
            >
              <ServiceCard service={service} />
            </motion.div>
          ))
          }
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Home;

// export const getServerSideProps = async (context: GetServerSideProps) => {
//   //collection
//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()

//   console.log("server", services)

//   return {
//     props: { 
//       services: data.services
//     }
//   }
// }

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   //collection
//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()


//   return {
//     props: {
//       services: data.services
//     }
//   }
// }