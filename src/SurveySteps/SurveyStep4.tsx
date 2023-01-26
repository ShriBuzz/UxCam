import React from 'react';

// const
import FooterButtonGroup from '@/components/FooterButtonGroup';
import { RadioGroup, RadioItem } from '@/components/RadioGroup';

// const
import { SurveyStep4Const } from '@/const/eng';

const SurveyStep4: React.FC = () => {
  const { title, article, radioOptions } = SurveyStep4Const;

  return (
    <div className='survey-container'>
      <h2 className='h2 max-w-[720px]'>{title}</h2>

      <p className='roboto max-w-[720px] text-primary-storm mt-6 mb-16 text-lg'>
        {article}
      </p>

      <RadioGroup className='max-w-[1056px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-9'>
        {radioOptions.map((option, index) => (
          <RadioItem
            key={`sessions-${index}`}
            value={option.value}
            containerStyles='px-6 py-7'
          >
            <p className='h1'>{option.label}</p>
          </RadioItem>
        ))}
      </RadioGroup>

      <FooterButtonGroup />
    </div>
  );
};

export default SurveyStep4;
