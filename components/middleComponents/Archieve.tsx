import React, { useState } from 'react'
import ArchieveCard from './ArchieveCard';
import { ArchieveData, archieveProjects } from '@/shared/ProjectData';
import { motion } from 'framer-motion';

const Archieve = () => {
        const [ showMore, setShowMore ] = useState( false );
        const initialVisibleCount = 3;
        const visibleProjects: ArchieveData[] = showMore
            ? archieveProjects
            : archieveProjects.slice(0, initialVisibleCount);
        const canToggle: boolean = archieveProjects.length > initialVisibleCount;

  return (
      <div className='max-w-contentContainer mx-auto px-4 py-24'>
          <div className='w-full flex flex-col items-center'>
              <h2 className='text-sm font-titleFont text-textGreen'>
                  Other Noteworthy Projects
              </h2>
              <p>View the archive</p></div>
          <div className='grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10'>
              {
                  visibleProjects.map( ( project: ArchieveData, index: number ): React.ReactNode =>
                      <motion.div
                          key={project.projectName}
                          initial={ { opacity: 0 } }
                          whileInView={ { opacity: 1 } }
                          transition={ { delay: 0.1 * index } }
                      >
                            <ArchieveCard data={ project } />
                      </motion.div>)
              }
          </div>
          {canToggle && <div className='mt-12 flex items-center justify-center'>
              <button onClick={() => setShowMore(!showMore)}
                  className='w-36 h-12 rounded-md text-textGreen text-base border
                   border-textGreen hover:bg-hoverColor duration-300'>
                  Show {
                      showMore ? `Less` : `More`
                  }
              </button>
          </div>}
    </div>
  )
}

export default Archieve