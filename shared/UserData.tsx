import { VscGithubAlt, VscFileCode } from "react-icons/vsc";
import { SiJavascript, SiReact, SiTypescript } from "react-icons/si";
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

const userBio: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias aspernatur ipsum neque quisquam nobis nostrum qui enim omnis esse! Officia sint sapiente, explicabo praesentium enim vel consequuntur. Iure, corrupti voluptate.";

const techStackArr: IconObject[] = [
    {
        link: 'https://www.javascript.com/',
        icon: <SiJavascript />,
        name: 'Javascript (Es6+)'
    },
    {
        link: 'https://www.typescriptlang.org/cheatsheets',
        icon: <SiTypescript />,
        name: 'Typescript'
    },
    {
        link: 'https://react.dev/learn',
        icon: <SiReact />,
        name: 'ReactJs'
    },
];


export { iconObjectArr, userFirstName, userLastName, userMiddleName, userBio, techStackArr, userEmail };
export type { IconObject };
