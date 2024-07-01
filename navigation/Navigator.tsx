import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {TabNavigatorParamsList} from './models';

import {SearchScreen} from '../screens/Search';

const TabNavigator = createBottomTabNavigator<TabNavigatorParamsList>();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <TabNavigator.Navigator>
        <TabNavigator.Screen name="Search" component={SearchScreen} />
      </TabNavigator.Navigator>
    </NavigationContainer>
  );
};
