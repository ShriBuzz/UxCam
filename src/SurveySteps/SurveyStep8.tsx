import React from 'react';

// components
import Input from '@/components/Input';
import Button from '@/components/Button';
import HeaderWrapper from '@/components/HeaderWrapper';

// const
import { SurveyStep8Const, ButtonText } from '@/const/eng';

const SurveyStep8: React.FC = () => {
  const { title, inputPlaceholder } = SurveyStep8Const;
  return (
    <HeaderWrapper title={title}>
      <div className='w-full mt-12 mb-16'>
        <Input placeholder={inputPlaceholder} />
      </div>

      <Button title={ButtonText.submit} size='large' />
    </HeaderWrapper>
  );
};

export default SurveyStep8;
