import React from 'react';

// types
import { TInput } from './types';

const Input: React.FC<TInput> = (props) => {
  const { containerStyles, ...restprops } = props;
  return (
    <input
      className={`w-full h-[64px] max-w-[720px] bg-primary-snow px-6 py-5 border-b-[1.33px] border-primary-fog placeholder-primary-shadow text-sm
        ${containerStyles}
        focus:border-primary-sky focus:outline-none
      `}
      {...restprops}
    />
  );
};

export default Input;
