import { userBio, userFirstName } from '@/shared/UserData'
import { motion } from 'framer-motion'
import React from 'react'


const Banner = () => {
  return (
      <section
          id='home'
          className='max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4
          lgl:gap-8 mdl:px-10 xl:px-4'
      >
          <motion.h3
                initial={{opacity: 0, y:10}}
                animate={{opacity:1, y:0}}
                transition={{delay: 0.6, duration: 0.5}}
              className='text-lg font-titleFont tracking-wide text-textGreen'
          >
              Hi, My Name is
          </motion.h3>

          <motion.h1
                initial={{opacity: 0, y:10}}
                animate={{opacity:1, y:0}}
              transition={{ delay: 0.7, duration: 0.5 }}
              className='text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col'
          >
              {userFirstName}.
              <span
                  className='text-textDark mt-2 lgl:mt-4'
              >
                  I am a noob web Developer</span>
          </motion.h1>

          <motion.p
              initial={{opacity: 0, y:10}}
                animate={{opacity:1, y:0}}
                transition={{delay: 0.8, duration: 0.5}}
              className='text-base md:max-w-[650px] text-textDark font-medium'
          >
              {userBio}
              <a href="http://" target='_blank' rel="noopener noreferrer">
                <span
                  className='text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group'
                >
                      Learn More.
                      <span
                          className='absolute w-full h-[1px] bg-textGreen left-0 bottom-1 translate-x-[110%]
                          group-hover:translate-x-0 transition-transform duration-500'
                      ></span>
                </span>
              </a>
          </motion.p>

          <motion.button
              className='w-52 h-14 text-sm font-titleFont border border-textGreen rounded tracking-wide hover:bg-hoverColor duration-300'
          >
              Check out my Projects!
          </motion.button>
    </section>
  )
}

export default Banner