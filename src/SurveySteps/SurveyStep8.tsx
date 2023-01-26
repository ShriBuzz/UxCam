import React from 'react';

// components
import Input from '@/components/Input';
import Button from '@/components/Button';
import HeaderWrapper from '@/components/HeaderWrapper';

// action
import { UPDATE_KEY_VALUE } from '@/reducer/action';

// const
import { SurveyStep8Const, ButtonText } from '@/const/eng';

// types
import { TWizardProps } from './types';

const SurveyStep8: React.FC<TWizardProps> = (props) => {
  const { title, inputPlaceholder } = SurveyStep8Const;
  return (
    <HeaderWrapper title={title}>
      <div className='w-full mt-12 mb-16'>
        <Input
          placeholder={inputPlaceholder}
          value={props.form.email || ''}
          type='email'
          onChange={(e) => {
            props.dispatchForm({
              type: UPDATE_KEY_VALUE,
              value: { email: e.target.value },
            });
          }}
        />
      </div>

      <Button
        title={ButtonText.submit}
        size='large'
        onClick={() => {
          console.log('submit', props.form);
          props.wizard.nextStep();
        }}
        disabled={!props.form.email}
      />
    </HeaderWrapper>
  );
};

export default SurveyStep8;
