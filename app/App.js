import React from 'react';
import {Root} from 'native-base';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import screens from './screens';

const AppNavigator = createAppContainer(
  createStackNavigator(screens, {initialRouteName: 'Home', headerMode: 'none'}),
);

const Screens = () => (
  <Root>
    <AppNavigator />
  </Root>
);

export default Screens;
