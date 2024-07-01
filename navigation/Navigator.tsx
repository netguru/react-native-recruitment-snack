import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


import {SearchScreen} from '../screens/Search';
import { TabNavigatorParamsList } from '../types/navigation';

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
