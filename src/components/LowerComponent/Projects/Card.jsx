import { CardContent, CardMedia } from "@mui/material";
import Card from "@mui/material/Card";
import React, { useState } from "react";
import HoverbleCard from "./HoverbleCard";
import "./Card";
import ProjectInfo from "./ProjectInfo";
const CardStruct = ({
  index,
  projectImage,
  projectTitle,
  projectDescription,
  projectLink,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHovered = () => {
    setIsHovered(!isHovered);
  };

  return (
    <Card
      className={isHovered ? "mx-2 my-3 notHovered" : "mx-2 my-3 onHovered"}
      sx={{ height: 400, width: 300 }}
      style={{backgroundImage:`url(${projectImage})`,backgroundSize:"cover", 
      filter:isHovered ? "opacity(30%)": "none",
      transition: "filter 0.3s ease-in-out"}}
      onMouseEnter={() => handleHovered(index)}
      onMouseLeave={handleHovered}
    >
      <CardContent>
        {isHovered ? (
          <HoverbleCard desc={projectDescription} link={projectLink} />
        ) : (
          <>
            <h1>{projectTitle}</h1>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default CardStruct;
