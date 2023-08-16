import React from 'react'
import { IconObject, iconObjectArr } from '@/shared/UserData';

const LeftSide = () => {
  return (
      <div className='w-full h-full flex flex-col items-center justify-end gap-6 text-textLight'>
          <div className='flex flex-col gap-4'>
              {
                  iconObjectArr.map((iconObj: IconObject, index: number) : React.ReactNode => (
                      <a key={index} href={iconObj.link} target="_blank" rel="noopener noreferrer">
                          <span
                              className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center
                        hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300'>
                           {iconObj.icon}
                        </span>
                    </a>
                  ))
              }
          </div>
          <div className='w-[2px] h-32 bg-textDark'></div>
      </div>
  )
}

export default LeftSide