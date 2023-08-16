import React, { useState } from 'react'
import ArchieveCard from './ArchieveCard';
import { ArchieveData, archieveProjects } from '@/shared/ProjectData';
import { motion } from 'framer-motion';

const Archieve = () => {
    const [ showMore, setShowMore ] = useState( true );

  return (
      <div className='max-w-contentContainer mx-auto px-4 py-24'>
          <div className='w-full flex flex-col items-center'>
              <h2 className='text-sm font-titleFont text-textGreen'>
                  Other Notworthy project
              </h2>
              <p>View the archieve</p></div>
          <div className='grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10'>
              {
                  archieveProjects.map((project : ArchieveData): React.ReactNode => <ArchieveCard data={project} />)
              }
              {
                  !showMore &&
                  archieveProjects.map( ( project: ArchieveData, index: number ): React.ReactNode =>
                      <motion.div
                          initial={ { opacity: 0 } }
                          whileInView={ { opacity: 1 } }
                          transition={ { delay: 0.1 * index } }
                      >
                            <ArchieveCard data={ project } />
                      </motion.div>)
              }
          </div>
          <div className='mt-12 flex items-center justify-center'>
              <button onClick={(event: React.MouseEvent) => setShowMore(!showMore)}
                  className='w-36 h-12 rounded-md text-textGreen text-base border
                   border-textGreen hover:bg-hoverColor duration-300'>
                  Show {
                      showMore ? `More` : `Less`
                  }
              </button>
          </div>
    </div>
  )
}

export default Archieve