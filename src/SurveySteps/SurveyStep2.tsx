import React from 'react';

// components
import AppCardLayout from '@/components/AppCardLayout';
import HeaderWrapper from '@/components/HeaderWrapper';
import FooterButtonGroup from '@/components/FooterButtonGroup';
import { RadioGroup, RadioItem } from '@/components/RadioGroup';

// const
import { SurveyStep2Const } from '@/const/eng';

const SurveyStep2: React.FC = () => {
  const { title, radioOptions } = SurveyStep2Const;

  return (
    <HeaderWrapper title={title}>
      <RadioGroup label='device-type' className='flex flex-row gap-12 mt-16'>
        {radioOptions.map((option, index) => (
          <RadioItem key={`device-type-${index}`} value={option.value}>
            <AppCardLayout title={option.label} image={option.icon} />
          </RadioItem>
        ))}
      </RadioGroup>

      <FooterButtonGroup containerStyles='mt-11' />
    </HeaderWrapper>
  );
};

export default SurveyStep2;
