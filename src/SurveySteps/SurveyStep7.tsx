import React from 'react';

// components
import HeaderWrapper from '@/components/HeaderWrapper';
import {
  CheckboxGroup,
  CheckboxItemWithLabel,
} from '@/components/CheckboxGroup';

// const
import { SurveyStep7Const } from '@/const/eng';
import FooterButtonGroup from '@/components/FooterButtonGroup';

const SurveyStep7: React.FC = () => {
  const { title, article, checkboxOptions } = SurveyStep7Const;
  return (
    <HeaderWrapper title={title} subtitle={article}>
      <CheckboxGroup className='max-w-[720px] mt-16 grid grid-cols-2 gap-x-16 gap-y-6'>
        {checkboxOptions.map((option, index) => (
          <CheckboxItemWithLabel
            key={`imporve-${index}`}
            label={option.label}
            value={option.label}
          />
        ))}
      </CheckboxGroup>

      <FooterButtonGroup />
    </HeaderWrapper>
  );
};

export default SurveyStep7;
