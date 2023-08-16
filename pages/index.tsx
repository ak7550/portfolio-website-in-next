import LeftSide from '@/components/LeftSide'
import Navbar from '@/components/Navbar'
import RightSide from '@/components/RightSide'
import Head from 'next/head'
import React from 'react'
import {motion} from 'framer-motion';
import Banner from '@/components/middleComponents/Banner'
import About from '@/components/middleComponents/About'
import Experience from '@/components/middleComponents/Experience'
import Projects from '@/components/middleComponents/Projects';
import Archieve from '@/components/middleComponents/Archieve';
import Contact from '@/components/middleComponents/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Software Developer Portfolio
        </title>
        <meta name="description" content="Software Developer Portfolio" />
        <meta name="viewport" content="Software" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <main className='w-full h-screen font-bodyFont bg-bodyColor text-textLight
      overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60'>
        <Navbar />
        <div
          className='w-full h-[88vh] xl:flex items-center gap-20 justify-between'
        >
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity:1}}
            transition={{delay: 0.5}}
            className='hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0'>
            <LeftSide />
          </motion.div>
          <div
            className='h-[88vh] mx-auto p-4 w-full'
          >
            <Banner />
            <About />
            <Experience />
            <Projects />
            <Archieve />
            <Contact />
      <div className='hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4'>

              <Footer />
              </div>
          </div>
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity:1}}
            transition={{delay: 0.5}}
            className='hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0'
          >
            <RightSide />
          </motion.div>
        </div>
      </main>
    </>
  )
}
