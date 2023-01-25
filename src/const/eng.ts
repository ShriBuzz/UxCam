// assets
import iosIcon from '@/assets/icons/apple.png';
import androidIcon from '@/assets/icons/android.png';

const SurveyStep1Const = {
  title: 'Thank you for requesting a UXCam quote.',
  article: 'Just one more thing before you go:',
  subtitle:
    'To help us tailor a plan to your needs, please answer the following questions. It will only take 2 minutes!',
};

const SurveyStep2Const = {
  title: 'Please select one',
  radioOptions: [
    {
      label: 'iOS',
      value: 'ios',
      icon: iosIcon,
    },
    {
      label: 'Android',
      value: 'android',
      icon: androidIcon,
    },
  ],
};

const ButtonText = {
  continue: 'Continue',
  back: 'Back',
  submit: 'Submit survey',
};

export { SurveyStep1Const, SurveyStep2Const, ButtonText };
