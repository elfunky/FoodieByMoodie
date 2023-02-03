import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {observer, Observer} from 'mobx-react';
import React, {useEffect} from 'react';
import {StatusBar, Image} from 'react-native';
// AuthLoading

import {navigationRef} from './src/utils/NavigationService';

// Menu or profile stack

import RootStore from './src/stores/RootStore';
const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import MarketPlace from './src/screens/MarketPlace';

const Routes = observer(() => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Observer>
        {() => (
          <>
            <Stack.Navigator>
              <Stack.Screen
                name="Login"
                component={Login}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Home"
                component={Home}
                options={{
                  headerShown: true,
                }}
              />
              <Stack.Screen
                name="MarketPlace"
                component={MarketPlace}
                options={{
                  headerShown: true,
                }}
              />
            </Stack.Navigator>
          </>
        )}
      </Observer>
    </NavigationContainer>
  );
});

export default Routes;
