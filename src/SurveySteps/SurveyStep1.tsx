import React from 'react';

// components
import Button from '@/components/Button';

// const
import { SurveyStep1Const, ButtonText } from '@/const/eng';

const SurveyStep1: React.FC = () => {
  const { title, subtitle, article } = SurveyStep1Const;

  return (
    <div className='survey-container'>
      <h1 className='h1 mb-6 max-w-[800px] mt-4'>{title}</h1>

      <p className='roboto text-lg'>{article}</p>

      <p className='text-h3 font-semibold text-primary-sky mt-12 mb-16 max-w-[900px]'>
        {subtitle}
      </p>

      <Button title={ButtonText.continue} size='large' />
    </div>
  );
};

export default SurveyStep1;
