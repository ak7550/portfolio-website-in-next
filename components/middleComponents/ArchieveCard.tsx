import { ArchieveData } from '@/shared/ProjectData';
import { IconObject, techStackArr } from '@/shared/UserData';
import React from 'react'
import { FaRegFolder } from 'react-icons/fa';
import { RxOpenInNewWindow } from 'react-icons/rx';

type Props = {
    data: ArchieveData
}

const ArchieveCard = ( { data }: Props ) => {
    const {majorTechStacks, projectName, description} = data
    return (
      <a href="#" target='_blank'>
      <div className='w-full h-[24rem] rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group'>
          <div className='flex justify-between items-center'>
          <FaRegFolder className='text-4xl text-textGreen' />
          <RxOpenInNewWindow className='text-4xl hover:text-textGreen' />
          </div>
      <div>
              <h2 className='text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen'>
                  {projectName}
              </h2>
              <p className='text-sm mt-3'>{description}.</p>
                    <ul className='text-xs my-5 md:text-sm font-titleFont flex flex-wrap items-center gap-2 md:gap-5 justify-center text-textDark'>
              {
                majorTechStacks.map( ( tech: IconObject, index: number ): React.ReactNode => (
                   <li key={ index } className='flex items-center gap-2 hover:text-textGreen cursor-pointer duration-300'>
                    <span className='text-textGreen'>{tech?.icon}</span>{tech.name}
                  </li>
                ))
              }
            </ul>
                </div></div>
            </a>
  )
}

export default ArchieveCard