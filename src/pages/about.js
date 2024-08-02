import Head from 'next/head';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import { LinkedinIcon, GithubIcon } from '../components/Icons';

export default function About() {
  return (
    <>
      <Head>
        <title>Ankana Chatterjee | About Me</title>
        <meta name="description" content="Learn more about Ankana Chatterjee, a Full Stack Developer with expertise in web development and a passion for continuous learning." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full xs:px-8 sm:px-8 md:px-16 lg:px-16 xl:px-32 min-h-screen py-10 bg-light dark:bg-dark dark:text-light">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto px-4"
        >
          <h1 className="xs:text-1xl sm:text-2xl  md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-bold mb-6">About Me</h1>
          <p className="text-base xs:text-xs sm:text-sm md:text-md lg:text-md xl:text-md 2xl:text-md mb-4">
            Hello, I'm Ankana Chatterjee, a passionate and dedicated Full Stack Developer with a strong background in Computer Science. My journey in the tech world began with a curiosity for how things work, which eventually transformed into a deep love for creating innovative and efficient web applications.
          </p>
          <p className="text-base xs:text-xs sm:text-sm md:text-md lg:text-md 2xl:text-md xl:text-md mb-4">
            With expertise in both front-end and back-end development, I have honed my skills in technologies such as JavaScript, React, Node.js, and various other modern frameworks and tools. I'm always excited to learn new things in the web development world. 
            I have also had the opportunity to lead the web development team at HackClub, one of the top tech clubs at my college. It was a fantastic experience that allowed me to dive deep into web development while working with a talented and enthusiastic team.
            Besides web development, I've also dabbled in projects involving Machine Learning and Deep Learning.
          </p>
          <h2 className="xs:text-lg sm:text-lg  md:text-1xl lg:text-1xl xl:text-2xl 2xl:text-2xl font-bold mt-6 mb-4">Professional Background</h2>
          <p className="text-base xs:text-xs sm:text-sm md:text-md lg:text-md xl:text-md 2xl:text-md mb-4">
            I hold a degree in Computer Science, which laid the foundation for my technical knowledge and problem-solving abilities. Over the years, I have worked on numerous projects, ranging from small business websites to large-scale applications. My professional experiences have provided me with a comprehensive understanding of the software development lifecycle, agile methodologies, and the importance of teamwork and communication in delivering successful projects.
          </p>
          <h2 className="xs:text-lg sm:text-lg  md:text-1xl lg:text-1xl xl:text-2xl 2xl:text-2xl font-bold mt-6 mb-4">Hobbies and Interests</h2>
          <p className="text-base xs:text-xs sm:text-sm md:text-md lg:text-md xl:text-md 2xl:text-md mb-4">
            When I'm not coding, you'll probably find me dancing—I'm a trained dancer. I also love experimenting in the kitchen and trying out new recipes, so you could call me an experimental chef. Reading has been a passion of mine since childhood, and I enjoy diving into a good book whenever I get the chance.
          </p>
          <h2 className="xs:text-lg sm:text-lg  md:text-1xl lg:text-1xl xl:text-2xl 2xl:text-2xl font-bold mt-6 mb-4">Personal Philosophy</h2>
          <p className="text-base xs:text-xs sm:text-sm md:text-md lg:text-md xl:text-md 2xl:text-md mb-4">
            I believe that continuous learning and adaptability are key in the ever-evolving tech industry. I am always eager to explore new technologies and methodologies to enhance my skill set and stay ahead of the curve. My goal is to leverage my technical expertise to build solutions that make a difference, whether it's simplifying a complex process or creating an enjoyable digital experience for users.
          </p>
          <h2 className="xs:text-lg sm:text-lg  md:text-1xl lg:text-1xl xl:text-2xl 2xl:text-2xl font-bold mt-6 mb-4">Let's Connect</h2>
          <p className="text-base xs:text-xs sm:text-sm md:text-md lg:text-md xl:text-md 2xl:text-md mb-4">
            I am always open to discussing new opportunities, collaborations, or just sharing insights about the tech world. Feel free to connect with me on <a href="https://www.linkedin.com/in/ankana-chatterjee-4102ab1bb/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn</a> or check out my projects on <a href="https://github.com/ANKANACHATTERJEE" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a>. If you have any questions or just want to say hello, don't hesitate to reach out via <a href="mailto:ankana.chatterjee02@gmail.com" className="text-blue-500 hover:underline">email</a>.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <motion.a href="https://www.linkedin.com/in/ankana-chatterjee-4102ab1bb/" target="_blank" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} >
              <LinkedinIcon />
            </motion.a>
            <motion.a href="https://github.com/ANKANACHATTERJEE" target="_blank" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} >
              <GithubIcon />
            </motion.a>
          </div>
        </motion.div>
      </main>
    </>
  );
}
