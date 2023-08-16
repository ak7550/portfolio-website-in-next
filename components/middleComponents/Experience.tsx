import React, { useState } from 'react'
import SectionTitle from '../SectionTitle'
import ReactBD from './CompanyData';
import { WorkExprienceObject, workExprienceArr } from '@/shared/UserWorkExprienceData';

const Experience = () => {
  const [indexState, setIndexState] = useState(0);

  const handleClick = (event: React.MouseEvent, index: number):void => setIndexState(index);

  return (
      <section
          id='exprience'
          className='max-w-containerxs mx-auto py-10 lgl:py-24 px-4'>
          <SectionTitle title='Where I have worked' titleNo='02' />
          <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
             <ul className='md:w-32 flex flex-col '>
              {
                workExprienceArr.map(( workExprience: WorkExprienceObject, index: number) =>
                 <li
                  key={index}
                  onClick={e => handleClick(e, index)}
                  className={` ${index === indexState ? `border-l-textGreen text-textGreen` : `border-l-hoverColor text-textDark`} border-1-2 border-1-hoverColor text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer delay-300 px-8 font-medium`}>
                  {workExprience.companyDetail.name}
                </li>)
              }
            </ul>
            <ReactBD companyInfo={workExprienceArr[indexState]} />
          </div>
    </section>
  )
}

export default Experience