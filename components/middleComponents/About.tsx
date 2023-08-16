import React from 'react'
import SectionTitle from '../SectionTitle'
import { IconObject, techStackArr } from '@/shared/UserData';
import Image from 'next/image';
import profileImage from '../../public/assets/images/ProfileImge.jpg';


const About = () => {
  return (
      <section
          id='about'
          className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8'
      >
          <SectionTitle title='About Me' titleNo='01' />
          <div
              className='flex flex-col lg:flex-row gap-16'
          >
              <div className='w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4'>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus nostrum natus quod exercitationem placeat optio doloribus debitis, nam earum similique rem eveniet soluta obcaecati cupiditate? Corrupti debitis molestiae tempore aut.</p>
                  <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi esse quisquam repellendus impedit quo labore? Aliquam perferendis delectus, voluptatem alias nostrum, porro odio obcaecati exercitationem temporibus quam consequatur eligendi earum?
                      <span className='text-textGreen'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod assumenda </span>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, adipisci praesentium voluptates alias, quo iusto architecto, et officiis facilis quae aut minima consectetur eum? Explicabo laudantium tenetur deleniti necessitatibus voluptates!
                      <span className='text-textGreen'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod assumenda </span>
                  </p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod assumenda </p>

                  <p>Here are few technologies that I have worked so far.</p>
                  <ul className='min-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6'>
                      {
                          techStackArr.map((tech: IconObject, index: number): JSX.Element =>
                              <li
                                  key={index}
                                  className='flex items-center gap-2'
                              >
                                  <span className='text-textGreen'>{tech?.icon}</span>{tech.name}
                              </li>)
                      }
                  </ul>
            </div>
              <div className='w-full lgl:w-1/3 h-80 relative group'>
                  <div className='absolute w-full h-80 -left-6 -top-6 rounded-lg'>
                    <div className='w-full h-full relative z-20 flex pl-6 lgl:pl-0'>
                          <Image
                              src={profileImage}
                              className='rounded-lg h-full object-cover'
                              alt='profileImage'
                          />
                          <div className='hidden lgl:inline-block absolute w-full h-80 bg-textGreen/30
                          rounded-md top-0 left-0 group-hover:bg-transparent duration-300'></div>
                    </div>
                  </div>
                <div className='hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300'></div>
            </div>
          </div>
      </section>
  )
}

export default About