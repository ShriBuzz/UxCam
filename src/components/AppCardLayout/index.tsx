import React from 'react';

// types
import { TAppCardLayout } from './types';

const AppCardLayout: React.FC<TAppCardLayout> = ({
  title,
  image,
  titleSize,
}) => {
  return (
    <>
      <span className='w-[120px] lg:w-[100px] xl:w-[120px] h-full flex-center'>
        {image ? (
          <img className='w-[50%] h-[50%] object-contain' src={image} />
        ) : (
          <span className='w-16 h-16 rounded-full bg-primary-grey' />
        )}
      </span>

      <p
        className={`flex-1 justify-start items-center font-semibold flex-center break-all max-w-[90%]
        ${titleSize === 'medium' ? 'text-2xl' : 'text-h3'}
      `}
      >
        {title}
      </p>
    </>
  );
};

export default AppCardLayout;
