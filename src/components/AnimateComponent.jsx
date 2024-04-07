import { useInView } from 'framer-motion'
import React, { useRef } from 'react'

const AnimateComponent = ({children}) => {
    const ref=useRef(null)
    const isView =useInView(ref,{once:true})
  return (
    <div ref={ref}>
    <span
    style={{
        transform: isView ? "none": "translateY(100px)",
        opacity: isView ? 1:0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
    }}
    >
    {children}
    </span>
    
    </div>
  )
}

export default AnimateComponent