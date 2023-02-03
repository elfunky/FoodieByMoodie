import {createRef} from 'react';
import {TabActions} from '@react-navigation/native';

export const navigationRef = createRef();

export function navigate(name, params) {
  handleScreenNavigation(name, params);
}

export function handleScreenNavigation(navigateTo, params) {
  navigationRef.current?.navigate(navigateTo, params);
}

export function jumpTo(name, params) {
  console.log('navigationRef', navigationRef);
  const jumpToAction = TabActions.jumpTo(name, params);
  navigationRef.current?.dispatch(jumpToAction);
}

export function goBack(isNull) {
  if (isNull) {
    navigationRef.current?.goBack(null);
  } else {
    navigationRef.current?.goBack();
  }
}
