import amazonImage  from '../../public/assets/images/amazonImage.png';
import { ProjectData } from '@/shared/ProjectData';
import { IconObject, iconObjectArr, techStackArr } from '@/shared/UserData';
import Image from 'next/image';
import React from 'react'

type Props = {
  projectInfo: ProjectData,
  index: number
}

const Project = ( { projectInfo, index }: Props ) => {
    const { featured, projectName } = projectInfo;

  return (
    <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
      <div className={ `flex flex-col
      ${ ( ( index & 1 ) == 1 ) ? `xl:flex-row-reverse` : `xl:flex-row` } gap-6` }>
          <a className='w-full xl:w-1/2 h-auto relative group' href="#" target='_blank' aria-label='AmazonImage'>
          <div>
            <Image className='w-full h-full object-contain' src={amazonImage} alt='AmazonImage' />
            </div>
          </a>
        <div className={ `w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right ${(index & 1) ==0 && `xl:-ml-16`} z-10` }>
            { featured && <p className='font-titleFont text-textGreen text-sm tracking-wide'>Featured Project</p> }
                  <h3 className='text-2xl font-bold'>{projectName}</h3>
          <p className={ `bg-[#112240] text-xs md:text-base p-2 ${(index & 1) == 1 && `xl:-mr-10`} md:p-6 rounded-md ${(index & 1) == 0 && `w-[96%]`}` }>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum nobis ratione atque dignissimos, facilis distinctio enim vitae ab reprehenderit, facere eum qui cupiditate neque quaerat explicabo ducimus sapiente quam rem!
              <span className='text-textGreen'> 0-Auth </span> and then the purchase using
              <span className='text-textGreen'> Stripe </span>
            </p>
            <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
              {
                techStackArr.map( ( tech: IconObject, index: number ) => (
                   <li key={ index } className='flex items-center gap-2 hover:text-textGreen cursor-pointer duration-300'>
                    <span className='text-textGreen'>{tech?.icon}</span>{tech.name}
                  </li>
                ))
              }
            </ul>
            <div className='text-2xl flex gap-4'>
              {
                iconObjectArr.map((icon: IconObject, index: number ) =>
                  <a
                    className='text-md hover:text-textGreen cursor-pointer duration-300'
                    key={ index } href={ icon.link } target="_blank" rel="noopener noreferrer" aria-label={ icon.name }>
                    { icon.icon ? icon.icon : icon.name}
                  </a>
                )
              }
            </div>
          </div>
        </div>
      </div>
  )
}

export default Project