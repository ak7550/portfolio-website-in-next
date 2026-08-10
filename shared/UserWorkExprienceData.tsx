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
      name: 'NetApp (Marketplace Control Tower)',
      link: ""
    },
    startDate: 'Jan 2026',
    endDate: 'Present',
    majorTechStacks: [techStackArr[0], techStackArr[2], techStackArr[3]],
    position: 'Software Engineer 3',
    notableContributions: [
      'Designed the high-level architecture and led a cross-functional team of 4 engineers to build and deploy an end-to-end AI chat application using NestJS, Next.js, and OpenAI SDK.',
      'Engineered a Node.js MCP server to query production and analytics data, enabling LLM-assisted root-cause analysis for charging anomalies.',
      'Upgraded Helm charts and established Jenkins CI/CD to ship shared licensing microservices across internal Kubernetes clusters.',
      'Contributed core architecture design for Marketplace Control Tower with Go, Temporal, and Dynatrace as part of the founding engineering team.',
    ],
  },
  {
    companyDetail: {
      name: 'NetApp (BlueXP)',
      link: ""
    },
    startDate: 'Sep 2023',
    endDate: 'Jul 2026',
    majorTechStacks: [
      techStackArr[0], techStackArr[1], techStackArr[3]
    ],
    position: 'MTS: Software Engineer II',
    notableContributions: [
      'Built a vanilla JavaScript back-charging engine that recovered about $1M in previously unbilled revenue in a single quarter.',
      'Developed a revenue-loss calculator that reduced manual calculation effort by 52% year-over-year for overcharge and drop-charge analysis.',
      'Created a charging-alert investigation service that reduced production charging errors and related incidents by 12%.',
      'Implemented a billing-preference API in Node.js and Fastify to let customers choose subscription billing routes and improve billing flexibility.',
    ],
  },
  {
    companyDetail: {
      name: 'Anchanto',
      link: ""
    },
    startDate: 'Jun 2022',
    endDate: 'Sep 2023',
    majorTechStacks: [
      techStackArr[0], techStackArr[1], techStackArr[5]
    ],
    position: 'Software Engineer',
    notableContributions: [
      'Integrated Anchanto OMS with 8+ international marketplaces and carriers via asynchronous REST and SOAP APIs, supporting go-live and UAT across all integration projects.',
      'Implemented retry logic, improved logging throughput, and restructured schedulers to improve server performance by 28% at scale.',
      'Designed and maintained scalable backend services across SQL and NoSQL stacks for distributed order and parcel workflows.',
    ],
  },
];

export type {WorkExprienceObject};
export {workExprienceArr}
