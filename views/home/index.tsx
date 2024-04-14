import React, { FC, memo } from 'react';
import { View, Text } from 'react-native';
import { Button, Toast } from '@ant-design/react-native';
import Banner from './components/banner';
type IProps = {};
const Index: FC<IProps> = () => {
  const clickHandle = () => {
    console.log(123123123123);
    Toast.info('This is a toast tips')
  }

  return <View>
    <Banner />
    <Text style={{ fontFamily: 'antfill', fontSize: 20 }}>index111</Text>
    <Button type="primary" onPress={clickHandle}>
      Start
    </Button>
  </View>;
};
Index.displayName = 'home'
export default memo(Index);