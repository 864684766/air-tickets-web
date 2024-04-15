import React from "react";
import Home from "@views/home/index";
import About from "@views/about/index";
import News from "@views/news/index";
import { Text, View } from "react-native";


const routes: Iroutes = [
  {
    name: "Home",
    title: "",
    component: Home,
    headerShown: true,
    headerLeft: () => {
      return (
        <View>
          <Text>123123</Text>
        </View>
      );
    },
    children: [],
  },
  {
    name: "About",
    component: About,
    // children: [{ name: "News", component: News }],
  },
];
type Iroutes =
  | {
      name: string;
      title?: string;
      component: React.NamedExoticComponent<any>;
      headerShown?: boolean;
      headerLeft?: any;
      children?: Iroutes;
    }[]
  | undefined;
export { routes, Iroutes };
