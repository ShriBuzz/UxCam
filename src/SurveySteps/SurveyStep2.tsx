import React from 'react';

// components
import Button from '@/components/Button';
import AppCardLayout from '@/components/AppCardLayout';
import { RadioGroup, RadioItem } from '@/components/RadioGroup';

// const
import { SurveyStep2Const, ButtonText } from '@/const/eng';

const SurveyStep2: React.FC = () => {
  const { title, radioOptions } = SurveyStep2Const;

  return (
    <div className='survey-container'>
      <h2 className='h2 mb-16'>{title}</h2>

      <RadioGroup label='device-type' className='flex flex-row gap-12'>
        {radioOptions.map((option, index) => (
          <RadioItem key={`device-type-${index}`} value={option.value}>
            <AppCardLayout title={option.label} image={option.icon} />
          </RadioItem>
        ))}
      </RadioGroup>

      <div className='w-full max-w-[700px] flex justify-between items-center mt-11 px-[6px]'>
        <Button title={ButtonText.back} size='small' variant='outline' />
        <Button title={ButtonText.continue} size='small' />
      </div>
    </div>
  );
};

export default SurveyStep2;
