import React, { useContext } from "react";
import Title from "../components/Title";
import Hero from "../components/Hero";
import Lessons from "../components/Lessons";
import { motion } from "framer-motion";
import { CourseContext } from "../context/CourseContext";
import Loader from "../components/Loader";

function Home() {
  const { isLoading } = useContext(CourseContext);

  const pageVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
  };


  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Hero />

      <Title title="Our products " />

      {isLoading ? <Loader /> : <Lessons />}
    </motion.div>
  );
}

export default Home;
