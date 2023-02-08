import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, fontFamily} from '../global/Styles';
import RootStore from '../stores/RootStore';
import {Observer} from 'mobx-react';

const ButtonComponent = ({
  isImage,
  imageSource,
  buttonText,
  backGroundColor,
  topMargin,
  buttonTextColor,
  onPress,
  buttonHeight,
  borderColor,
  borderRadius,
}) => {
  return (
    <Observer>
      {() => (
        <View>
          <TouchableOpacity
            onPress={() => onPress()}
            style={[
              styles.buttonContainer,
              {
                backgroundColor: backGroundColor,
                marginTop: topMargin,
                borderRadius: borderRadius,
                height: buttonHeight,
              },
            ]}>
            {isImage && (
              <Image source={imageSource} style={styles.imageStyle} />
            )}
            <Text style={[styles.buttonText, {color: buttonTextColor}]}>
              {buttonText}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </Observer>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    overflow: 'hidden',

    width: RootStore.loginStore.hRem(390),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    fontFamily: fontFamily.popinsMedium,
    fontSize: RootStore.loginStore.fontRem(20),
  },
  imageStyle: {
    height: RootStore.loginStore.hRem(24),
    width: RootStore.loginStore.wRem(24),
    padding: RootStore.loginStore.hRem(15),
    marginRight: RootStore.loginStore.hRem(15),
  },
});
