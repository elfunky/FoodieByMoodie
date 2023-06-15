import {LogBox, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Observer} from 'mobx-react';
import Routes from './Routes';
const App = () => {
  React.useEffect(() => {
    LogBox.ignoreAllLogs();
  });
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
