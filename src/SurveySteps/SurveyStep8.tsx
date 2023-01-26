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

  function ValidateEmail(email: string) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    alert('Please enter a valid email address.');
    return false;
  }

  return (
    <HeaderWrapper title={title}>
      <div className='w-full mt-12 mb-16'>
        <Input
          placeholder={inputPlaceholder}
          required
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
          if (ValidateEmail(props.form.email)) {
            console.log('submit', JSON.stringify(props.form, null, 2));
            props.wizard.nextStep();
          }
        }}
        disabled={!props.form.email}
      />
    </HeaderWrapper>
  );
};

export default SurveyStep8;
