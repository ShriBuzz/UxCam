import { useReducer, useMemo } from 'react';

// packages
import { useWizard } from 'use-wizard';

// components
import Logo from '@/components/Logo';
import ProgressBar from '@/components/ProgressBar';

// steps
import WizardSteps from '@/SurveySteps/WizardSteps';

// global
import { SurveySteps } from '@/global/enum';

// reducer
import formReducer from '@/reducer';

function App() {
  const [step, wizard] = useWizard([
    SurveySteps.INTRO,
    SurveySteps.OS,
    SurveySteps.FRAMEWORK,
    SurveySteps.SESSION,
    SurveySteps.ANALYTICS,
    SurveySteps.APP_LINK,
    SurveySteps.IMPROVEMENT,
    SurveySteps.EMAIL,
    SurveySteps.END,
  ]);

  // This is only used to store user inputs
  const [form, dispatchForm] = useReducer(formReducer, {});

  const MemoizedProgressBar = useMemo(() => {
    return (
      <span className='absolute top-0 w-full'>
        <ProgressBar
          currentStep={wizard.stepIndex()}
          // -2 because we don't want to count the intro and end steps
          totalSteps={wizard.wizardLength() - 2}
        />
      </span>
    );
  }, [wizard.stepIndex()]);

  return (
    <main className='bg-primary-cloud'>
      {wizard.stepIndex() > 0 && MemoizedProgressBar}
      <div className='w-full h-screen pt-[180px] overflow-x-hidden'>
        <header className='container h-max flex-center flex-col gap-9 mx-auto'>
          <Logo />
          {wizard.stepIndex() > 0 &&
            wizard.stepIndex() !== wizard.wizardLength() - 1 && (
              <p className='roboto text-sm text-primary-sky tracking-[0.2em] uppercase'>
                {/* -2 because we don't want to count the intro and end steps */}
                question {wizard.stepIndex()} / {wizard.wizardLength() - 2}
              </p>
            )}
        </header>

        {/* Survey steps container */}
        <section className={`container mx-auto mt-12 pb-16 `}>
          <WizardSteps {...{ step, wizard, form, dispatchForm }} />
        </section>
      </div>
    </main>
  );
}

export default App;
