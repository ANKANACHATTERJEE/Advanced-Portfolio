import React, { useRef } from 'react'
import { useScroll } from 'framer-motion'
import {motion} from 'framer-motion'
import Head from 'next/head'

const Details = ({position, company, companyLink, time, address, work}) => {
    return <li className='xs:my-4 sm:my-4 md:my-4 lg:my-8 xl:my-8 2xl:my-8 first:mt-0 last:mb-0  flex w-full pl-20 flex-col  justify-between '>
        <div>
            <h3 className='capitalize font-bold xs:text-lg sm:text-lg  md:text-lg  lg:text-1xl xl:text-2xl 2xl:text-2xl'>{position}<a href={companyLink} className='text-primary capitalize'>&nbsp;@{company}</a></h3>
            <span className='capitalize xs:font-sm sm:text-sm md:font-sm lg:font-md xl:font-md text-dark/75 dark:text-light/75'>
                {time} | {address}
            </span>
            <p className='xs:font-sm sm:text-sm md:font-sm lg:font-md xl:font-md w-full'>
                {work}
            </p>
        </div>
    </li>
}

const experience = () => {
    
  return (
    <>
    <Head>
        <title>Ankana Chatterjee | Experience</title>
        <meta name="description" content="Learn more about Ankana Chatterjee, a Full Stack Developer with expertise in web development and a passion for continuous learning." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
<motion.div
initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5 }}
className='mb-10 p-10 '>
      <h1 className="xs:text-1xl sm:text-2xl  md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-bold xs:mb-10 sm:mb-10 md:mb-15 lg:mb-20 xl:mb-20  2xl:mb-20 text-center">Experience</h1>
      
      <div  className='flex flex-row xs:w-[75%]  sm:w-[75%] md:w-[75%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] xs:mx-0  sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto 2xl:mx-auto relative items-center justify-between'>
      <div className='absolute ml-0 xs:left-20 sm:left-20 md:left-20 lg:left-20 lg:-ml-20 top-0 w-[4px] h-full bg-indigo-500 origin top'/>
        <ul className='w-full flex flex-col items-start justify-between '>
        <Details position="Program Associate" company="WellsFargo" companyLink="/" time="Aug 2024 - Present" address="Hyderabad, Telangana, India" work="Currently undergoing training as a full-time employee"/>

<Details position="Intern Analyst" company="WellsFargo" companyLink="/" time="Feb 2024 - Jun 2024" address="Hyderabad, Telangana, India" work="Worked with a team to implement development changes to an existing market product, including conducting unit testing and automation testing to ensure its functionality and performance"/>

<Details position="Summer Intern" company="SLB" companyLink="/" time="May 2023 - Jun 2023" address="Navi Mumbai, Maharashtra, India" work="Worked on automating internal websites to streamline workflows and improve efficiency by implementing custom scripts "/>
        </ul>
      </div>
    </motion.div>
    </main>
    </>
  )
}

export default experience
