import React from 'react';

// components
import Input from '@/components/Input';
import HeaderWrapper from '@/components/HeaderWrapper';
import FooterButtonGroup from '@/components/FooterButtonGroup';

// action
import { UPDATE_KEY_VALUE } from '@/reducer/action';

// const
import { SurveyStep6Const } from '@/const/eng';

// types
import { TWizardProps } from './types';

const SurveyStep6: React.FC<TWizardProps> = (props) => {
  const { title, article, inputPlaceholder } = SurveyStep6Const;
  return (
    <HeaderWrapper title={title} subtitle={article}>
      <div className='w-full mt-16'>
        <Input
          placeholder={inputPlaceholder}
          value={props.form.appLink || ''}
          onChange={(e) => {
            props.dispatchForm({
              type: UPDATE_KEY_VALUE,
              value: { appLink: e.target.value },
            });
          }}
        />
      </div>

      <FooterButtonGroup
        onBack={() => props.wizard.previousStep()}
        onContinue={() => props.wizard.nextStep()}
      />
    </HeaderWrapper>
  );
};

export default SurveyStep6;
