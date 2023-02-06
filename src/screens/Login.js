// @ts-nocheck
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from './Home';
import Header from './../components/Header';
import FastImage from 'react-native-fast-image';
import IconPack from '../global/IconPack';
import {colors} from '../global/Styles';
import ButtonComponent from '../components/ButtonComponent';
import RootStore from '../stores/RootStore';
const Login = () => {
  const onNavigateToHome = () => {
    RootStore.loginStore.handleScreenNavigation('Home');
  };
  const onNavigateToMarketPlace = () => {
    RootStore.loginStore.handleScreenNavigation('MarketPlace');
  };
  const onNavigateToEmailLogin = () => {
    RootStore.loginStore.handleScreenNavigation('EmailLogin');
  };
  return (
    <View style={styles.container}>
      <FastImage
        source={IconPack.DRAGON}
        style={styles.container}
        resizeMode={FastImage.resizeMode.cover}>
        {/* <Header headerTitle={'Welcome'} /> */}
        <Image source={IconPack.LOGO} style={styles.logo} />
        <View style={{marginTop: RootStore.loginStore.hRem(160)}}>
          <ButtonComponent
            buttonTextColor={colors.white}
            onPress={() => onNavigateToHome()}
            topMargin={RootStore.loginStore.hRem(12)}
            backGroundColor={colors.deepSkyBlue}
            isImage={true}
            imageSource={IconPack.FACEBOOK_LOGO}
            buttonText={'Sign In with Facebook'}
          />
          <ButtonComponent
            onPress={() => onNavigateToMarketPlace()}
            topMargin={RootStore.loginStore.hRem(12)}
            backGroundColor={colors.white}
            isImage={true}
            imageSource={IconPack.GOOGLE_LOGO}
            buttonText={'Sign In with Google'}
          />
          <ButtonComponent
            buttonTextColor={colors.white}
            topMargin={RootStore.loginStore.hRem(12)}
            backGroundColor={colors.black}
            isImage={true}
            imageSource={IconPack.APPLE_LOGO}
            buttonText={'Sign In with Apple'}
          />
          <View style={styles.border} />
          <ButtonComponent
            onPress={() => onNavigateToEmailLogin()}
            buttonTextColor={colors.peach}
            topMargin={RootStore.loginStore.hRem(28)}
            backGroundColor={colors.white}
            buttonText={'Sign up with Email'}
            buttonHeight={RootStore.loginStore.hRem(56)}
          />
        </View>
      </FastImage>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    height: RootStore.loginStore.hRem(125),
    width: RootStore.loginStore.wRem(144),
    aspectRatio: 144 / 125,
    tintColor: colors.orange,
    alignSelf: 'center',
    marginTop: RootStore.loginStore.wRem(165),
  },
  border: {
    height: 2,
    backgroundColor: colors.beige,
    width: RootStore.loginStore.wRem(230),
    alignSelf: 'center',
    marginTop: RootStore.loginStore.hRem(28),
  },
});
