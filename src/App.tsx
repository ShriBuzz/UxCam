import { useState } from 'react';

// components
import Logo from '@/components/Logo';

import SurveyStep1 from './SurveySteps/SurveyStep1';

function App() {
  const [step] = useState(0);

  return (
    <main className='w-screen h-screen bg-primary-cloud pt-[180px] overflow-x-hidden'>
      <header className='container h-max flex-center flex-col gap-9 mx-auto'>
        <Logo />
        {step > 0 && (
          <p className='roboto text-sm text-primary-sky tracking-[0.2em] uppercase'>
            question {step} / 7
          </p>
        )}
      </header>

      {/* Survey steps container */}
      <section className={`container mx-auto mt-12 pb-16 `}>
        <SurveyStep1 />
      </section>
    </main>
  );
}

export default App;
