import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import {SunIcon, MoonIcon, FacebookIcon, InstagramIcon} from  './Icons'
import {motion} from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher'

const CustomLink = ({href,title,className=""}) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span className={`inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full h-0.5' : 'w-0 h-[1px]'}`}>
        &nbsp;
      </span>
    </Link>
  )
}

const CustomMobileLink = ({href,title,className="",toggle}) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href)
  }

  return (
    <button href={href} className={`${className} relative group text-light dark:text-dark my-1`} onClick={handleClick}>
      {title}

      <span className={`inline-block bg-light dark:bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full h-0.5' : 'w-0 h-[1px]'}`}>
        &nbsp;
      </span>
    </button>
  )
}

const NavBar = () => {

  const [mode,setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className='w-full xs:px-12 xs:py-4 sm:px-16 sm:py-8 md:px-16 md:py-8 lg:px-16 lg:py-8 xl:px-32 xl:py-8 2xl:px-32 2xl:py-8 font-medium flex items-center justify-between relative'>
      
      <button className={`flex flex-col justify-center items-center hidden lg:flex`} onClick={handleClick}>
       <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5' }`}></span>
       <span className={`bg-dark dark:bg-light block  transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-1'}`}></span>
       <span className={`bg-dark dark:bg-light block  transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5' }`}></span>
      </button>

      <div className='w-full flex justify-between items-center lg:hidden'>

      <nav>
        <CustomLink href="/" title="Home" className='mr-4'></CustomLink>
        <CustomLink href="/about" title="About" className='mx-4'></CustomLink>
        <CustomLink href="/education" title="Education" className='mx-4'></CustomLink>
        <CustomLink href="/experience" title="Experience" className='mx-4'></CustomLink>
        <CustomLink href="/skills" title="Skills" className='ml-4'></CustomLink>

      </nav>

      </div>

      {
        isOpen ? 
        <motion.div 
        initial={{scale:0, opacity:0, x:"-50%", y:"-50%"}}
        animate={{scale:1, opacity:1}}
        className='min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'>

      <nav className='flex items-center flex-col justify-center'>
        <CustomMobileLink href="/" title="Home" className='' toggle={handleClick}></CustomMobileLink>
        <CustomMobileLink href="/about" title="About" className='' toggle={handleClick}></CustomMobileLink>
        <CustomMobileLink href="/education" title="Education" className='' toggle={handleClick}></CustomMobileLink>
        <CustomMobileLink href="/experience" title="Experience" className='' toggle={handleClick}></CustomMobileLink>
        <CustomMobileLink href="/skills" title="Skills" className='' toggle={handleClick}></CustomMobileLink>

      </nav>

      </motion.div>
        : null
      }
      
      <nav className='flex items-center justify-center flex-wrap border rounded-full border-dark pl-1 pt-1 dark:border-light'>
        <button onClick={() => setMode(mode === "light" ? "dark" : "light")} className=' flex items-center justify-center'>
        {
          mode === "dark" ? 
          <MoonIcon className={"fill-light"}/>: <SunIcon className={"fill-dark"}/>
        }
        </button>
      </nav>

      
    </header>
  )
}

export default NavBar
