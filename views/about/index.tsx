import React from 'react';
import { FC, memo } from 'react';
import { View, Text } from 'react-native';

type IProps = {};
const Index: FC<IProps> = () => {
  return <View><Text>index222</Text></View>;
};
Index.displayName ='about'
export default memo(Index);