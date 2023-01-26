import React from 'react';

// components
import Input from '@/components/Input';
import HeaderWrapper from '@/components/HeaderWrapper';
import FooterButtonGroup from '@/components/FooterButtonGroup';

// const
import { SurveyStep6Const } from '@/const/eng';

const SurveyStep6: React.FC = () => {
  const { title, article, inputPlaceholder } = SurveyStep6Const;
  return (
    <HeaderWrapper title={title} subtitle={article}>
      <div className='w-full mt-16'>
        <Input placeholder={inputPlaceholder} />
      </div>

      <FooterButtonGroup />
    </HeaderWrapper>
  );
};

export default SurveyStep6;
