import React, { useState } from "react";
import CardStruct from "./Card";
import { motion } from "framer-motion";
import ProjectInfo from "./ProjectInfo";
const MainCard = () => {
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

  const [setHoverIndex] = useState(null);

  const handleHover = (index) => {
    setHoverIndex(index);
  };
  return (
    <div className="row row-cols-4 mx-3">
      {ProjectInfo.map((index) => (
        <motion.div
          className="col"
          key={index}
          variants={ProjectVarient}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <CardStruct
            key={index}
            index={index}
            onMouseEnter={() => handleHover(index)}
            projectTitle={index.name}
            projectImage={index.image}
            projectDescription={index.description}
            projectLink={index.link}

          />
        </motion.div>
      ))}
    </div>
  );
};

export default MainCard;
