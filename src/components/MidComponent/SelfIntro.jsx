import React from "react";
import { motion, useAnimate } from "framer-motion";
import { Card } from "@mui/material";
import manImage from "../../image/man.png";
import { VictoryPie } from "victory";

const SelfIntro = () => {
  const [scope, animate] = useAnimate();
  const handleBUtton = async () => {
    await animate("#changeAvatar", { opacity: 0 }, { duration: 0.5 });
    await animate("#removeHeading", { opacity: 0 }, { duration: 0.5 });
    await animate("#removePara", { opacity: 0 }, { duration: 0.5 });
    await animate("#moveButton", { opacity: 0 }, { duration: 0.5 });

    await animate("#changeColor", { rotateY: 360 }, { duration: 0.9 });

    await animate("#changeAvatar", { display: "none" });
    await animate("#removeHeading", { display: "none" });
    await animate("#removePara", { display: "none" });
    await animate("#moveButton", { display: "none" });

    await animate("#showHeading", { display: "block" });
    await animate("#showPara", { display: "block" });
    await animate("#showButton", { display: "block" });
  };
  return (
    <>
      <div className="row mt-5" ref={scope}>
        <motion.div
          className="col p-3"
          initial={{
            y: 100,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.5,
            type: "spring",
            bounce: 0.4,
            when: "beforeChildren"
          }}
        >
          <Card
            id="changeColor"
            sx={{
              backgroundColor: "#38419D",
              minWidth: "20rem",
              minHeight: "10rem",
            }}
            className="p-2 shadow-lg"
          >
            <motion.div className="shape" id="changeAvatar">
              <img src={manImage} alt="img" />
            </motion.div>
            <motion.h1 initial={{ display: "none" }} id="showHeading">
              {" "}
              Disalamer !!
            </motion.h1>
            <motion.p initial={{ display: "none" }} id="showPara">
              Hackers don't reveal there id. So don't share to any one.{" "}
            </motion.p>
            <motion.button id="showButton" initial={{ display: "none" }}>
              Now just download it
            </motion.button>
            <h2 className="mt-2" id="removeHeading">
              Who's this guy?
            </h2>
            <p className="textColor" id="removePara">
              Hii, I'm a Full-stack developer and I know how to make a website
              and I'm also a good UI/UX designer. I'm also a good team player.
            </p>
            <motion.button id="moveButton" onClick={() => handleBUtton()}>
              Know more
            </motion.button>
          </Card>
        </motion.div>
        <motion.div
          className="col p-3"
          initial={{
            y: 100,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.5,
            type: "spring",
            bounce: 0.4,
          }}
        >
          <motion.div>
            <Card
              sx={{
                backgroundColor: "#38419D",
                minWidth: "20rem",
              }}
              className=" shadow-lg"
            >
              <h1 className="mt-2">Skill sets</h1>
              <motion.div >
                <VictoryPie
                  padding={{ top: 40, bottom: 40, left: 90, right: 90 }}
                  padAngle={4}
                  innerRadius={90}
                  data={[
                    { x: "React.js", y: 50 },
                    { x: "Node.js", y: 50 },
                    { x: "Express.js", y: 50 },
                    { x: "MongoDB", y: 50 },
                    { x: "HTML/CSS", y: 50 },
                    { x: "REST API's", y: 40 },
                    { x: "JavaScript", y: 50 },
                  ]}
                />
              </motion.div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default SelfIntro;
