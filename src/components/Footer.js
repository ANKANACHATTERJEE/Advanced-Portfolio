import React from 'react'
import Layout from './Layout'


const Footer = () => {
  return (
    <footer className='w-full font-medium text-xs'>
        <div className='flex xs:px-2 xs:pt-10 sm:pt-10 md:pt-12 sm:px-8 items-center justify-center px-32'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
            <div className='flex items-center'>
                &nbsp;<span className='text-primary text-2xl px-1'>&#10083;</span><span className='underline underline-offset-2'>Ankana Chatterjee</span>
            </div>
            
        </div>
    </footer>
  )
}

export default Footer
