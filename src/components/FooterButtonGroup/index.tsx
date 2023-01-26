import React from 'react';

// components
import Button from '@/components/Button';

// consts
import { ButtonText } from '@/const/eng';

// types
import { TFooterButtonGroup } from './types';

const FooterButtonGroup: React.FC<TFooterButtonGroup> = ({
  onContinue,
  onBack,
  containerStyles,
}) => {
  return (
    <div
      className={`w-full max-w-[700px] flex justify-between items-center mt-12 px-[6px]
        ${containerStyles}
    `}
    >
      <Button
        title={ButtonText.back}
        size='small'
        variant='outline'
        onClick={onBack}
      />
      <Button title={ButtonText.continue} size='small' onClick={onContinue} />
    </div>
  );
};

export default FooterButtonGroup;
