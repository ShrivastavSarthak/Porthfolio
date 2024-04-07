import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Avatar, Card } from "@mui/material";
import { SlSpeedometer } from "react-icons/sl";
import { MdDevices } from "react-icons/md";
import { BsRocketTakeoff } from "react-icons/bs";
import { FaLightbulb } from "react-icons/fa6";
import SelfIntro from "./SelfIntro";

const MidComponent = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  const background = useTransform(
    scrollYProgress,
    [0,0.5, 1],
    ["#E4F1FF", "#AED2FF", "#9400FF"]
  );

  const viewVarient = {
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

  const childVarient = {
    hidden: {
      y: -10,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: "0.8",
      },
    },
  };

  return (
    <>
      <motion.div
        className="nav-bar"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 2,
          delaychildren: 0.4,
        }}
        viewport={{ once: true }}
      >
        <motion.div
          style={{
            scaleX,
            background,
            transformOrigin: "left",
            width: "100%",
            height: "3.5rem",
          }}
        />
      </motion.div>
      <div className="mid-component px-3 pt-2">
        <center>
          <motion.h1
            className="mt-5"
            variants={viewVarient}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            About
          </motion.h1>
          <div className="my-4">
            <motion.hr
              variants={viewVarient}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className=" hrLine"
            />
          </div>
          <motion.div className="row">
            <motion.div
              className="col"
              variants={viewVarient}
              initial="hidden"
              whileInView="visible"
              viewport={{once: true}}
            >
              <Card
                className="p-2 shadow-lg my-3"
                sx={{
                  backgroundColor: "#200E3A",
                  minWidth: "20rem",
                }}
              >
                <motion.div
                  variants={childVarient}
                  viewport={{once: true}}
                  whileHover={{
                    rotate: "360deg",
                  }}
                  transition={{
                    duration: 1,
                    type: "spring",
                  }}
                >
                  <Avatar
                    sx={{
                      height: 80,
                      width: 80,
                      backgroundColor: "#38419D",
                    }}
                  >
                    <SlSpeedometer />
                  </Avatar>
                </motion.div>
                <h3 style={{ color: "#52D3D8" }}>Fast</h3>
                <p style={{ color: "#52D3D8" }}>
                  Fast load times and lag free interaction, my highest priority.
                </p>
              </Card>
            </motion.div>
            <motion.div
              className="col"
              variants={viewVarient}
              initial="hidden"
              whileInView="visible"
              viewport={{once: true}}
            >
              <Card
                className="p-2 shadow-lg my-3"
                sx={{
                  backgroundColor: "#200E3A",
                  minWidth: "20rem",
                }}
              >
                <motion.div
                  variants={childVarient}
                  whileHover={{
                    rotate: "360deg",
                  }}
                  transition={{
                    duration: 1,
                    type: "spring",
                  }}
                >
                  <Avatar
                    sx={{
                      height: 80,
                      width: 80,
                      backgroundColor: "#38419D",
                    }}
                  >
                    <MdDevices />
                  </Avatar>
                </motion.div>
                <h3 style={{ color: "#52D3D8" }}>Responsive</h3>
                <p style={{ color: "#52D3D8" }}>
                  My layouts will work on any device, big or small.
                </p>
              </Card>
            </motion.div>
            <motion.div
              className="col"
              variants={viewVarient}
              initial="hidden"
              whileInView="visible"
              viewport={{once: true}}
            >
              <Card
                className="p-2 shadow-lg my-3"
                sx={{
                  backgroundColor: "#200E3A",
                  minWidth: "20rem",
                }}
              >
                <motion.div
                  variants={childVarient}
                  whileHover={{
                    rotate: "360deg",
                  }}
                  transition={{
                    duration: 1,
                    type: "spring",
                  }}
                >
                  <Avatar
                    sx={{
                      height: 80,
                      width: 80,
                      backgroundColor: "#38419D",
                    }}
                  >
                    <BsRocketTakeoff />
                  </Avatar>
                </motion.div>
                <h3 style={{ color: "#52D3D8" }}>Dynamic</h3>
                <p style={{ color: "#52D3D8" }}>
                  Strong preference for easy to use, intuitive UX/UI.
                </p>
              </Card>
            </motion.div>
            <motion.div
              className="col"
              variants={viewVarient}
              initial="hidden"
              whileInView="visible"
              viewport={{once: true}}
            >
              <Card
                className="p-2 shadow-lg my-3"
                sx={{
                  backgroundColor: "#200E3A",
                  minWidth: "20rem",
                }}
              >
                <motion.div
                  variants={childVarient}
                  whileHover={{
                    rotate: "360deg",
                  }}
                  transition={{
                    duration: 1,
                    type: "spring",
                  }}
                >
                  <Avatar
                    sx={{
                      height: 80,
                      width: 80,
                      backgroundColor: "#38419D",
                    }}
                  >
                    <FaLightbulb />
                  </Avatar>
                </motion.div>
                <h3 style={{ color: "#52D3D8" }}>Innovative</h3>
                <p style={{ color: "#52D3D8" }}>
                  Websites don't have to be static, I love making pages come to
                  life.
                </p>
              </Card>
            </motion.div>
          </motion.div>
          <SelfIntro />
        </center>
      </div>
    </>
  );
};
export default MidComponent;
