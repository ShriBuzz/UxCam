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
    }, {
      label: 'Android',
      value: 'android',
      icon: androidIcon,
    }, {
      label: 'Ionic',
      value: 'ionic',
    }, {
      label: 'Cordova',
      value: 'cordova',
      icon: cordovaIcon,
    }, {
      label: 'Flutter',
      value: 'flutter',
      icon: flutterIcon,
    }, {
      label: 'Unity',
      value: 'unity',
    }, {
      label: 'React Native',
      value: 'react-native',
      icon: reactIcon,
    }, {
      label: 'Xamarin',
      value: 'xamarin',
      icon: xamarinIcon,
    }, {
      label: 'Xamarin.forms',
      value: 'xamarin-forms',
    }, {
      label: 'Expo',
      value: 'expo',
      icon: iosIcon,
    }, {
      label: 'NativeScript',
      value: 'native-script',
      icon: nativeIcon,
    }, {
      label: 'Other',
      value: 'other',
      icon: androidIcon,
    }
  ],
}

const ButtonText = {
  continue: 'Continue',
  back: 'Back',
  submit: 'Submit survey',
};

export { SurveyStep1Const, SurveyStep2Const, SurveyStep3Const, ButtonText };
