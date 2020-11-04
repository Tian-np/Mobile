import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Parallel from "./screen/Parallel";
import Sequence from "./screen/Sequence";
import Spring from "./screen/Spring";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

const Animation = createBottomTabNavigator({
  Spring: {
    screen: Spring,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <AntDesign name="smileo" size={24} color={tabInfo.tintColor} />;
      },
    },
  },
  Sequence: {
    screen: Sequence,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <AntDesign name="smileo" size={24} color={tabInfo.tintColor} />;
      },
    },
  },
  Parallel: {
    screen: Parallel,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <AntDesign name="smileo" size={24} color={tabInfo.tintColor} />;
      },
    },
  },
});

export default createAppContainer(Animation);
