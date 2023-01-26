import React from 'react';

// types
import { TProgressBar } from './types';

const ProgressBar: React.FC<TProgressBar> = ({ currentStep, totalSteps }) => {
  return (
    <div className='relative w-full h-3 bg-primary-snow'>
      <div
        style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        className='absolute max-w-full top-0 left-0 h-full bg-primary-sky transition-all duration-500 ease-in-out'
      ></div>
    </div>
  );
};

export default ProgressBar;
