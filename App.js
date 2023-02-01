import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from 'components/Header';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <Text>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
