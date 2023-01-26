import React from 'react';

// components
import Input from '@/components/Input';
import FooterButtonGroup from '@/components/FooterButtonGroup';

// const
import { SurveyStep6Const } from '@/const/eng';

const SurveyStep6: React.FC = () => {
  const { title, article, inputPlaceholder } = SurveyStep6Const;
  return (
    <div className='survey-container'>
      <h2 className='h2 max-w-[720px]'>{title}</h2>

      <p className='roboto max-w-[720px] text-primary-storm mt-6 text-lg'>
        {article}
      </p>

      <div className='w-full mt-16'>
        <Input placeholder={inputPlaceholder} />
      </div>

      <FooterButtonGroup />
    </div>
  );
};

export default SurveyStep6;
