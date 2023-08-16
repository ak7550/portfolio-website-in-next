import { userEmail } from '@/shared/UserData';
import React from 'react'

const RightSide = () => {
  return (
      <div className='w-full h-full flex flex-col items-center justify-end gap-6 text-textLight'>
      <a href={ `mailto:${userEmail}` } className='flex flex-col gap-4'>
              <p className='text-sm hover:font-semibold rotate-90 tracking-wide text-textGreen bottom-0  w-[57vh] relative'>
                {userEmail}
              </p>
          </a>

          <div className='w-[2px] h-28 bg-textDark inline-flex'></div>
      </div>
  )
}

export default RightSide