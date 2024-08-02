import React from 'react'
import {motion} from 'framer-motion'

const quote = {
    initial:{
        opacity:0,
    },
    animate:{
        opacity:1,
        transition:{
            delay:4,
        }
    }
}

const AnimatedText = ({text,className=""}) => {
  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center text-left overflow-hidden text-light'>
      <motion.h1 className={`inline-block w-full text-dark font-bold capitalize text-1xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-6xl ${className}`} variants={quote} initial="initial" animate="animate">
        {
            text.split(" ").map((word,index) => 
            <span key={word+'-'+index}>
                {word}&nbsp;
            </span>
            )
        }
      </motion.h1>
    </div>
  )
}

export default AnimatedText

export const AnimatedTextWord = ({ text, className="" }) => {
    const words = text.split(" ");
  
  // Variants for Container of words.
    const container = {
      hidden: { opacity: 0 },
      visible: (i = 1) => ({
        opacity: 1,
        transition: { delay: 5, staggerChildren: 0.12, delayChildren: 5 + 0.04 * i },
      }),
    };
  
  // Variants for each word.
  
    const child = {
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 100,
        },
      },
      hidden: {
        opacity: 0,
        x: 20,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 100,
        },
      },
    };
   // Inline styles
  const paragraphStyle = {
    display: "inline-block",
    overflowWrap: "break-word",
    wordWrap: "break-word",
    wordBreak: "break-word",
    whiteSpace: "normal",
    maxWidth: "100%",
  };

  const wordStyle = {
    display: "inline-block",
  };

    return (
      <motion.p
        variants={container}
        initial="hidden"
        animate="visible"
        className={` ${className}`}
        style={paragraphStyle}
      >
        {words.map((word, index) => (
          <motion.span
            variants={child}
            key={index}
            style={wordStyle}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.p>
    );
  };
  
  