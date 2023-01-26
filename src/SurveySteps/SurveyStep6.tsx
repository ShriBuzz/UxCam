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

const linkRegex = new RegExp(
  'https?://(www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)'
);

const SurveyStep6: React.FC<TWizardProps> = (props) => {
  const { title, article, inputPlaceholder } = SurveyStep6Const;

  function isValidUrl(link: string) {
    try {
      new URL(link);
      return true;
    } catch (err) {
      return false;
    }
  }

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
          pattern='https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)'
        />
      </div>

      <FooterButtonGroup
        onBack={() => props.wizard.previousStep()}
        onContinue={() => {
          if (props.form.appLink) {
            if (isValidUrl(props.form.appLink)) {
              props.wizard.nextStep();
              return;
            } else {
              alert('Please enter a valid link.');
              return;
            }
          }
          props.dispatchForm({
            type: UPDATE_KEY_VALUE,
            value: { appLink: '' },
          });
          props.wizard.nextStep();
        }}
      />
    </HeaderWrapper>
  );
};

export default SurveyStep6;
