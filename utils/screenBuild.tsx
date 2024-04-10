import React from 'react';
import { Iroutes } from "router"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export const generateScreens =(routes: Iroutes)=> {
  const ret = routes?.map((route, index) => {
    if (route?.children?.length) {
      // 对于有子路由的，使用一个新的Stack.Navigator来处理
      const NestedNavigator = () => (
        <Stack.Navigator initialRouteName={route.name}>
          {generateScreens(route.children)}
        </Stack.Navigator>
      );
      return <Stack.Screen key={index} name={route.name} component={NestedNavigator} options={{
        title: route.title,
        headerShown: route.headerShown,
        headerLeft: route.headerLeft,
      }} />;
    } else {
      // 没有子路由，直接返回Screen
      return <Stack.Screen key={index} name={route.name} component={route.component} options={{
        title: route.title,
        headerShown: route.headerShown,
        headerLeft: route.headerLeft,
      }} />;
    }
  });
  return ret
}
