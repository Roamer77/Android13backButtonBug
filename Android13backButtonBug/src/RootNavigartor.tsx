import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TabNavigator from './TabNavigator';

const Root = createNativeStackNavigator();
export const RootNavigator = () => {
  return (
    <Root.Navigator initialRouteName="rootScreenWithTabs">
      <Root.Screen component={TabNavigator} name={'rootScreenWithTabs'} />
    </Root.Navigator>
  );
};
