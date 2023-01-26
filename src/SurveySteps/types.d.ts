import { IWizard } from 'use-wizard/lib/cjs/useWizard/types/IWizard';
import { TStep } from 'use-wizard/lib/cjs/useWizard/types/TStep';

export type TWizardProps = {
  step: TStep;
  wizard: IWizard;
  form: any;
  dispatchForm: Function;
};
