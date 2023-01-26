import React from 'react';

// types
import { THeaderWrapper } from './types';

const HeaderWrapper: React.FC<THeaderWrapper> = ({
  title,
  subtitle,
  children,
  titleStyles,
  subtitleStyles,
}) => {
  return (
    <div className='survey-container'>
      <h2 className={`h2 max-w-[720px] ${titleStyles}`}>{title}</h2>

      {subtitle && (
        <p
          className={`roboto max-w-[720px] text-primary-storm mt-6 text-lg
            ${subtitleStyles}
        `}
        >
          {subtitle}
        </p>
      )}

      {children}
    </div>
  );
};

export default HeaderWrapper;
