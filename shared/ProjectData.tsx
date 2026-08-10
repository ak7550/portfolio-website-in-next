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
    githubLink?: string,
    projectLink?: string,
}

const projectInfoArr: ProjectData[] = [
  {
    projectName: 'Multi-Broker Algorithmic Trading Automation',
    featured: true,
    imageLinks: [amazonImage],
    imageAlternateName: 'Multi-Broker Trading Automation',
    majorTechStacks: [techStackArr[0], techStackArr[1], techStackArr[3]],
    description: <>Autonomous trading automation platform running daily in production. It ingests TradingView and messaging signals, evaluates strategies against live market data, and executes orders across broker integrations with strong retry controls and observability.</>,
    githubLink: 'https://github.com/ak7550',
  },
  {
    projectName: 'AI Charging Investigation Assistant',
    featured: true,
    imageLinks: [amazonImage],
    imageAlternateName: 'AI Charging Investigation Assistant',
    majorTechStacks: [techStackArr[0], techStackArr[2], techStackArr[7]],
    description: <>End-to-end internal AI chat application for charging anomaly investigations, built with NestJS, Next.js, and OpenAI SDK. It reduced investigation turnaround by combining domain workflows with LLM-assisted diagnostics.</>,
  },
  {
    projectName: 'Revenue Recovery Back-Charging Engine',
    featured: true,
    imageLinks: [amazonImage],
    imageAlternateName: 'Revenue Recovery Back-Charging Engine',
    majorTechStacks: [techStackArr[0], techStackArr[6]],
    description: <>A backend charging engine that identified unbilled customer usage windows and retroactively generated accurate charges, helping recover approximately $1M in lost revenue in one quarter.</>,
  },
  {
    projectName: 'Postiz Open Source Contribution',
    featured: false,
    imageLinks: [amazonImage],
    imageAlternateName: 'Postiz Open Source Contribution',
    majorTechStacks: [techStackArr[1], techStackArr[2]],
    description: <>Implemented and shipped a Short.io provider integration for Postiz, adding URL shortening and analytics support through a maintainable multi-provider architecture that was reviewed and merged upstream.</>,
    githubLink: 'https://github.com/gitroomhq/postiz-app/pull/564',
  }
];

const archieveProjects: ArchieveData[] = projectInfoArr.filter((project: ProjectData): boolean => !project.featured);

export type { ProjectData, ArchieveData };
export { projectInfoArr, archieveProjects };