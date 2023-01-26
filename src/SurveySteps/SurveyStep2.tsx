import React from 'react';

// components
import AppCardLayout from '@/components/AppCardLayout';
import HeaderWrapper from '@/components/HeaderWrapper';
import FooterButtonGroup from '@/components/FooterButtonGroup';
import { RadioGroup, RadioItem } from '@/components/RadioGroup';

// action
import { UPDATE_KEY_VALUE } from '@/reducer/action';

// const
import { SurveyStep2Const } from '@/const/eng';

// types
import { TWizardProps } from './types';

const SurveyStep2: React.FC<TWizardProps> = (props) => {
  const { title, radioOptions } = SurveyStep2Const;

  return (
    <HeaderWrapper title={title}>
      <RadioGroup
        label='device-type'
        className='flex flex-col md:flex-row gap-12 mt-16'
        defaultValue={props.form.os}
        onChange={(e) => {
          props.dispatchForm({
            type: UPDATE_KEY_VALUE,
            value: { os: e },
          });
        }}
      >
        {radioOptions.map((option, index) => (
          <RadioItem key={`device-type-${index}`} value={option.value}>
            <AppCardLayout title={option.label} image={option.icon} />
          </RadioItem>
        ))}
      </RadioGroup>

      <FooterButtonGroup
        containerStyles='mt-11'
        onBack={() => props.wizard.previousStep()}
        onContinue={() => props.wizard.nextStep()}
        disabled={!props.form.os}
      />
    </HeaderWrapper>
  );
};

export default SurveyStep2;
