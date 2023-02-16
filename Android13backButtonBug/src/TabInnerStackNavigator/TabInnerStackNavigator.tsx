import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import Screen from './Screen';
import Screen1 from './Screen1';

const Stack = createNativeStackNavigator();

const TabInnerStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={Screen} name={'InnerStackScreen1'} />
      <Stack.Screen component={Screen1} name={'InnerStackScreen2'} />
    </Stack.Navigator>
  );
};

export default TabInnerStackNavigator;
