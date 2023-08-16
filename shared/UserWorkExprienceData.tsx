import {IconObject, techStackArr} from './UserData';

type WorkExprienceObject = {
  companyDetail: IconObject;
  startDate: string;
  endDate: string;
  notableContributions: string[];
  majorTechStacks: IconObject[];
  position: string;
};

//! In notable contributions, there should be array of ReactNode that will be rendered at runtime, add necessary styling in all the ReactNodes while implementing it.


const workExprienceArr: WorkExprienceObject[] = [
  {
    companyDetail: {
      name: 'Anchanto',
      link: ""
    },
    startDate: 'Jan 2022',
    endDate: 'June 2022',
    majorTechStacks: [techStackArr[0], techStackArr[1]],
    position: 'Software Developer Intern',
    notableContributions: [
      "Built Backend server with 15+ REST API's on NodeJs and MySQL as database.",
      'Implemented a client-side SPA with widgets on ReactJs.',
    ],
  },
  {
    companyDetail: {
      name: 'Anchanto',
      link: ""
    },
    startDate: 'July 2022',
    endDate: 'Present',
    majorTechStacks: [
      techStackArr[0], techStackArr[1]
    ],
    position: 'Backend Software Developer',
    notableContributions: [
      "Integrated Anchanto product service OMS with more than 8 marketplaces and carriers like Haravan (Vietnam), Quipup(UAE), Salla (UAE), Shopee (Korea), Grabmart, JD.com (Thailand) etc, via asynchronous REST/SOAP APIs/Plug-ins which increased the scalability and broadened the product's horizon.",
    ],
  },
];

export type {WorkExprienceObject};
export {workExprienceArr}
