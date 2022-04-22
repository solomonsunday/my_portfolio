import { GetStaticPropsContext } from 'next';
import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data';

const Home = () => {

  return (
    <div className='flex flex-col flex-grow px-6 pt-1'>
      <h5 className="my-3 font-medium">
        Knowledgeable Software Engineer adept at creating successful Application that meets customer needs. Specializing in collaborating with any customers to gather requirements, produce plans and improve designs for usability and functionality. Experienced working with team to produce impactful, leading-edge Application that engage customers and deliver business results. Well-versed in design standards and user preferences.
      </h5>
      <div className='flex-grow p-4 mt-5 bg-gray-400' style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}>
        <h6 className='my-3 text-xl font-bold tracking-wide'> What I offer</h6>
        <div className='grid gap-6 lg:grid-cols-2 '>
          {services.map(service => (
            <div className='bg-gray-200 rounded-lg lg:col-span-1'>
              <ServiceCard service={service} />
            </div>
          ))
          }
        </div>
      </div>
    </div>
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

export const getStaticProps = async (context: GetStaticPropsContext) => {
  //collection
  const res = await fetch('http://localhost:3000/api/services')
  const data = await res.json()

  console.log("server", services)

  return {
    props: {
      services: data.services
    }
  }
}