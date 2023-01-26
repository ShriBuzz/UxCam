import React from 'react';

// components
import HeaderWrapper from '@/components/HeaderWrapper';

// const
import { SurveyStep9Const } from '@/const/eng';

// types
import { TWizardProps } from './types';

const SurveyStep9: React.FC<TWizardProps> = () => {
  return (
    <HeaderWrapper
      title={SurveyStep9Const.title}
      containerStyles='mt-[108px]'
    />
  );
};

export default SurveyStep9;
