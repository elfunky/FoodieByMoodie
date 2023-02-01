import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from 'screens/Home';

import {colors, parameters} from './../global/Styles';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text>Header</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.aliceblue,
    flexDirection: 'row',
    height: parameters.headerHeight,
  },
});
