import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Restart } from "fiction-expo-restart";
import AntDesign from '@expo/vector-icons/AntDesign';

import { SearchScreen } from '../screens/Search';
import { TabNavigatorParamsList } from '../types/navigation';

const TabNavigator = createBottomTabNavigator<TabNavigatorParamsList>();

const ReloadButton = () => (
    <AntDesign.Button name="reload1" size={24} color="black" backgroundColor="transparent" onPress={Restart} />
);

export const Navigator = () => {
  return (
    <NavigationContainer>
      <TabNavigator.Navigator screenOptions={{ headerRight: ReloadButton }}>
        <TabNavigator.Screen name="Search" component={SearchScreen} />
      </TabNavigator.Navigator>
    </NavigationContainer>
  );
};
