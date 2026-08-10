import { ProjectData } from '@/shared/ProjectData';
import { IconObject } from '@/shared/UserData';
import Image from 'next/image';
import React from 'react'
import { VscGithubAlt } from 'react-icons/vsc';
import { RxOpenInNewWindow } from 'react-icons/rx';

type Props = {
  projectInfo: ProjectData,
  index: number
}

const Project = ( { projectInfo, index }: Props ) => {
    const { featured, projectName, description, majorTechStacks, imageLinks, imageAlternateName, githubLink, projectLink } = projectInfo;
    const projectImage = imageLinks?.[0];

  return (
    <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
      <div className={ `flex flex-col
      ${ ( ( index & 1 ) == 1 ) ? `xl:flex-row-reverse` : `xl:flex-row` } gap-6` }>
          <a className='w-full xl:w-1/2 h-auto relative group' href={projectLink || githubLink || '#'} target='_blank' rel='noopener noreferrer' aria-label={imageAlternateName}>
          <div>
            {projectImage && <Image className='w-full h-full object-contain' src={projectImage} alt={imageAlternateName} />}
            </div>
          </a>
        <div className={ `w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right ${(index & 1) ==0 && `xl:-ml-16`} z-10` }>
            { featured && <p className='font-titleFont text-textGreen text-sm tracking-wide'>Featured Project</p> }
                  <h3 className='text-2xl font-bold'>{projectName}</h3>
          <p className={ `bg-[#112240] text-xs md:text-base p-2 ${(index & 1) == 1 && `xl:-mr-10`} md:p-6 rounded-md ${(index & 1) == 0 && `w-[96%]`}` }>
              {description}
            </p>
            <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
              {
                majorTechStacks.map( ( tech: IconObject, index: number ) => (
                   <li key={ index } className='flex items-center gap-2 hover:text-textGreen cursor-pointer duration-300'>
                    <span className='text-textGreen'>{tech?.icon}</span>{tech.name}
                  </li>
                ))
              }
            </ul>
            <div className='text-2xl flex gap-4'>
              {githubLink &&
                  <a
                    className='text-md hover:text-textGreen cursor-pointer duration-300'
                    href={githubLink} target="_blank" rel="noopener noreferrer" aria-label='GitHub Repository'>
                    <VscGithubAlt />
                  </a>
              }
              {projectLink &&
                <a
                  className='text-md hover:text-textGreen cursor-pointer duration-300'
                  href={projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label='Live Project Link'
                >
                  <RxOpenInNewWindow />
                </a>
              }
            </div>
          </div>
        </div>
      </div>
  )
}

export default Project