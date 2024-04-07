import React from "react";
import { motion } from "framer-motion";
// import { FaArrowUp } from "react-icons/fa";
import MidComponent from "./MidComponent/midComponent";
import LowerComponent from "./LowerComponent/LowerComponent";
const HomePage = () => {
  return (
    <>
      <div className=" top_content">
        <div className="inner-elements">
          <motion.h1
            style={{ color: "white" }}
            initial={{
              opacity: 0,
              y: -50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 2,
            }}
          >
            Hola, I'm{" "}
            <span style={{ color: "#52D3D8" }} className="Name">
              Sarthak Kumar
            </span>
          </motion.h1>
          <motion.h1
            style={{ color: "whitesmoke" }}
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              when: "afterchidren",
            }}
          >
            {" "}
            I'm a full-stack developer.
          </motion.h1>
          <motion.button
            className="mt-3 view-button btn-lg"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            whileHover={{
              scale: 1.25,
              backgroundColor: "#3887BE",
              transition: {
                duration: 0.25,
              },
            }}
            whileTap={{
              scale: 1,
              transition: {
                duration: 0.25,
              },
            }}
          >
            view my work{" "}
            <motion.span
              initial={{
                rotate:0
              }}
              animate={{
                rotate: 180,
              }}
              transition={{
                duration:1
              }}
            >
              ←
            </motion.span>
          </motion.button>
        </div>
      </div>
      <MidComponent />
      <LowerComponent/>
    </>
  );
};

export default HomePage;
