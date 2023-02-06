import {makeAutoObservable, action, toJS} from 'mobx';
import {Platform, Dimensions} from 'react-native';

import * as NavigationService from '../utils/NavigationService';

import {initialWindowMetrics} from 'react-native-safe-area-context';

// import RootStore from './RootStore';
const {width, height} = Dimensions.get('window');
const heightRem = 844;
const widthRem = 390;
const horizontalScale = size => (width / widthRem) * size;
const verticalScale = size => (height / heightRem) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

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

  hRem = verticalScale;

  wRem = horizontalScale;

  fontRem = moderateScale;

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
