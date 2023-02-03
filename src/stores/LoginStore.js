import {makeAutoObservable, action, toJS} from 'mobx';
import {Platform} from 'react-native';

import * as NavigationService from '../utils/NavigationService';

import {initialWindowMetrics} from 'react-native-safe-area-context';

// import RootStore from './RootStore';

const height = initialWindowMetrics.frame.height;
const width = initialWindowMetrics.frame.width;
const hRem = height / 772;
const wRem = width / 375;

const NUMBERS = [
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4},
  {id: 5},
  {id: 6},
  {id: 7},
  {id: 8},
  {id: 9},
  {
    id: 10,
  },
  {id: 0},
  {
    id: 11,
  },
];

export class LoginStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  hRem = hRem;

  wRem = wRem;

  numbers = NUMBERS;

  screenWidth = width;

  screenHeight = height;

  isiOS = Platform.OS === 'ios';

  isAndroid = Platform.OS === 'android';

  showSplashScreeniOS = Platform.OS === 'ios';

  //   isTablet = isTablet();

  isLoading = false;

  setFields(eName, data) {
    this[eName] = data;
    console.log(eName, data);
  }

  handleScreenNavigation(navigateTo, params) {
    NavigationService.navigate(navigateTo, params || {});
  }

  handleScreenNavigationGoBack(params) {
    NavigationService.goBack(params || {});
  }

  handleTabJumpTo(jumpTo, params) {
    NavigationService.jumpTo(jumpTo, params || {});
  }

  /**
   * Register Device & get unique reg_id
   */

  get isIphoneX() {
    return (
      this.isiOS &&
      //   !Platform.isPad &&
      //   !Platform.isTVOS &&
      (height === 780 ||
        width === 780 ||
        height === 812 ||
        width === 812 ||
        height === 844 ||
        width === 844 ||
        height === 896 ||
        width === 896 ||
        height === 926 ||
        width === 926)
    );
  }
}
export default LoginStore;
