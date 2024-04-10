import { motion } from "framer-motion";
import { GetStaticPropsContext } from "next";
import React from "react";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { fadingUP, routeAnimation, stagger } from "../animations";

const Home = () => {
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
    >
      <h5 className="my-3 font-medium">
        Experienced Software Engineer skilled in crafting successful
        applications tailored to meet customer needs. Proficient in
        collaborating with clients to gather requirements, develop comprehensive
        plans, and enhance designs for optimal usability and functionality.
        Demonstrated track record of working collaboratively within teams to
        deliver impactful, cutting-edge solutions that engage customers and
        drive business outcomes. Well-versed in design patterns and user
        preferences, ensuring an intuitive and enjoyable user experience.
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 "
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide"> What I offer</h6>
        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((service) => (
            <motion.div
              variants={fadingUP}
              key={service.title}
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1"
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

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
