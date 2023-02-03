// @ts-nocheck
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from './src/components/Header';
import Login from './src/screens/Login';
import {Observer} from 'mobx-react';
import Routes from './Routes';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
const App = () => {
  return (
    <Observer>
      {() => (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <Routes />
        </View>
      )}
    </Observer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
