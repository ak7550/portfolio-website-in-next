import { StaticImageData } from "next/image";
import { IconObject, techStackArr } from "./UserData";
import amazonImage from '../public/assets/images/amazonImage.png';

interface ProjectData extends ArchieveData  {
    imageLinks: StaticImageData[],
};

interface ArchieveData {
    projectName: string,
    featured: boolean,
    majorTechStacks: IconObject[],
    imageAlternateName: string,
    description: React.ReactNode,
    projectLink?: string,
}

const projectInfoArr: ProjectData[] = [
  {
    projectName: 'Amazon Clone 2.0',
    featured: true,
    imageLinks: [amazonImage],
    imageAlternateName: 'AmazonImage',
    majorTechStacks: [techStackArr[0], techStackArr[1]],
    description: <>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum nobis ratione atque dignissimos, facilis distinctio enim vitae ab reprehenderit, facere eum qui cupiditate neque quaerat explicabo ducimus sapiente quam rem!
              <span className='text-textGreen'> 0-Auth </span> and then the purchase using
              <span className='text-textGreen'> Stripe </span></>
  },
  {
    projectName: 'Amazon Clone 2.0',
    featured: true,
    imageLinks: [amazonImage],
    imageAlternateName: 'AmazonImage',
    majorTechStacks: [techStackArr[0], techStackArr[1]],
    description: <>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum nobis ratione atque dignissimos, facilis distinctio enim vitae ab reprehenderit, facere eum qui cupiditate neque quaerat explicabo ducimus sapiente quam rem!
              <span className='text-textGreen'> 0-Auth </span> and then the purchase using
              <span className='text-textGreen'> Stripe </span></>
  },
  {
    projectName: 'Amazon Clone 2.0',
    featured: true,
    imageLinks: [amazonImage],
    imageAlternateName: 'AmazonImage',
    majorTechStacks: [techStackArr[0], techStackArr[1]],
    description: <>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum nobis ratione atque dignissimos, facilis distinctio enim vitae ab reprehenderit, facere eum qui cupiditate neque quaerat explicabo ducimus sapiente quam rem!
              <span className='text-textGreen'> 0-Auth </span> and then the purchase using
              <span className='text-textGreen'> Stripe </span></>
  },
  {
    projectName: 'Amazon Clone 2.0',
    featured: true,
    imageLinks: [amazonImage],
    imageAlternateName: 'AmazonImage',
    majorTechStacks: [techStackArr[0], techStackArr[1]],
    description: <>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum nobis ratione atque dignissimos, facilis distinctio enim vitae ab reprehenderit, facere eum qui cupiditate neque quaerat explicabo ducimus sapiente quam rem!
              <span className='text-textGreen'> 0-Auth </span> and then the purchase using
              <span className='text-textGreen'> Stripe </span></>
  }
];

const archieveProjects: ArchieveData[] = projectInfoArr;

export type { ProjectData, ArchieveData };
export { projectInfoArr, archieveProjects };