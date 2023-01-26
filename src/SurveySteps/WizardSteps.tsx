import React from 'react';

// Survey steps
import Intro from '@/SurveySteps/SurveyStep1';
import OS from '@/SurveySteps/SurveyStep2';
import Framework from '@/SurveySteps/SurveyStep3';
import Session from '@/SurveySteps/SurveyStep4';
import Analytics from '@/SurveySteps/SurveyStep5';
import AppLink from '@/SurveySteps/SurveyStep6';
import Improvement from '@/SurveySteps/SurveyStep7';
import Email from '@/SurveySteps/SurveyStep8';
import End from '@/SurveySteps/SurveyStep9';

// global
import { SurveySteps } from '@/global/enum';

// types
import { TWizardProps } from './types';

const WizardSteps = (props: TWizardProps) => {
  switch (props.step) {
    case SurveySteps.INTRO:
      return <Intro {...props} />;
    case SurveySteps.OS:
      return <OS {...props} />;
    case SurveySteps.FRAMEWORK:
      return <Framework {...props} />;
    case SurveySteps.SESSION:
      return <Session {...props} />;
    case SurveySteps.ANALYTICS:
      return <Analytics {...props} />;
    case SurveySteps.APP_LINK:
      return <AppLink {...props} />;
    case SurveySteps.IMPROVEMENT:
      return <Improvement {...props} />;
    case SurveySteps.EMAIL:
      return <Email {...props} />;
    case SurveySteps.END:
      return <End {...props} />;
    default:
      return <p className='h2 text-primary-midnight'>Step does not exist</p>;
  }
};

export default WizardSteps;
