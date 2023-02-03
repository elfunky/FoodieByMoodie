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
  return (
    <View style={styles.container}>
      <FastImage
        source={IconPack.DRAGON}
        style={styles.container}
        resizeMode={FastImage.resizeMode.cover}>
        <Header headerTitle={'Welcome'} />
        <Image source={IconPack.LOGO} style={styles.logo} />
        <View style={{marginTop: 160}}>
          <ButtonComponent
            onPress={() => onNavigateToHome()}
            topMargin={12}
            backGroundColor={colors.deepSkyBlue}
            isImage={true}
            imageSource={IconPack.FACEBOOK_LOGO}
            buttonText={'Sign In with Facebook'}
          />
          <ButtonComponent
            onPress={() => onNavigateToMarketPlace()}
            topMargin={12}
            backGroundColor={colors.white}
            isImage={true}
            imageSource={IconPack.GOOGLE_LOGO}
            buttonText={'Sign In with Google'}
          />
          <ButtonComponent
            buttonTextColor={colors.white}
            topMargin={12}
            backGroundColor={colors.black}
            isImage={true}
            imageSource={IconPack.APPLE_LOGO}
            buttonText={'Sign In with Apple'}
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
    height: 125,
    width: 144,
    tintColor: colors.orange,
    alignSelf: 'center',
    marginTop: 209,
  },
});
