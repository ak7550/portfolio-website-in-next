import React from 'react'

type SectionTitleProp = {
    title: string;
    titleNo: string;
};

const SectionTitle = ({title, titleNo} : SectionTitleProp): React.ReactNode => {
  return (
      <h2 className='font-titleFont text-2xl font-semibold flex items-center'>
          <span className='text-base md:text-lg text-textGreen mr-2'>{titleNo}.</span> {title}
          <div className="hidden md:inline-flex md:w-60 lgl:w-72 h-[.5px] bg-gray-700 ml-6"></div>
      </h2>
  )
}

export default SectionTitle