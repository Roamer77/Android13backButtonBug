import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabInnerStackNavigator from './TabInnerStackNavigator/TabInnerStackNavigator';

const Tabs = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen component={TabInnerStackNavigator} name={'FirstTab'} />
      <Tabs.Screen component={TabInnerStackNavigator} name={'SecondTab'} />
    </Tabs.Navigator>
  );
};

export default TabNavigator;
