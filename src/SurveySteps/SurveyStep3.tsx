import React from 'react';

// components
import AppCardLayout from '@/components/AppCardLayout';
import HeaderWrapper from '@/components/HeaderWrapper';
import FooterButtonGroup from '@/components/FooterButtonGroup';
import { RadioGroup, RadioItem } from '@/components/RadioGroup';

// action
import { UPDATE_KEY_VALUE } from '@/reducer/action';

// const
import { SurveyStep3Const } from '@/const/eng';

// types
import { TWizardProps } from './types';

const SurveyStep3: React.FC<TWizardProps> = (props) => {
  const { title, checkboxOptions } = SurveyStep3Const;

  return (
    <HeaderWrapper title={title} titleStyles='max-w-[592px]'>
      <RadioGroup
        className='max-w-[1056px] mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-9'
        defaultValue={props.form.framework}
        onChange={(e) => {
          props.dispatchForm({
            type: UPDATE_KEY_VALUE,
            value: { framework: e },
          });
        }}
      >
        {checkboxOptions.map((option, index) => (
          <RadioItem
            key={`framework-${index}`}
            value={option.value}
            containerStyles='w-[320px] lg:w-[280px] xl:w-[320px]'
          >
            <AppCardLayout
              title={option.label}
              image={option.icon}
              titleSize='medium'
            />
          </RadioItem>
        ))}
      </RadioGroup>

      <FooterButtonGroup
        onBack={() => props.wizard.previousStep()}
        onContinue={() => props.wizard.nextStep()}
        disabled={!props.form.framework || props.form.framework.length === 0}
      />
    </HeaderWrapper>
  );
};

export default SurveyStep3;
