// pages/skills.js

import Head from 'next/head';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: 'Programming Languages',
    skills: ['Java', 'Python', 'C++', 'C', 'R'],
  },
  {
    category: 'Technologies & Frameworks',
    skills: [
      'HTML',
      'CSS',
      'SpringBoot',
      'JavaScript',
      'Angular',
    ],
  },
  {
    category: 'Databases',
    skills: ['Oracle SQL', 'MongoDB'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['GitHub','IntelliJ IDEA','Visual Studio Code','Jenkins','UCD','Harness'],
  },
  {
    category: 'Soft Skills',
    skills: [
      'Leadership',
      'Communication',
      'Teamwork',
      'Critical Thinking',
      'Creativity',
      'Adaptability',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Skills = () => {
  return (
    <>
      <Head>
        <title>Ankana Chatterjee | Skills</title>
        <meta
          name="description"
          content="Explore the skills of Ankana Chatterjee, including programming languages, front-end and back-end development, version control, and soft skills."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full min-h-screen xs:px-8 sm:px-8 md:px-16 lg:px-16 xl:px-32 2xl:px-32  py-10  ">
        <motion.Layout 
              className="mb-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible">
          <h1 className="xs:text-1xl sm:text-2xl  md:text-3xl lg:text-4xl xl:text-4xl  2xl:text-4xl font-bold mb-8 text-center">Skills</h1>
          {skillsData.map((category) => (
            <>
              <h2 className="xs:text-lg sm:text-lg  md:text-1xl lg:text-1xl xl:text-2xl 2xl:text-2xl font-semibold mb-4  text-indigo-500 text-center" key={category.category}>
                {category.category}
              </h2>
              <div className="flex flex-wrap justify-center">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="m-2 py-1 px-2 dark:bg-gray-800 bg-gray-200 rounded-full shadow-lg .bg-opacity-50 "
                    whileHover={{ scale: 1.1 }}
                    variants={itemVariants}
                  >
                    <span className="xs:text-xs sm:text-sm  md:text-md lg:text-lg xl:text-lg 2xl:text-lg">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </>
          ))}
        </motion.Layout>
      </main>
      <style jsx>{`
        .bg-opacity-50 {
          background-color: rgba(0, 0, 0, 0.75);
        }
        
      `}</style>
    </>
  );
};

export default Skills;
