import React from 'react';

// components
import HeaderWrapper from '@/components/HeaderWrapper';

// const
import { SurveyStep9Const } from '@/const/eng';

const SurveyStep9 = () => {
  return (
    <HeaderWrapper
      title={SurveyStep9Const.title}
      containerStyles='mt-[108px]'
    />
  );
};

export default SurveyStep9;
