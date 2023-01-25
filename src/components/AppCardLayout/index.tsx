import React from 'react'

// types
import {TAppCardLayout} from './types';

const AppCardLayout:React.FC<TAppCardLayout> = ({title, image}) => {
  return (
    <>
            <span className='w-[120px] h-full flex-center'>
              <img
                className='w-[50%] h-[50%] object-contain'
                src={image}
              />
            </span>

            <p className='text-h3 font-semibold flex-center'>{title}</p>
          </>
  )
}

export default AppCardLayout