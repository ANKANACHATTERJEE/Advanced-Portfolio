import React from 'react'
import {motion} from 'framer-motion'

const animation = {
    initial:{
        opacity:0,
        y:10,
        
    },
    animate:{
        opacity:1,
        y:-10,
        
        transition:{
            delay:3,
          
        }
    }
  }

const AnimatedComponents = () => {
  return (
    <div>
      
    </div>
  )
}

export default AnimatedComponents
