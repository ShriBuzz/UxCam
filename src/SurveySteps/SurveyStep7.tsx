import React from 'react';

// components
import HeaderWrapper from '@/components/HeaderWrapper';
import {
  CheckboxGroup,
  CheckboxItemWithLabel,
} from '@/components/CheckboxGroup';

// action
import { UPDATE_KEY_VALUE } from '@/reducer/action';

// const
import { SurveyStep7Const } from '@/const/eng';
import FooterButtonGroup from '@/components/FooterButtonGroup';

// types
import { TWizardProps } from './types';

const SurveyStep7: React.FC<TWizardProps> = (props) => {
  const { title, article, checkboxOptions } = SurveyStep7Const;
  return (
    <HeaderWrapper title={title} subtitle={article}>
      <CheckboxGroup
        className='max-w-[720px] mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6'
        defaultValue={props.form.improvement}
        onChange={(e) => {
          props.dispatchForm({
            type: UPDATE_KEY_VALUE,
            value: { improvement: e },
          });
        }}
      >
        {checkboxOptions.map((option, index) => (
          <CheckboxItemWithLabel
            key={`imporve-${index}`}
            label={option.label}
            value={option.label}
          />
        ))}
      </CheckboxGroup>

      <FooterButtonGroup
        onBack={() => props.wizard.previousStep()}
        onContinue={() => props.wizard.nextStep()}
        disabled={
          !props.form.improvement || props.form.improvement.length === 0
        }
      />
    </HeaderWrapper>
  );
};

export default SurveyStep7;
