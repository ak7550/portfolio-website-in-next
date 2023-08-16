import SectionTitle from '../SectionTitle';
import { ProjectData, projectInfoArr } from '@/shared/ProjectData';
import Project from './Project';

const Projects = () => {
  return (
    <section id='project' className='max-w-container mx-auto lgl:px-20 py-24'>
      <SectionTitle title='Projects that I have built so far...' titleNo='03' />
      <div className='w-full flex flex-col items-center justify-between gap-28 mt-10'>
      {
          projectInfoArr.map( ( project: ProjectData, index: number ): React.ReactNode =>
            <Project projectInfo={ project } index={ index } /> )
      }
      </div>
    </section>
  )
}

export default Projects