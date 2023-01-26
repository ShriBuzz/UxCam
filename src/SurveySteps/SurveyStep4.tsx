import React from 'react';

// const
import HeaderWrapper from '@/components/HeaderWrapper';
import FooterButtonGroup from '@/components/FooterButtonGroup';
import { RadioGroup, RadioItem } from '@/components/RadioGroup';

// const
import { SurveyStep4Const } from '@/const/eng';

const SurveyStep4: React.FC = () => {
  const { title, article, radioOptions } = SurveyStep4Const;

  return (
    <HeaderWrapper title={title} subtitle={article}>
      <RadioGroup className='max-w-[1056px] mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-9'>
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
    </HeaderWrapper>
  );
};

export default SurveyStep4;
