import { VscGithubAlt, VscFileCode } from "react-icons/vsc";
import {
    SiAmazonaws,
    SiJavascript,
    SiMongodb,
    SiNestjs,
    SiNodedotjs,
    SiPostgresql,
    SiReact,
    SiTypescript,
} from "react-icons/si";
import { SlSocialLinkedin, SlSocialTwitter } from "react-icons/sl";
import { FaStackOverflow } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";

type IconObject = {
    link: string,
    icon?: React.ReactNode,
    name: string
};


const iconObjectArr: IconObject[] = [
        {
            link: 'https://github.com/ak7550',
            icon: <VscGithubAlt />,
            name: 'GitHub'
        },
        {
            link: 'https://stackoverflow.com/users/8178112/a-k',
            icon: <FaStackOverflow />,
            name: 'StackOverflow'
        },
        {
            link: 'https://www.linkedin.com/in/aniket-kumar-ghosh-6ba368140/',
            icon: <SlSocialLinkedin />,
            name: 'LinkedIn'
        },
        {
            link: 'mailto:ghoshaniketkumar7@gmail.com',
            icon: <HiOutlineMailOpen />,
            name: 'Gmail'
        },
        {
            link: 'https://twitter.com/Ak___007___',
            icon: <SlSocialTwitter />,
            name: 'Twitter'
        },
        {
            link: 'https://leetcode.com/ak7550/',
            icon: <VscFileCode />,
            name: 'LeetCode'
        },
];

const userFirstName: string = "Aniket";
const userMiddleName: string = "Kumar";
const userLastName: string = "Ghosh";
const userEmail: string = "ghoshaniketkumar7@gmail.com";
const resumeDriveLink =
  'https://drive.google.com/file/d/1Sw-XVlXSCRPeMJNQ5PYbxoT0G9JXpCQi/view?usp=drivesdk'

const userHeadline: string = 'Software Engineer 3 @ NetApp';
const userRoleSummary: string =
    'Backend engineer focused on Node.js and TypeScript, building AI-integrated systems, MCP servers, and distributed billing platforms.';
const userBio: string =
    "Over 4 years, I have built and scaled mission-critical backend systems across billing, marketplace, and financial workflows. I focus on clean architecture, measurable business impact, and production reliability in distributed environments.";

const aboutParagraphs: string[] = [
    "I am a backend-heavy software engineer with 4+ years of experience building microservices, APIs, and event-driven systems with Node.js and TypeScript.",
    "At NetApp, I have worked across BlueXP and Marketplace Control Tower, where I built revenue recovery tooling, charging investigation services, and AI-assisted internal platforms that reduced manual investigation and operational effort.",
    "Before NetApp, I worked at Anchanto on order management and parcel tracking systems, integrating OMS workflows with 8+ international marketplaces and carriers through asynchronous REST and SOAP APIs.",
    "I enjoy building systems that balance business logic, scalability, and long-term maintainability, and I am currently open to backend-heavy and full-stack roles where product impact matters.",
];

const contactMessage: string =
    'I am currently open to backend-heavy and full-stack opportunities. If your team values clean architecture, business impact, and reliable systems, I would love to connect.';

const techStackArr: IconObject[] = [
    {
                link: 'https://nodejs.org/en',
                icon: <SiNodedotjs />,
                name: 'Node.js'
    },
    {
                link: 'https://www.typescriptlang.org/',
        icon: <SiTypescript />,
        name: 'Typescript'
    },
    {
                link: 'https://nestjs.com/',
                icon: <SiNestjs />,
                name: 'NestJS'
        },
        {
                link: 'https://aws.amazon.com/',
                icon: <SiAmazonaws />,
                name: 'AWS'
        },
        {
                link: 'https://www.postgresql.org/',
                icon: <SiPostgresql />,
                name: 'PostgreSQL'
        },
        {
                link: 'https://www.mongodb.com/',
                icon: <SiMongodb />,
                name: 'MongoDB'
        },
        {
                link: 'https://www.javascript.com/',
                icon: <SiJavascript />,
                name: 'JavaScript'
        },
        {
                link: 'https://react.dev/learn',
                icon: <SiReact />,
                name: 'React.js'
    },
];


export {
    iconObjectArr,
    userFirstName,
    userLastName,
    userMiddleName,
    userEmail,
    resumeDriveLink,
    userHeadline,
    userRoleSummary,
    userBio,
    aboutParagraphs,
    contactMessage,
    techStackArr,
};
export type { IconObject };
