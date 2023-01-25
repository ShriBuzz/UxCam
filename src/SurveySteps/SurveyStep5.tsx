import React from 'react';

// components
import AppCardLayout from '@/components/AppCardLayout';
import FooterButtonGroup from '@/components/FooterButtonGroup';
import { CheckboxGroup, CheckboxItem } from '@/components/CheckboxGroup';

// const
import { SurveyStep5Const } from '@/const/eng';

const SurveyStep5: React.FC = () => {
  const { title, checkboxOptions, article } = SurveyStep5Const;

  return (
    <div className='survey-container'>
      <h2 className='h2 max-w-[715px]'>{title}</h2>

      <p className='roboto text-primary-storm mt-6 mb-12 text-lg'>{article}</p>

      <CheckboxGroup className='max-w-[1056px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-9'>
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
    </div>
  );
};

export default SurveyStep5;
