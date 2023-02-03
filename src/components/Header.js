import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconPack from '../global/IconPack';

import {colors, parameters} from './../global/Styles';

const Header = ({headerTitle}) => {
  return (
    <View style={styles.header}>
      <Image source={IconPack.BACK_BUTTON} style={styles.backIcon} />
      <Text style={styles.font}>{headerTitle}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    // backgroundColor: colors.aliceblue,
    flexDirection: 'row',
    // height: parameters.headerHeight,
  },
  backIcon: {
    height: 34,
    width: 34,
  },
  font: {
    fontSize: 27,
    fontFamily: 'Poppins-Bold',
  },
});
