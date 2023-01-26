import React from 'react';

// types
import { TButton } from './types';

const Button: React.FC<TButton> = (props) => {
  const { size, title, variant, disabled, ...restProps } = props;

  function getButtonSizeStyles() {
    switch (size) {
      case 'small':
        return 'text-xs px-6 py-[2px]';
      case 'large':
        return 'text-lg px-6 py-[18px] min-w-[220px]';
      default: // default is medium
        return 'text-lg px-6 py-2.5';
    }
  }

  function getButtonVariantStyles() {
    switch (variant) {
      case 'outline':
        return `bg-transparent text-primary-sky border-2 border-primary-sky
        hover:border-primary-midnight hover:text-primary-midnight`;
      default: // default is solid
        return `bg-primary-sky text-primary-snow
        hover:bg-primary-midnight`;
    }
  }

  return (
    <button
      className={`rounded-full font-medium transition-all duration-300 ease-in-out
        disabled:opacity-50 disabled:cursor-default
        ${getButtonSizeStyles()}
        ${getButtonVariantStyles()}
    `}
      disabled={disabled}
      {...restProps}
    >
      <p className='min-h-[28px] flex justify-center items-center'>{title}</p>
    </button>
  );
};

export default Button;
