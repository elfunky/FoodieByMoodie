import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import RootStore from '../stores/RootStore';
import {colors, fontFamily} from '../global/Styles';

const TextInputComponent = ({
  icon,
  placeholder,
  topMargin,
  value,
  onChangeText,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View
      style={[
        styles.container,
        {
          marginTop: topMargin,
          backgroundColor: isFocused ? colors.white : colors.whitey,
          borderWidth: 1,
          borderColor: isFocused ? colors.karlGrey : colors.whitey,
        },
      ]}>
      <Image source={icon} style={styles.imageIcon} />
      <TextInput
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={value}
        onChangeText={onChangeText}
        style={[styles.textInput]}
        placeholder={placeholder}
        placeholderTextColor={colors.violetGrey}
      />
    </View>
  );
};

export default TextInputComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.whitey,
    height: RootStore.loginStore.hRem(56),
    width: RootStore.loginStore.wRem(358),
    borderRadius: 8,
    alignSelf: 'center',
  },
  imageIcon: {
    height: RootStore.loginStore.wRem(24),
    width: RootStore.loginStore.wRem(24),
    alignSelf: 'center',
    marginLeft: RootStore.loginStore.wRem(19),
  },
  textInput: {
    fontFamily: fontFamily.popinsReguler,
    fontSize: RootStore.loginStore.fontRem(17),
    flex: 1,
    marginLeft: RootStore.loginStore.wRem(15),
    lineHeight: RootStore.loginStore.fontRem(22),
  },
});
