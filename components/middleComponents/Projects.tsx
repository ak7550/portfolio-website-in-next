import SectionTitle from '../SectionTitle';
import { ProjectData, projectInfoArr } from '@/shared/ProjectData';
import Project from './Project';

const Projects = () => {
  const featuredProjects: ProjectData[] = projectInfoArr.filter((project: ProjectData): boolean => project.featured);

  return (
    <section id='project' className='max-w-container mx-auto lgl:px-20 py-24'>
      <SectionTitle title='Projects that I have built so far...' titleNo='03' />
      <div className='w-full flex flex-col items-center justify-between gap-28 mt-10'>
      {
          featuredProjects.map( ( project: ProjectData, index: number ): React.ReactNode =>
        <Project key={project.projectName} projectInfo={ project } index={ index } /> )
      }
      </div>
    </section>
  )
}

export default Projects