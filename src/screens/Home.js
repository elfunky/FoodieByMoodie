import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../global/Styles';
import RootStore from '../stores/RootStore';

const Home = ({route}) => {
  // const {isEmailText} = route.params;
  return (
    <View>
      <Text>{RootStore.loginStore.isEmail}</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.aliceblue,
  },
});
