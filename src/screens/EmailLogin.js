// @ts-nocheck
import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import FastImage from 'react-native-fast-image';
import IconPack from '../global/IconPack';
import RootStore from '../stores/RootStore';
import {colors, fontFamily} from '../global/Styles';
import TextInputComponent from '../components/TextInputComponent';
import ButtonComponent from '../components/ButtonComponent';
const EmailLogin = () => {
  const onNavigateToCreateAccount = () => {
    RootStore.loginStore.handleScreenNavigation('Home');
  };
  return (
    <View style={styles.container}>
      <FastImage source={IconPack.LOGIN_LOGO} style={styles.logoImage} />
      <Text style={styles.headersText}>Welcome back!</Text>
      <View style={{marginTop: RootStore.loginStore.hRem(24)}}>
        <TextInputComponent
          onFocus={RootStore.loginStore.isEmail}
          icon={IconPack.EMAIL_ICON}
          placeholder={'Email'}
          onChangeText={isEmailText =>
            RootStore.loginStore.setFields('isEmail', isEmailText)
          }
          value={RootStore.loginStore.isEmail}
        />
        <TextInputComponent
          onFocus={RootStore.loginStore.isPassword}
          topMargin={RootStore.loginStore.hRem(16)}
          icon={IconPack.PASS_ICON}
          placeholder={'Password'}
          onChangeText={isPassword =>
            RootStore.loginStore.setFields('isPassword', isPassword)
          }
          value={RootStore.loginStore.isPassword}
        />
        <View style={styles.border} />
        <ButtonComponent
          onPress={() => onNavigateToCreateAccount()}
          buttonTextColor={colors.peach}
          topMargin={RootStore.loginStore.hRem(28)}
          backGroundColor={colors.white}
          buttonText={'Sign up with Email'}
          buttonHeight={RootStore.loginStore.hRem(56)}
        />
      </View>
    </View>
  );
};

export default EmailLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  logoImage: {
    height: RootStore.loginStore.hRem(123),
    width: null,
    marginTop: RootStore.loginStore.hRem(102),
  },
  headersText: {
    textAlign: 'center',
    fontSize: RootStore.loginStore.fontRem(28),
    lineHeight: RootStore.loginStore.fontRem(34),
    marginTop: RootStore.loginStore.hRem(31),
    fontFamily: fontFamily.popinsBold,
    color: colors.teflonGray,
  },
  border: {
    height: 2,
    backgroundColor: colors.beige,
    width: RootStore.loginStore.wRem(230),
    alignSelf: 'center',
    marginTop: RootStore.loginStore.hRem(28),
  },
});
