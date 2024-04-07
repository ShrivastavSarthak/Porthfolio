import React from 'react'
import {motion} from "framer-motion"
const HoverbleCard = ({index, hoveredIndex}) => {
  return (
    <motion.div>
        {index === hoveredIndex ?(
            <h2>show Content</h2>)
          : <h2>hide content</h2>
          }
    
    </motion.div>
  )
}

export default HoverbleCard