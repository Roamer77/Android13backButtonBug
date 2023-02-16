import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {Button, Text, View} from 'react-native';

const Screen = () => {
  const {navigate} = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>I am FIRST screen in inner stack Navigator</Text>
      <Button title="go next" onPress={() => navigate('InnerStackScreen2')} />
    </View>
  );
};

export default Screen;
