import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../global/Styles';

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.aliceblue,
  },
});
