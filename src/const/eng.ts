// assets
import iosIcon from '@/assets/icons/apple.png';
import androidIcon from '@/assets/icons/android.png';
import cordovaIcon from '@/assets/icons/cordova.png';
import flutterIcon from '@/assets/icons/flutter.png';
import reactIcon from '@/assets/icons/react.png';
import xamarinIcon from '@/assets/icons/xamarin.png';
import nativeIcon from '@/assets/icons/native.png';

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

const SurveyStep3Const = {
  title: 'What framework is your app developed on?',
  checkboxOptions: [
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
    {
      label: 'Ionic',
      value: 'ionic',
    },
    {
      label: 'Cordova',
      value: 'cordova',
      icon: cordovaIcon,
    },
    {
      label: 'Flutter',
      value: 'flutter',
      icon: flutterIcon,
    },
    {
      label: 'Unity',
      value: 'unity',
    },
    {
      label: 'React Native',
      value: 'react-native',
      icon: reactIcon,
    },
    {
      label: 'Xamarin',
      value: 'xamarin',
      icon: xamarinIcon,
    },
    {
      label: 'Xamarin.forms',
      value: 'xamarin-forms',
    },
    {
      label: 'Expo',
      value: 'expo',
      icon: iosIcon,
    },
    {
      label: 'NativeScript',
      value: 'native-script',
      icon: nativeIcon,
    },
    {
      label: 'Other',
      value: 'other',
      icon: androidIcon,
    },
  ],
};

const SurveyStep5Const = {
  title: 'What analytics tools are you currently using with your app?',
  article: 'Please select all that apply',
  checkboxOptions: [
    {
      label: 'Google Analytics',
      value: 'google-analytics',
      icon: iosIcon,
    },
    {
      label: 'Firebase',
      value: 'firebase',
      icon: androidIcon,
    },
    {
      label: 'Adobe',
      value: 'adobe',
    },
    {
      label: 'Mixpanel',
      value: 'mixpanel',
      icon: iosIcon,
    },
    {
      label: 'Amplitude',
      value: 'amplitude',
      icon: androidIcon,
    },
    {
      label: 'Clever Tap',
      value: 'clever-tap',
    },
    {
      label: 'Segment',
      value: 'segment',
      icon: iosIcon,
    },
    {
      label: 'Instabug',
      value: 'instabug',
      icon: androidIcon,
    },
    {
      label: 'Appsflyer',
      value: 'appsflyer',
    },
    {
      label: 'Branch',
      value: 'branch',
      icon: iosIcon,
    },
    {
      label: 'Adjust',
      value: 'adjust',
      icon: androidIcon,
    },
    {
      label: 'Sentry',
      value: 'sentry',
    },
    {
      label: 'Flurry',
      value: 'flurry',
      icon: iosIcon,
    },
    {
      label: 'Others',
      value: 'others',
      icon: androidIcon,
    },
    {
      label: 'No Analytics',
      value: 'no-analytics',
    },
  ],
};

const ButtonText = {
  continue: 'Continue',
  back: 'Back',
  submit: 'Submit survey',
};

export {
  ButtonText,
  SurveyStep1Const,
  SurveyStep2Const,
  SurveyStep3Const,
  SurveyStep5Const,
};
