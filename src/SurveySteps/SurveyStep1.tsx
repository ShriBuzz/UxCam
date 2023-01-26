import React from 'react';

// components
import Button from '@/components/Button';
import HeaderWrapper from '@/components/HeaderWrapper';

// const
import { SurveyStep1Const, ButtonText } from '@/const/eng';

const SurveyStep1: React.FC = () => {
  const { title, subtitle, article } = SurveyStep1Const;

  return (
    <HeaderWrapper
      title={title}
      subtitle={article}
      titleStyles='max-w-[800px] mt-4'
      subtitleStyles='!text-primary-midnight'
    >
      <p className='text-h3 leading-[42px] font-semibold text-primary-sky mt-12 mb-16 max-w-[900px]'>
        {subtitle}
      </p>

      <Button title={ButtonText.continue} size='large' />
    </HeaderWrapper>
  );
};

export default SurveyStep1;
