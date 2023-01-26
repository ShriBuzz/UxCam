import React from 'react';

// components
import AppCardLayout from '@/components/AppCardLayout';
import HeaderWrapper from '@/components/HeaderWrapper';
import FooterButtonGroup from '@/components/FooterButtonGroup';
import { CheckboxGroup, CheckboxItem } from '@/components/CheckboxGroup';

// const
import { SurveyStep5Const } from '@/const/eng';

const SurveyStep5: React.FC = () => {
  const { title, checkboxOptions, article } = SurveyStep5Const;

  return (
    <HeaderWrapper title={title} subtitle={article}>
      <CheckboxGroup className='max-w-[1056px] mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-9'>
        {checkboxOptions.map((option, index) => (
          <CheckboxItem
            key={`framework-${index}`}
            value={option.value}
            containerStyles='w-[320px] lg:w-[280px] xl:w-[320px]'
          >
            <AppCardLayout
              title={option.label}
              image={option.icon}
              titleSize='medium'
            />
          </CheckboxItem>
        ))}
      </CheckboxGroup>

      <FooterButtonGroup />
    </HeaderWrapper>
  );
};

export default SurveyStep5;
