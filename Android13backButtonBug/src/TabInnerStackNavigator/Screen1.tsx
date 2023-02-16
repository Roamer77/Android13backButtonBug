import * as React from 'react';
import {Text, View} from 'react-native';

const Screen1 = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>I am FIRST screen in inner stack Navigator</Text>
    </View>
  );
};

export default Screen1;
