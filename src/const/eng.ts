// assets
import iosIcon from '@/assets/icons/apple.png';
import androidIcon from '@/assets/icons/android.png';
import cordovaIcon from '@/assets/icons/cordova.png';
import flutterIcon from '@/assets/icons/flutter.png';
import reactIcon from '@/assets/icons/react.png';
import xamarinIcon from '@/assets/icons/xamarin.png';
import nativeIcon from '@/assets/icons/native.png';
import ionicIcon from '@/assets/icons/ionic.png';
import unityIcon from '@/assets/icons/unity.png';

// analytics icons
import googleIcon from '@/assets/analytics/google-analytics.png';
import firebaseIcon from '@/assets/analytics/firebase.png';
import adobeIcon from '@/assets/analytics/adobe.png';
import mixpanelIcon from '@/assets/analytics/mixpanel.png';
import amplitudeIcon from '@/assets/analytics/amplitude.png';
import cleverTapIcon from '@/assets/analytics/clevertap.webp';
import segmentIcon from '@/assets/analytics/segment.png';
import instabugIcon from '@/assets/analytics/instabug.png';
import appsflyerIcon from '@/assets/analytics/appsflyer.png';
import branchIcon from '@/assets/analytics/branch.png';
import adjustIcon from '@/assets/analytics/adjust.png';
import sentryIcon from '@/assets/analytics/sentry.png';
import flurryIcon from '@/assets/analytics/flurry.png';

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
      icon: ionicIcon,
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
      icon: unityIcon,
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
      icon: xamarinIcon,
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

const SurveyStep4Const = {
  title: 'How many monthly sessions does each app receive?',
  article:
    'A session is every time a user opens the app, uses it, and when they put the app into the background, the session ends.',
  radioOptions: [
    {
      label: '01-49',
      value: '01-49',
    },
    {
      label: '50-100',
      value: '50-100',
    },
    {
      label: '101-200',
      value: '101-200',
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
      icon: googleIcon,
    },
    {
      label: 'Firebase',
      value: 'firebase',
      icon: firebaseIcon,
    },
    {
      label: 'Adobe',
      value: 'adobe',
      icon: adobeIcon,
    },
    {
      label: 'Mixpanel',
      value: 'mixpanel',
      icon: mixpanelIcon,
    },
    {
      label: 'Amplitude',
      value: 'amplitude',
      icon: amplitudeIcon,
    },
    {
      label: 'Clever Tap',
      value: 'clever-tap',
      icon: cleverTapIcon,
    },
    {
      label: 'Segment',
      value: 'segment',
      icon: segmentIcon,
    },
    {
      label: 'Instabug',
      value: 'instabug',
      icon: instabugIcon,
    },
    {
      label: 'Appsflyer',
      value: 'appsflyer',
      icon: appsflyerIcon,
    },
    {
      label: 'Branch',
      value: 'branch',
      icon: branchIcon,
    },
    {
      label: 'Adjust',
      value: 'adjust',
      icon: adjustIcon,
    },
    {
      label: 'Sentry',
      value: 'sentry',
      icon: sentryIcon,
    },
    {
      label: 'Flurry',
      value: 'flurry',
      icon: flurryIcon,
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

const SurveyStep6Const = {
  title: 'App links',
  article:
    'Please include a Google Play Store or App Store link to your app (if available)',
  inputPlaceholder: 'Insert App link here',
};

const SurveyStep7Const = {
  title: 'What areas of your app are you looking to improve with UXCam?',
  article: 'Please select all that apply',
  checkboxOptions: [
    {
      label: 'Improve overall UX',
    },
    {
      label: 'Increase feature adoption',
    },
    {
      label: 'Increase app retention',
    },
    {
      label: 'Improve onboarding experience',
    },
    {
      label: 'Increase key conversions',
    },
    {
      label: 'Understand in-app user journeys',
    },
    {
      label: 'Improve app store rating & NPS',
    },
    {
      label: 'Incorporate UX feedback into product research and development',
    },
    {
      label:
        'Support Customer Success and Engineering teams in resolving bugs & crashes',
    },
    {
      label: 'Other (please specify at the bottom of the form)',
    },
    {
      label: 'Capture qualitative insights and understand why users drop-off',
    },
  ],
};

const SurveyStep8Const = {
  title: 'Primary contact email',
  inputPlaceholder: 'name@company.com',
};

const SurveyStep9Const = {
  title: 'Thank you for completing our survey!',
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
  SurveyStep4Const,
  SurveyStep5Const,
  SurveyStep6Const,
  SurveyStep7Const,
  SurveyStep8Const,
  SurveyStep9Const,
};
