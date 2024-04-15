import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { routes } from "./router/index";
import { Provider } from "@ant-design/react-native";
import { useLoadFont } from "utils/hooks/loadFont";
import { generateScreens } from "utils/screenBuild";
import Header from "./components/header";
export default function App() {
  const Stack = createNativeStackNavigator();
  const isReady = useLoadFont();
  if (!isReady) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ header: (p) => <Header /> }}>
          {generateScreens(routes)}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headerStyle: {
    height: 100, // 设置导航栏高度为100
  },
});
