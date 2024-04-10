import React from 'react';
import { FC, memo } from 'react';
import { View, Text } from 'react-native';

type IProps = {};
const Index: FC<IProps> = () => {
  return <View><Text>index1231564 </Text></View>;
};
Index.displayName = 'news'
export default memo(Index);