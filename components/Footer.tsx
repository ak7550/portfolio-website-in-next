import { IconObject, iconObjectArr } from '@/shared/UserData'
import { motion } from 'framer-motion'
import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-row gap-4">
      {iconObjectArr.map(
        (iconObj: IconObject, index: number): React.ReactNode => (
          <motion.a
            initial={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, delay: 0.1 * index, ease: 'easeIn' }}
            animate={{ y: 0, opacity: 1 }}
            key={index}
            href={iconObj.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span
              className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center
                        hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300"
            >
              {iconObj.icon}
            </span>
          </motion.a>
        )
      )}
    </div>
  )
}

export default Footer
