import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, fontFamily} from '../global/Styles';
import RootStore from '../stores/RootStore';

const ButtonComponent = ({
  isImage,
  imageSource,
  buttonText,
  backGroundColor,
  topMargin,
  buttonTextColor,
  onPress,
}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => onPress()}
        style={[
          styles.buttonContainer,
          {backgroundColor: backGroundColor, marginTop: topMargin},
        ]}>
        {isImage && <Image source={imageSource} style={styles.imageStyle} />}
        <Text style={[styles.buttonText, {color: buttonTextColor}]}>
          {buttonText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    overflow: 'hidden',
    borderRadius: 12,
    height: RootStore.loginStore.hRem * 54,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    fontFamily: fontFamily.popinsMedium,
    fontSize: 20,
  },
  imageStyle: {
    height: RootStore.loginStore.hRem * 24,
    width: RootStore.loginStore.hRem * 24,
    padding: RootStore.loginStore.hRem * 15,
    marginRight: RootStore.loginStore.hRem * 15,
  },
});
