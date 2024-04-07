import React from "react";
import MainCard from "./Projects/MainCard";
import { motion } from "framer-motion";
const LowerComponent = () => {
  const ProjectVarient = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1,
        type: "spring",
        bounce: 0.4,
        when: "beforeChildren",
      },
    },
  };

  return (
    <>
      <div className="lowerComponent py-3">
        <center>
          <motion.h1
            variants={ProjectVarient}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            My Work
          </motion.h1>
          <motion.hr
            className="hrLine mt-4"
            variants={ProjectVarient}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
          <motion.div
          variants={ProjectVarient}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          >
            <MainCard />
          </motion.div>
        </center>
      </div>
    </>
  );
};

export default LowerComponent;
